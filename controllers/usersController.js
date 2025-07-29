const { getUsers } = require("../db/queries");
const { searchUsername } = require("../db/search");
const { deleteAllUsernames } = require("../db/delete");

exports.getAllUsers = [
  async (req, res) => {
    console.log("usersController getAllUsers:");
    console.log("usersController getUsers from db queries:");
    const users = await getUsers();
    console.log("Users: ", users);
    res.render("home", { data: users });
  },
];

exports.getUsername = [
  async (req, res) => {
    const { searchUsernameInput } = req.query;
    console.log("searchUsernameInput:", searchUsernameInput);
    const result = await searchUsername(searchUsernameInput);
    console.log("result searchUsernameInput:", result);

    res.render("home", { data: result });
  },
];

exports.deleteAllUsernames = [
   async (req, res, next) => {
    console.log('controller deleteAllUsernames');
    const result = await deleteAllUsernames();
    console.log('controller deleteAllUsernames result:', await result);


    const remainingUsers = await getUsers();
    console.log('controller deleteAllUsernames remainingUsers', remainingUsers);


    res.render('home', { data: remainingUsers });
   }
];
