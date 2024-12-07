const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const router = express.Router();

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// In-memory session store for WebSocket-enabled chatbot sessions
const sessions = {};

// Chatbot Route for standard API-based communication
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Use the cheaper model (gpt-3.5-turbo)
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Specify the cheaper model
      messages: [{ role: 'user', content: message }],
      max_tokens: 50, // Limit tokens to control costs
    });

    const reply = completion.choices[0].message.content.trim();

    // Send the chatbot's reply
    res.json({ reply });
  } catch (error) {
    console.error(
      'Error calling OpenAI API:',
      error.response ? error.response.data : error.message
    );

    // Handle quota error specifically
    if (error.response && error.response.status === 429) {
      return res.status(429).json({
        error:
          'You have exceeded your quota. Please check your OpenAI plan and billing details.',
      });
    }

    // Handle other errors
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Chatbot route for WebSocket-enabled sessions
router.post('/websocket/start', (req, res) => {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: 'Session ID is required' });
  }

  // Initialize a WebSocket-enabled conversation
  sessions[sessionId] = [
    {
      role: 'system',
      content:
        'You are a new and interested Dungeons & Dragons player character. You are now starting an encounter with your Dungeon Master. Respond to Dungeon Masters messages as a player character.',
    },
  ];

  res.json({ message: `WebSocket session ${sessionId} initialized.` });
});

module.exports = router;
