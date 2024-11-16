const express = require('express');
const app = express();

// Middleware for JSON parsing
app.use(express.json());

// Import and use routes
const chatbotRoutes = require('./routes/chatbot');
const quizRoutes = require('./routes/quiz');
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/quiz', quizRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
