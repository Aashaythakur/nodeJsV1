var mysql = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'phpmyadmin',
  password : 'root',
  database : 'myProject'
});
con.connect();
module.exports = con;
