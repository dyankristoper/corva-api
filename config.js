const mysql = require('mysql');
const connection = mysql.createConnection({
    host:     'localhost',
    user:     process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect( () => { console.log(`DB Connection has been established!`); })

module.exports = connection;