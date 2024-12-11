const express = require('express');
const Speaker = require('../models/Speaker');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

// Get all speakers (public route)
router.get('/', (req, res) => {
  Speaker.findAll((err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error fetching speakers' });
    }

    res.json(results);
  });
});

// Add speaker profile (protected route)
router.post('/profile', authenticate, (req, res) => {
  const { firstName, lastName, email, expertise, price } = req.body;
  
  // Check if the logged-in user is a speaker (You may want to check role here)
  const newSpeaker = { firstName, lastName, email, expertise, price };

  Speaker.create(newSpeaker, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Error adding speaker profile' });
    }

    res.status(201).json({ message: 'Speaker profile created successfully' });
  });
});

module.exports = router;
