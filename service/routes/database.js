
const express = require('express');
const { connectToCollection } = require('../utils/database');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const usersCollection = await connectToCollection('users');
    const resultsCollection = await connectToCollection('quizResults');

    const userCount = await usersCollection.countDocuments();
    if (userCount === 0) {
      await usersCollection.insertOne({ email: 'test@example.com', password: 'hashed_password' });
      console.log('Inserted a test user because no users found previously.');
    }

    const users = await usersCollection.find({}).toArray();
    console.log('Users found:', users);

    for (let user of users) {
      const quizResults = await resultsCollection.find({ userEmail: user.email }).toArray();
      if (quizResults.length > 0) {
        const total = quizResults.reduce((sum, r) => sum + r.score, 0);
        const avg = total / quizResults.length;
        user.avgScore = Math.round(avg);
      } else {
        user.avgScore = 0;
      }
    }

    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ msg: 'Error fetching users.' });
  }
});

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

router.get('/myChatSessions', async (req, res) => {
  const userEmail = req.userEmail;
  if (!userEmail) {
    return res.status(401).json({ msg: 'Not authorized.' });
  }

  try {
    const sessionsCollection = await connectToCollection('chatSessions');
    const sessions = await sessionsCollection.find({ userEmail }).toArray();
    res.json(sessions);
  } catch (err) {
    console.error('Error fetching chat sessions:', err);
    res.status(500).json({ msg: 'Error fetching chat sessions.' });
  }
});

module.exports = router;
