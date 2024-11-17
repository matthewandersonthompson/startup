// service/index.js

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
app.use(express.static('public'));

// API Router
const apiRouter = express.Router();
app.use('/api', apiRouter);

// Import OpenAI API (v4 syntax)
const OpenAI = require('openai');

// Configure OpenAI API
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Your OpenAI API key from .env
});

// In-memory storage for conversation history (per session)
// For production, consider using a database or session management
const sessions = {};

// Start Adventure Route
apiRouter.post('/chatbot/start', async (req, res) => {
  const { scene, dmPrompt } = req.body;

  // Generate a unique session ID (in production, use proper session management)
  const sessionId = Date.now().toString();

  // Create the initial system prompt
  let systemPrompt = `You are roleplaying as a Dungeons & Dragons player character. Your goal is to interact with the Dungeon Master (DM) by making decisions, asking questions, and performing actions as your character. Never break character or respond as a chatbot, ONLY speak in character. They are the DM you are the player, so never tell them what to do. Just state what you do. If they ask you to make a roll of any time, just respond with the number nothing else.`;

  // Add scene-specific instructions
  if (scene) {
    systemPrompt += ` The scene is a ${scene.replace('-', ' ')}.`;
  }

  // Add custom DM prompt if provided
  if (dmPrompt) {
    systemPrompt += ` ${dmPrompt}`;
  }

  systemPrompt += ` Introduce yourself by stating your name, race, class, and level. Then wait for the Dungeon Master to continue. Remember to stay in character and respond appropriately to the DM's descriptions and challenges.`;

  // Initialize conversation history
  const conversation = [{ role: 'system', content: systemPrompt }];

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    });

    const reply = completion.choices[0].message.content.trim();

    // Add assistant's reply to conversation
    conversation.push({ role: 'assistant', content: reply });

    // Store the conversation using sessionId
    sessions[sessionId] = conversation;

    // Send sessionId and initial reply to the client
    res.json({ reply, sessionId });
  } catch (error) {
    console.error(
      'Error starting adventure:',
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: 'Error starting the adventure. Please try again.' });
  }
});

// Chatbot Route
apiRouter.post('/chatbot', async (req, res) => {
  const { message, sessionId } = req.body;

  if (!message || !sessionId || !sessions[sessionId]) {
    return res.status(400).json({ error: 'Invalid session or message.' });
  }

  // Retrieve conversation history
  const conversation = sessions[sessionId];

  // Add user's message to conversation
  conversation.push({ role: 'user', content: message });

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
    });

    const reply = completion.choices[0].message.content.trim();

    // Add assistant's reply to conversation
    conversation.push({ role: 'assistant', content: reply });

    // Send the reply to the client
    res.json({ reply });
  } catch (error) {
    console.error(
      'Error during chat:',
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: 'Error communicating with the chatbot service.' });
  }
});

// Fallback to React index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
