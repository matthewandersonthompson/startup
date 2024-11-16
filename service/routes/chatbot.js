const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const router = express.Router();

// OpenAI Configuration
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Chatbot Route
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

module.exports = router;
