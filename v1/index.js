var express = require('express')
var app = express();
var employee = require('./controllers/employee.js');
var dept = require('./controllers/dept.js');



app.use('/employee/', employee);
app.use('/dept/', dept);
 
app.get('/', function (req, res) {
	var name = "Aashay Thakur";
	var str= "My name is "+ name;
	console.log(str);
  res.send('Hello World!')
})

 
app.get('/employee_salary', function (req, res) {		
  var employee_list = {"Development":"Development","HR":"HR","CS":"CS","Management":"Management"}; 
	res.json(employee_list);
  		
})

//add employee
//add department


app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})

var http = require("http");
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(8082);

//console.log('Server running at http://127.0.0.1:8081/');

//create database.
//data interation with database.
//add frontend
