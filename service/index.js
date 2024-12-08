// /Users/matthew/Desktop/cs260/startupv3/service/index.js
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
const authMiddleware = require('./middleware/auth'); // Updated auth middleware

// Configure OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Create an HTTP server
const httpServer = createServer(app);

// Initialize the peerProxy
const { broadcastMessage } = peerProxy(httpServer);

// Middleware
app.use(express.json());

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', // your frontend origin
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Auth routes
app.use('/api/auth', authRoutes);

// Database routes (protected)
app.use('/api/database', authMiddleware, databaseRoutes);

// Additional API Router
const apiRouter = express.Router();
app.use('/api', apiRouter);

// In-memory sessions and logs
const sessions = {};
const logs = [];

// GET /api/chatbot to display logs
apiRouter.get('/chatbot', (req, res) => {
  res.json(logs);
});

// Start Adventure Route
apiRouter.post('/chatbot/start', async (req, res) => {
  const { scene, dmPrompt } = req.body;

  const sessionId = Date.now().toString();
  let systemPrompt = `You are roleplaying as a Dungeons & Dragons player character...`;
  if (scene) systemPrompt += ` The scene is a ${scene.replace('-', ' ')}.`;
  if (dmPrompt) systemPrompt += ` ${dmPrompt}`;
  systemPrompt += ` Introduce yourself by stating your name, race, class, and level...`;

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

    res.json({ reply, sessionId });
  } catch (error) {
    console.error('Error starting adventure:', error.message);
    res.status(500).json({ error: 'Error starting the adventure. Please try again.' });
  }
});

// Chatbot Route
apiRouter.post('/chatbot', async (req, res) => {
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

    res.json({ reply });
  } catch (error) {
    console.error('Error during chat:', error.message);
    res.status(500).json({ error: 'Error communicating with the chatbot service.' });
  }
});

// Example MongoDB integration
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

// Fallback to React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

httpServer.listen(port, () => {
  console.log(`HTTP Server running on port ${port}`);
  console.log(`WebSocket Server running on port ${port}`);
});
