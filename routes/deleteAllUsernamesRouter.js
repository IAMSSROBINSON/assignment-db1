const { Router } = require('express');
const deleteAllUsernamesRouter = Router();
const usersController = require('../controllers/usersController');

deleteAllUsernamesRouter.delete('/', usersController.deleteAllUsernames);


module.exports = deleteAllUsernamesRouter;