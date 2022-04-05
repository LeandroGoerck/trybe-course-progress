const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  port: 3307,
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'model_example'});

module.exports = connection;