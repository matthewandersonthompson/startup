// /service/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const { connectToCollection } = require('../utils/database');

const router = express.Router();

// Create user endpoint
router.post('/create', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required.' });
  }

  try {
    const collection = await connectToCollection('users');
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ msg: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.insertOne({ email, password: hashedPassword });

    res.status(201).json({ msg: 'User created successfully.' });
  } catch (err) {
    res.status(500).json({ msg: 'Error creating user.' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required.' });
  }

  try {
    const collection = await connectToCollection('users');
    const user = await collection.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ msg: 'Invalid email or password.' });
    }

    res.status(200).json({ userName: email });
  } catch (err) {
    res.status(500).json({ msg: 'Error logging in.' });
  }
});

module.exports = router;
