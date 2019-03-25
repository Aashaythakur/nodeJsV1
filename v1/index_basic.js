var express = require('express')
var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/employee_list', function (req, res) {		
  var employee_list = ["Aashay","paritosh","vikram","kavita"]; 
	res.json(employee_list);
  		
})

app.get('/employee_data', function (req, res) {
	var employee_list = {"aashay":"Aashay",1:"paritosh",3:"vikram",6:"kavita"}; 
	res.json(employee_list);
  		
})

app.get('/dept_data', function (req, res) {		
  var employee_list = {"Development":"Development","HR":"HR","CS":"CS","Management":"Management"}; 
	res.json(employee_list);
  		
})

app.get('/employee_salary', function (req, res) {		
  var employee_list = {"Development":"Development","HR":"HR","CS":"CS","Management":"Management"}; 
	res.json(employee_list);
  		
})

//add employee
//add salary


app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})

var http = require("http");
http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World\n');
}).listen(8082);

//console.log('Server running at http://127.0.0.1:8081/');

//create modules.
//create database.
//data interation with database.
//add frontend
