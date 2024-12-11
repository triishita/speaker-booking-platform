const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');

const Speaker = sequelize.define('Speaker', {
  expertise: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  timeSlots: {
    type: DataTypes.JSON, // Store available time slots as a JSON array
    allowNull: true,
  },
});

Speaker.belongsTo(User); // Link speaker to user

module.exports = Speaker;
