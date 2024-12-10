const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const sessions = {};

router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', 
      messages: [{ role: 'user', content: message }],
      max_tokens: 50, 
    });

    const reply = completion.choices[0].message.content.trim();

    res.json({ reply });
  } catch (error) {
    console.error(
      'Error calling OpenAI API:',
      error.response ? error.response.data : error.message
    );

    if (error.response && error.response.status === 429) {
      return res.status(429).json({
        error:
          'You have exceeded your quota. Please check your OpenAI plan and billing details.',
      });
    }

    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/websocket/start', (req, res) => {
  const { sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ error: 'Session ID is required' });
  }

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
