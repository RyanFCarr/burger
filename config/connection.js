const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "simplepw",
    database: "burgers_db"
  });
  
  db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  module.exports = db;

