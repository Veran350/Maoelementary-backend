const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
  console.log(`${process.env.APP_NAME || 'maoelementary'} backend running on port ${PORT}`)
);
