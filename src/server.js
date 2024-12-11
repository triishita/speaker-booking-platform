// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const speakerRoutes = require('./routes/speakerRoutes');
const sequelize = require('./config/database');

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON data

// Routes
app.use('/api/users', userRoutes);
app.use('/api/speakers', speakerRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  sequelize.sync(); // Sync models with DB
});
