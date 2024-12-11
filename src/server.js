const express = require('express');
const sequelize = require('./config/database'); // Only declare once
const userRoutes = require('./routes/userRoutes');
const speakerRoutes = require('./routes/speakerRoutes');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/speakers', speakerRoutes);

// Test DB connection
sequelize
  .authenticate()
  .then(() => console.log('Database connection established successfully.'))
  .catch((err) => console.error('Unable to connect to the database:', err));

// Sync models
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced.');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
