const express = require('express');
const path = require('path');
const { createServer } = require('http');
require('dotenv').config();
const cors = require('cors');
const { peerProxy } = require('./peerProxy');
const { connectToCollection } = require('./utils/database');
const databaseRoutes = require('./routes/database');
const authRoutes = require('./routes/auth');
const OpenAI = require('openai');
const authMiddleware = require('./middleware/auth');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

const httpServer = createServer(app);

const { broadcastMessage } = peerProxy(httpServer);

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);

app.use('/api/database', authMiddleware, databaseRoutes);

const apiRouter = express.Router();
app.use('/api', apiRouter);

const sessions = {};
const logs = [];

apiRouter.get('/chatbot', (req, res) => {
  res.json(logs);
});

apiRouter.post('/chatbot/start', async (req, res) => {
  const userEmail = req.headers['x-user-email'];
  if (!userEmail) {
    return res.status(401).json({ msg: 'Not authorized' });
  }

  const { scene, dmPrompt } = req.body;
  let systemPrompt = `You are roleplaying as a Dungeons & Dragons player character...`;
  if (scene) systemPrompt += ` The scene is a ${scene.replace('-', ' ')}.`;
  if (dmPrompt) systemPrompt += ` ${dmPrompt}`;
  systemPrompt += ` Introduce yourself by stating your name, race, class, and level...`;

  const sessionId = Date.now().toString();
  const conversation = [{ role: 'system', content: systemPrompt }];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    });

    const reply = completion.choices[0].message.content.trim();
    conversation.push({ role: 'assistant', content: reply });
    sessions[sessionId] = conversation;

    logs.push({
      sessionId,
      scene: scene || 'N/A',
      dmPrompt: dmPrompt || 'N/A',
      initialReply: reply,
      timestamp: new Date().toISOString(),
    });

    const sessionsCollection = await connectToCollection('chatSessions');
    const chatSession = {
      userEmail,
      sessionId,
      scene: scene || 'N/A',
      startTime: new Date(),
      lastUpdate: new Date()
    };
    await sessionsCollection.insertOne(chatSession);

    res.json({ reply, sessionId });
  } catch (error) {
    console.error('Error starting adventure:', error.message);
    res.status(500).json({ error: 'Error starting the adventure. Please try again.' });
  }
});

apiRouter.post('/chatbot', async (req, res) => {
  const userEmail = req.headers['x-user-email'];
  if (!userEmail) {
    return res.status(401).json({ msg: 'Not authorized' });
  }

  const { message, sessionId } = req.body;
  if (!message || !sessionId || !sessions[sessionId]) {
    return res.status(400).json({ error: 'Invalid session or message.' });
  }

  const conversation = sessions[sessionId];
  conversation.push({ role: 'user', content: message });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    });

    const reply = completion.choices[0].message.content.trim();
    conversation.push({ role: 'assistant', content: reply });

    const log = logs.find((log) => log.sessionId === sessionId);
    if (log) {
      log.latestMessage = message;
      log.latestReply = reply;
    }

    broadcastMessage({ type: 'chat_reply', sessionId, message: reply });

    const sessionsCollection = await connectToCollection('chatSessions');
    await sessionsCollection.updateOne(
      { userEmail, sessionId },
      { $set: { lastUpdate: new Date() } }
    );

    res.json({ reply });
  } catch (error) {
    console.error('Error during chat:', error.message);
    res.status(500).json({ error: 'Error communicating with the chatbot service.' });
  }
});

app.get('/example', async (req, res) => {
  try {
    const collection = await connectToCollection('exampleCollection');
    const testDoc = { name: 'Refactored Data', value: 99 };
    const result = await collection.insertOne(testDoc);

    const docs = await collection.find({}).toArray();
    res.json({ insertedId: result.insertedId, documents: docs });
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

httpServer.listen(port, () => {
  console.log(`HTTP Server running on port ${port}`);
  console.log(`WebSocket Server running on port ${port}`);
});
