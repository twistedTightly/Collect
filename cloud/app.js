
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var path = require('path'); // Loading the path module
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine

// Middleware for reading request body
app.use(express.bodyParser());

app.get('/collection', function(req, res) {
	res.render('collection');
});

app.get('/connections', function(req, res) {
	res.render('connections', { username: ''});
});

app.get('/profile', function(req, res) {
	console.log('profile get');
	console.log(req.query.email);
	var age = '';
	var name = '';

	// Get the rest of the user's information
	var query = new Parse.Query(Parse.User);
	query.equalTo('username', req.query.email);
	query.find().then(
		// Query was successful
		function(user) {
			console.log('successful query');
			age = user.get('updatedAt');
			name = user.get('updatedAt') + ' ' + user.get('createdAt');
			console.log(age);
			console.log(name);
		},
		// Query had a error
		function(error) {
			console.log('failed query');
			console.log('Error: ' + error.code + ' ' + error.message);
			age = error.message;
		}
	);
	console.log('about to render');
	res.render('profile', { username: req.query.email, age: age });
});

app.post('/profile', function(req, res) {
	console.log(req.body);
	res.render('profile', { username: req.body.firstname, age: '' });
});

// This line is required to make Express respond to http requests.
// Attach the Express app to Cloud Code.
app.listen();
