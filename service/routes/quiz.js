const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const quizQuestions = [
    { id: 1, question: 'What is 2+2?', options: ['3', '4', '5'], answer: '4' },
    { id: 2, question: 'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris'], answer: 'Paris' },
  ];

  res.json(quizQuestions);
});

module.exports = router;
