const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { connectToCollection } = require('./utils/database');
require('dotenv').config();
const databaseRoutes = require('./routes/database');
const authRoutes = require('./routes/auth');
const OpenAI = require('openai');

// Configure OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Create an HTTP server and initialize WebSocket
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*', // Adjust this for production to restrict allowed origins
    methods: ['GET', 'POST'],
  },
});

// Middleware for JSON parsing
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Register database routes
app.use('/api/database', databaseRoutes);

// Register auth routes
app.use('/api/auth', authRoutes);

// API Router
const apiRouter = express.Router();
app.use('/api', apiRouter);

// In-memory storage for sessions and logs
const sessions = {};
const logs = [];

// WebSocket event handling
io.on('connection', (socket) => {
  console.log('A client connected:', socket.id);

  // Listen for typing indicator requests
  socket.on('player_typing', (sessionId) => {
    if (sessions[sessionId]) {
      io.emit('player_thinking', { sessionId, message: 'Your player is thinking...' });
    }
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// GET Route for /api/chatbot to display session logs
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
    console.error(
      'Error starting adventure:',
      error.response ? error.response.data : error.message
    );
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

    res.json({ reply });
  } catch (error) {
    console.error(
      'Error during chat:',
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: 'Error communicating with the chatbot service.' });
  }
});

// Example MongoDB integration
app.get('/example', async (req, res) => {
  try {
    const collection = await connectToCollection('exampleCollection');

    // Insert a test document
    const testDoc = { name: 'Refactored Data', value: 99 };
    const result = await collection.insertOne(testDoc);

    // Query the collection
    const docs = await collection.find({}).toArray();

    res.json({ insertedId: result.insertedId, documents: docs });
  } catch (err) {
    res.status(500).send('Error: ' + err.message);
  }
});

// Fallback to React index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
httpServer.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
