const pool = require('./pool');

exports.getUsers = async () => {
    try {
        const { rows } = await pool.query('SELECT * FROM usernames');
        return rows;
    }
    catch (error) {
        console.log('Could not get data.', error);
    }
}
