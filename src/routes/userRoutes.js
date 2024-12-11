const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Signup route
router.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: 'Error hashing password' });
    }

    const newUser = { firstName, lastName, email, password: hashedPassword };

    // Save user in the database
    User.create(newUser, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error creating user' });
      }

      res.status(201).json({ message: 'User created successfully' });
    });
  });
});

// Login route
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err || !isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, role: 'user' }, process.env.JWT_SECRET, { expiresIn: '1h' });

      res.json({ message: 'Login successful', token });
    });
  });
});

module.exports = router;
