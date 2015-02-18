
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine
app.use(express.bodyParser());    // Middleware for reading request body

app.get('/profile', function(req, res) {
	var name = req.query.username;
	var phoneNumber = '';

	// Get the rest of the user's information
	var query = new Parse.Query(Parse.User);
	query.equalTo("username", name);
	query.find({
		success: function(user) {
			phoneNumber = user.get('phone');
		}
	});

	res.render('profile', { username: name, phone: phoneNumber });
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
