const express = require('express');
const sql = require('mysql');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

const db = sql.createConnection({
  host: 'localhost',
  user: 'username', // Fixed from 'username'
  password: 'password',
  database: 'usersdb',
});

// Validate User Input Middleware
const validate = (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send('Missing details');
  }
  if (name.length < 3 || /[0-9]/.test(name) || /[^a-zA-Z\s]/.test(name)) {
    return res.status(400).send('Invalid Name');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).send('Invalid Email');
  }
  if (password.length < 8) {
    return res.status(400).send('Password must be at least 8 characters');
  }

  next();
};

// Generate and Send OTP Middleware
const sendOTP = async (req, res, next) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Using Gmail as an example
    auth: {
      user: 'example@gmail.com', // Replace with environment variables in production
      pass: 'password',
    },
  });

  const otp = Math.floor(1000 + Math.random() * 9000);
  req.otp = otp; // Save OTP for the next middleware

  try {
    await transporter.sendMail({
      from: '"YourAppName" <example@gmail.com>',
      to: req.body.email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    });
    console.log('OTP sent successfully');
    next();
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    res.status(500).send('Failed to send OTP');
  }
};

// OTP Verification Route
app.post('/otp', (req, res) => {
  const { otp } = req.body;
  if (parseInt(otp) !== req.otp) {
    return res.status(400).send('Invalid OTP');
  }
  res.status(200).send('OTP Verified');
});

// Save User to Database Middleware
const saveUser = (req, res) => {
  const { name, email, password } = req.body;

  const query = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      console.error('Database Error:', err.message);
      return res.status(500).send('Failed to save user');
    }
    console.log('User saved to database');
    res.status(200).send('Registration Successful');
  });
};

// Registration Route
app.post('/register', validate, sendOTP, saveUser);

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});