const pool = require('./pool');

async function seed () {
   try {
     await pool.query(`
            DROP TABLE IF EXISTS usernames;
            CREATE TABLE usernames (
                id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
                username VARCHAR (20) NOT NULL
            );
        `);

    await pool.query(`
            INSERT INTO usernames (username)
            VALUES ('Socrates'), ('Plato'), ('Aristotle');
        `);

    console.log('Database seed successful.');

    
   }
   catch (error) {
    console.log('Could not connect database:', error);
   }
   finally {
    await pool.end();
    console.log('Connection closed');
   }
}

seed();