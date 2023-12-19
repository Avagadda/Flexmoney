var mysql = require("mysql");

var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password : "mysql_2023",
    database : 'yoga_class'
});


module.exports = connection;