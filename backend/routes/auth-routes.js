const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

// Create a feedback
router.post('/checkauth', authController.checkAuth);

module.exports = router;
