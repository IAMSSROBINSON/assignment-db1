const pool = require('./pool');

exports.deleteAllUsernames = async () => {
    const result = await pool.query('DELETE FROM usernames');
    console.log('db deleteAllUsernames: ', result);
    return result.rows;
}

