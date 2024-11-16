const express = require('express');
const router = express.Router();

// Placeholder for Chatbot Route
router.post('/', async (req, res) => {
  const { message } = req.body;

  // Simulate chatbot response
  const response = { reply: `You said: ${message}` };

  res.json(response);
});

module.exports = router;
