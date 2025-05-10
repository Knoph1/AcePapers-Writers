const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;

// This code defines an Express router for authentication-related routes in a Node.js application. It imports the necessary modules and functions, including the authentication controller functions (register, login, getMe) and a middleware function (protect) that checks if a user is authenticated.
// The router defines three routes:
