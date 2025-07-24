const { getUsers } = require('../db/queries');

exports.getAllUsers = [
    async (req, res) => {
        console.log("usersController getAllUsers:");
        console.log("usersController getUsers from db queries:", );
        const users = await getUsers();
        console.log("Users: ", users);
        res.render('home', {data: users});
    }
]