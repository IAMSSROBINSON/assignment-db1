const { Router } = require('express');
const searchUsername = Router();
const usersController = require('../controllers/usersController');

searchUsername.get('/', usersController.getUsername);

module.exports = searchUsername;