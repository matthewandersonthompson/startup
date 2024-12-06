// /service/routes/auth.js
const express = require('express');
const bcrypt = require('bcrypt');
const { connectToCollection } = require('../utils/database');

const router = express.Router();

// Create user endpoint
router.post('/create', async (req, res) => {
  console.log('[DEBUG] POST /create endpoint hit with body:', req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    console.log('[DEBUG] Missing email or password.');
    return res.status(400).json({ msg: 'Email and password are required.' });
  }

  try {
    const collection = await connectToCollection('users');
    console.log('[DEBUG] Connected to users collection.');
    const existingUser = await collection.findOne({ email });

    if (existingUser) {
      console.log('[DEBUG] User already exists:', email);
      return res.status(409).json({ msg: 'User already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await collection.insertOne({ email, password: hashedPassword });
    console.log('[DEBUG] User created successfully:', email);

    res.status(201).json({ msg: 'User created successfully.' });
  } catch (err) {
    console.error('[DEBUG] Error creating user:', err.message);
    res.status(500).json({ msg: 'Error creating user.' });
  }
});

// Login endpoint
router.post('/login', async (req, res) => {
  console.log('[DEBUG] POST /login endpoint hit with body:', req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    console.log('[DEBUG] Missing email or password.');
    return res.status(400).json({ msg: 'Email and password are required.' });
  }

  try {
    const collection = await connectToCollection('users');
    console.log('[DEBUG] Connected to users collection for login.');
    const user = await collection.findOne({ email });

    if (!user) {
      console.log('[DEBUG] No user found with email:', email);
      return res.status(401).json({ msg: 'Invalid email or password.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      console.log('[DEBUG] Password does not match for user:', email);
      return res.status(401).json({ msg: 'Invalid email or password.' });
    }

    console.log('[DEBUG] User logged in successfully:', email);
    res.status(200).json({ userName: email });
  } catch (err) {
    console.error('[DEBUG] Error logging in:', err.message);
    res.status(500).json({ msg: 'Error logging in.' });
  }
});

module.exports = router;
