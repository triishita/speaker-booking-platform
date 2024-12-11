const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const speakerRoutes = require('./routes/speakerRoutes');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Use the routes
app.use('/api/users', userRoutes);
app.use('/api/speakers', speakerRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
