// /Users/matthew/Desktop/cs260/startupv3/service/routes/database.js
const express = require('express');
const { connectToCollection } = require('../utils/database');

const router = express.Router();

// Fetch all users (protected)
router.get('/users', async (req, res) => {
  try {
    const collection = await connectToCollection('users');
    const userCount = await collection.countDocuments();
    if (userCount === 0) {
      await collection.insertOne({ email: 'test@example.com', password: 'hashed_password' });
    }

    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ msg: 'Error fetching users.' });
  }
});

// Save quiz result (protected)
router.post('/saveQuizResult', async (req, res) => {
  const { quizId, score } = req.body;
  const userEmail = req.userEmail;

  if (!userEmail || quizId === undefined || score === undefined) {
    return res.status(400).json({ msg: 'Missing required fields.' });
  }

  try {
    const resultsCollection = await connectToCollection('quizResults');
    const quizResult = {
      userEmail,
      quizId: parseInt(quizId, 10),
      score: parseInt(score, 10),
      dateTaken: new Date().toISOString()
    };

    await resultsCollection.insertOne(quizResult);
    res.json({ msg: 'Quiz result saved', quizResult });
  } catch (err) {
    console.error('Error saving quiz result:', err);
    res.status(500).json({ msg: 'Error saving quiz result.' });
  }
});

// Fetch quiz results for logged-in user (protected)
router.get('/myQuizResults', async (req, res) => {
  const userEmail = req.userEmail;
  if (!userEmail) {
    return res.status(401).json({ msg: 'Not authorized.' });
  }

  try {
    const resultsCollection = await connectToCollection('quizResults');
    const results = await resultsCollection.find({ userEmail }).toArray();
    res.json(results);
  } catch (err) {
    console.error('Error fetching quiz results:', err);
    res.status(500).json({ msg: 'Error fetching quiz results.' });
  }
});

module.exports = router;
