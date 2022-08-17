const mysql = require('mysql');
const connection = mysql.createConnection({
    host:     process.env.ENV == 'DEVELOPMENT' ? `${process.env.DB_HOST}:3306` : 'localhost',
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


module.exports = connection;