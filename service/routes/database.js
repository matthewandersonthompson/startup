// /service/routes/database.js
const express = require('express');
const { connectToCollection } = require('../utils/database');

const router = express.Router();

router.get('/users', async (req, res) => {
  try {
    const collection = await connectToCollection('users');
    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ msg: 'Error retrieving users.' });
  }
});

module.exports = router;
