const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('speaker_booking', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres', // Database dialect for PostgreSQL
});

module.exports = sequelize;
