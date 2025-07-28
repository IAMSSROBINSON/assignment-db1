const pool = require('./pool.js');

exports.searchUsername = async (value) => {
    try {
        const queryString = `SELECT * FROM usernames WHERE username ILIKE $1`;
        const searchTerm = `%${value}%`;
        const { rows } = await pool.query(queryString, [searchTerm]);
        return rows;
        
    }
    catch (error) {
        console.log('Could not get data.', error);
    }
}
