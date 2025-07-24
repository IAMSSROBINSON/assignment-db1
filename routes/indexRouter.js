const { Router } = require('express');
const usersController = require('../controllers/usersController');

const indexRouter = Router();

indexRouter.get('/', usersController.getAllUsers);


module.exports = indexRouter;