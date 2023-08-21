const express = require('express');
const AuthController = require('../controllers/AuthController');
const router = express.Router();


router
    .post('/register', AuthController.register)
    .post('/login', AuthController.login)

module.exports = router;