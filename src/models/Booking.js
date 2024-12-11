// src/models/Booking.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Speaker = require('./Speaker');

const Booking = sequelize.define('Booking', {
  timeSlot: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'booked',
  },
});

Booking.belongsTo(User);
Booking.belongsTo(Speaker);

module.exports = Booking;
