const { Router } = require('express');
const searchUsernameRouter = Router();
const usersController = require('../controllers/usersController');

searchUsernameRouter.get('/', usersController.getUsername);

module.exports = searchUsernameRouter;