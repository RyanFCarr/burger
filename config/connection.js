const mysql = require('mysql');

const db;
if (process.env.JAWSDB_URL) {
  db = mysql.createConnection(process.env.JAWSDB_URL);
}else{
 db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "simplepw",
    database: "burgers_db"
  });
}

  
  db.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  module.exports = db;

