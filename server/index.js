require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// CORS — allow the frontend origin (Vercel in production, localhost in dev)
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

app.use(express.json());

// Health-check endpoint (useful for Render)
app.get('/', (req, res) => {
  res.json({ status: 'API is running' });
});

app.use('/api/contact', require('./routes/contact'));
app.use('/api/cv', require('./routes/cv'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 11000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});