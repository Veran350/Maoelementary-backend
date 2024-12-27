const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db'); // Connect to MongoDB
const authRoutes = require('./routes/authRoutes'); // User authentication routes
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express(); // Initialize Express

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// Routes
app.use('/api/auth', authRoutes); // Authentication routes

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`${process.env.APP_NAME || 'maoelementary'} backend running on port ${PORT}`)
);
