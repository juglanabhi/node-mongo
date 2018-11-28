var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'ubuntu',
  user     : 'root',
  password : 'mysqlpassword',
  database : 'ToDo'
});

connection.connect();
debugger;
connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
  debugger;
  if (error) {
  return  console.log('Error Occured ', error);
  }
  console.log('The solution is: ', results[0].solution);
});

connection.end();
