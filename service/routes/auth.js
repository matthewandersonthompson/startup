const express = require('express');
const bcrypt = require('bcrypt');
const { connectToCollection } = require('../utils/database');

const router = express.Router();

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

    res.status(201).json({ msg: 'User created successfully.', userName: email });
  } catch (err) {
    console.error('Error creating user:', err.message);
    res.status(500).json({ msg: 'Error creating user.' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required.' });
  }

  try {
    const collection = await connectToCollection('users');
    const user = await collection.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: 'Invalid email or password.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ msg: 'Invalid email or password.' });
    }

    res.status(200).json({ userName: email });
  } catch (err) {
    console.error('Error logging in:', err.message);
    res.status(500).json({ msg: 'Error logging in.' });
  }
});

module.exports = router;
