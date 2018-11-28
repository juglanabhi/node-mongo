const sequelize = require('sequelize');
const connection = new sequelize('mysql://root:mysqlpassword@ubuntu:3306/ToDo');

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })
  .finally( () => {
    console.log('Connection Closed!!');
    connection.close();
  });
