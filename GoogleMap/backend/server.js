var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var cors = require('cors')

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'americansecurity_tracking'
});

var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// app.get('/', function(request, response) {
// 	response.sendFile(path.join(__dirname + '/login.html'));
// });
connection.connect(function(err){
	if(!err) {
		console.log("Database is connected ... nn");    
	} else {
		console.log("Error connecting database ... nn", err);    
	}
});
app.post('/auth', function(request, response) {
	console.log("body", request.body);
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		// WHERE username = ? AND password = ?', [username, password]
		connection.query('SELECT * FROM supervisors where username = ? AND password = ?', [username, password], function(error, results, fields) {
			console.log(results);
			if ( results.length > 0 )
				response.send({username:username, ids:results[0].trucks});
			else
				response.send({error:'Username and password does not match'});
			response.end();
		});
	} else {
		response.send({error:'Please enter Username and Password!'});
		response.end();
	}
});

app.post('/trucks', function(request, response) {
	console.log("trucks body", request.body);

	const ids = request.body.ids;
	let truckidArray = ids.split(',');
	if ( truckidArray.length != 0 ){
		console.log(truckidArray);
		let positions = [];
		truckidArray.map((id, index)=> {
			connection.query(`select lat, lon from trucks where id = ?`, [id], function(err, res, fields) {
				console.log(res);
				if ( !err )
					positions.push({lat:res[0].lat, lon:res[0].lon});
				else
					console.log(err);
				if(index == truckidArray.length - 1) {
					console.log("pos", positions);
					response.send(positions);
					response.end();
				}
			})
		})
	} else {
		response.send({error:'There is no trucks for this user'});
		response.end();
	}
})
// app.get('/home', function(request, response) {
// 	if (request.session.loggedin) {
// 		response.send('Welcome back, ' + request.session.username + '!');
// 	} else {
// 		response.send('Please login to view this page!');
// 	}
// 	response.end();
// });

app.listen(4000, function() {
	console.log("server is listening");
});