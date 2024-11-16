const express = require('express');
const router = express.Router();

// Chatbot Route
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Simulate chatbot response
    const response = { reply: `You said: ${message}` };

    res.json(response);
  } catch (error) {
    console.error('Error in chatbot route:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
