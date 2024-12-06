const express = require('express');
const { connectToCollection } = require('../utils/database');

const router = express.Router();

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const collection = await connectToCollection('users');

    // Check if collection has data, insert a test user if empty
    const userCount = await collection.countDocuments();
    if (userCount === 0) {
      await collection.insertOne({ email: 'test@example.com', password: 'hashed_password' });
    }

    // Fetch all users
    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err.message);
    res.status(500).json({ msg: 'Error fetching users.' });
  }
});

module.exports = router;
