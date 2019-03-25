var express = require('express');
var router = express.Router();
var con = require('./../config/db.js');

router.get('/', function (req, res) {
  res.send('This is employee controller');
})
  
router.get('/list', function (req, res) {		
 	
	//con.query("SELECT * FROM employee", function (err, result, fields) {
	//if (err) throw err;
	//	res.json(result);   	     		
  	//});	
})

router.get('/data', function (req, res) {
	var employee_list = {"aashay":"Aashay",1:"paritosh",3:"vikram",6:"kavita"}; 
	res.json(employee_list);
  		
})

router.get('/create', function (req, res) {
	var employee_list = {"aashay":"Aashay",1:"paritosh",3:"vikram",6:"kavita"}; 
	res.json(employee_list);
  		
})

module.exports = router;
