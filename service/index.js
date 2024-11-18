const express = require('express');
const path = require('path');
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Port configuration
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// Middleware for JSON parsing
app.use(express.json());

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Router
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Import OpenAI API (v4 syntax)
const OpenAI = require('openai');

// Configure OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key from .env
});

// In-memory storage for sessions and logs
const sessions = {}; // Stores conversation history keyed by session ID
const logs = []; // Stores data for each session (scene, dmPrompt, sessionId, etc.)

// GET Route for /api/chatbot to display session logs
apiRouter.get('/chatbot', (req, res) => {
  res.json(logs);
});

// Start Adventure Route
apiRouter.post('/chatbot/start', async (req, res) => {
  const { scene, dmPrompt } = req.body;

  const sessionId = Date.now().toString(); // Generate a unique session ID

  let systemPrompt = `You are roleplaying as a Dungeons & Dragons player character. Your goal is to interact with the Dungeon Master (DM) by making decisions, asking questions, and performing actions as your character. Never break character or respond as a chatbot, ONLY speak in character. They are the DM you are the player, so never tell them what to do. Just state what you do. If they ask you to make a roll of any type, just respond with the number nothing else.`;

  if (scene) {
    systemPrompt += ` The scene is a ${scene.replace('-', ' ')}.`;
  }
  if (dmPrompt) {
    systemPrompt += ` ${dmPrompt}`;
  }
  systemPrompt += ` Introduce yourself by stating your name, race, class, and level. Then wait for the Dungeon Master to continue. Remember to stay in character and respond appropriately to the DM's descriptions and challenges.`;

  const conversation = [{ role: 'system', content: systemPrompt }];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    });

    const reply = completion.choices[0].message.content.trim();
    conversation.push({ role: 'assistant', content: reply }); // Save assistant's reply

    sessions[sessionId] = conversation; // Store conversation in memory

    // Log the session details
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

  const conversation = sessions[sessionId]; // Retrieve conversation history
  conversation.push({ role: 'user', content: message }); // Add user's message

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    });

    const reply = completion.choices[0].message.content.trim();
    conversation.push({ role: 'assistant', content: reply }); // Save assistant's reply

    // Update logs with the latest reply
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

// Fallback to React index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
