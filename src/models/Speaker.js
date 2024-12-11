const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const Speaker = {
  create: (speakerData, callback) => {
    const { firstName, lastName, email, expertise, price } = speakerData;
    const query = `INSERT INTO speakers (first_name, last_name, email, expertise, price) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [firstName, lastName, email, expertise, price], callback);
  },

  findAll: (callback) => {
    const query = `SELECT * FROM speakers`;
    db.query(query, callback);
  },

  findByEmail: (email, callback) => {
    const query = `SELECT * FROM speakers WHERE email = ?`;
    db.query(query, [email], callback);
  }
};

module.exports = Speaker;
