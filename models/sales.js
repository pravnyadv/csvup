const Pool = require('pg').Pool

// save creds in .env 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'api',
    password: 'root',
    port: 5432,
})

exports.dropSalesTable = () => {
    const salesDropQuery = `DROP TABLE IF EXISTS sales`;

    pool.query(salesDropQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};

exports.createSalesTable = () => {
    const salesCreateQuery = `CREATE TABLE sales
  	(
  		ID SERIAL PRIMARY KEY,
	    Region VARCHAR(200),
	    Country VARCHAR(200),
	    Item_Type VARCHAR(255),
	    Sales_Channel VARCHAR(50),
	    Order_Priority VARCHAR(5),
	    Order_Date DATE,
	    Order_ID BIGINT,
	    Ship_Date DATE,
	    Units_Sold INT,
	    Unit_Price REAL,
	    Unit_Cost REAL,
	    Total_Revenue DOUBLE PRECISION,
	    Total_Cost DOUBLE PRECISION,
	    Total_Profit DOUBLE PRECISION
    )`;

    pool.query(salesCreateQuery)
        .then((res) => {
            console.log(res);
            pool.end();
        })
        .catch((err) => {
            console.log(err);
            pool.end();
        });
};
