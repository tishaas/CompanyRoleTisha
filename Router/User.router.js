const express = require('express');
const user = require('../Models/UserModel');
const UserController = require('../controllers/UserController');
const router = express.Router();

router.post('/regitser',UserController.register);
router.post('/login',UserController.login);

module.exports = router;