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

// Chatbot Route
apiRouter.post('/chatbot', async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });

    const reply = completion.choices[0].message.content.trim();
    res.json({ reply });
  } catch (error) {
    console.error(
      'Error calling OpenAI API:',
      error instanceof OpenAI.APIError ? error.message : error
    );
    res
      .status(500)
      .json({ error: 'Error communicating with the chatbot service.' });
  }
});

// Quiz Route
apiRouter.get('/quiz', (_req, res) => {
  res.json([
    { id: 1, question: 'What is 2+2?', options: ['3', '4', '5'], answer: '4' },
    {
      id: 2,
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris'],
      answer: 'Paris',
    },
  ]);
});

// Fallback to React index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log("Loaded OpenAI API Key:", process.env.OPENAI_API_KEY);
