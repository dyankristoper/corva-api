const mysql = require('mysql');
const connection = mysql.createConnection({
    host:     'localhost',
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}, () => {
    console.log(`Connected to DB!`);
});

module.exports = connection;