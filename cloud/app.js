
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var sass = require('node-sass-middleware'); // Loading the sass module
var path = require('path'); // Loading the path module
var app = express();

// Global app configuration section
app.set('views', __dirname + '/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine

// Middleware for reading request body
app.use(express.bodyParser());

// Compile the SCSS
app.use(sass({
  src: __dirname,
  dest: __dirname + '/../public/',
  outputStyle: 'compressed'
}));

// The static middleware must come after the sass middleware
app.use(express.static( path.join( __dirname, 'public' ) ) );

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

// // Example reading from the request query string of an HTTP get request.
// app.get('/test', function(req, res) {
//   // GET http://example.parseapp.com/test?message=hello
//   res.send(req.query.message);
// });

// // Example reading from the request body of an HTTP post request.
// app.post('/test', function(req, res) {
//   // POST http://example.parseapp.com/test (with request body "message=hello")
//   res.send(req.body.message);
// });

// This line is required to make Express respond to http requests.
// Attach the Express app to Cloud Code.
app.listen();
