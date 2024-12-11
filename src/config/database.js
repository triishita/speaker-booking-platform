const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('speaker_booking', 'postgres', '@Ruhi2003', {
  host: 'localhost',
  dialect: 'postgres', // Database dialect for PostgreSQL
});

module.exports = sequelize;
