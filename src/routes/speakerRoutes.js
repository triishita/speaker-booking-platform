// src/routes/speakerRoutes.js
const express = require('express');
const Speaker = require('../models/Speaker');
const User = require('../models/User');
const Booking = require('../models/Booking');
const authMiddleware = require('../middleware/authMiddleware'); // Protect routes
const router = express.Router();

// Create speaker profile
router.post('/', authMiddleware, async (req, res) => {
  if (req.user.type !== 'speaker') return res.status(403).json({ error: 'Not authorized' });

  const { expertise, price, timeSlots } = req.body;

  try {
    const speaker = await Speaker.create({
      userId: req.user.userId,
      expertise,
      price,
      timeSlots,
    });
    res.status(201).json({ message: 'Speaker profile created', speaker });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create speaker profile' });
  }
});

// View all speakers
router.get('/', async (req, res) => {
  try {
    const speakers = await Speaker.findAll();
    res.json(speakers);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch speakers' });
  }
});

// Book a session
router.post('/book', authMiddleware, async (req, res) => {
  const { speakerId, timeSlot } = req.body;

  try {
    // Check if the time slot is available
    const speaker = await Speaker.findByPk(speakerId);
    if (!speaker.timeSlots.includes(timeSlot)) return res.status(400).json({ error: 'Time slot unavailable' });

    // Book session
    const booking = await Booking.create({
      userId: req.user.userId,
      speakerId,
      timeSlot,
    });

    // Block the time slot
    speaker.timeSlots = speaker.timeSlots.filter(slot => slot !== timeSlot);
    await speaker.save();

    res.json({ message: 'Session booked successfully', booking });
  } catch (err) {
    res.status(500).json({ error: 'Booking failed' });
  }
});

module.exports = router;
