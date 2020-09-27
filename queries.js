const Pool = require('pg').Pool

// save creds in .env 
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'api',
	password: 'root',
	port: 5432,
})

exports.addSales = (names, values) => {
    pool.query(`INSERT INTO sales (${names}) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`, values, (error, results) => {
        if (error) {
            throw error;
        }
        return true;
    });
};
