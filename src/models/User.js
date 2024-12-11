const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const User = {
  create: (userData, callback) => {
    const { firstName, lastName, email, password } = userData;
    const query = `INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`;
    db.query(query, [firstName, lastName, email, password], callback);
  },

  findByEmail: (email, callback) => {
    const query = `SELECT * FROM users WHERE email = ?`;
    db.query(query, [email], callback);
  }
};

module.exports = User;
