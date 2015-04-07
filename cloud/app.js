
// These two lines are required to initialize Express in Cloud Code.
var express = require('express');
var path = require('path'); // Loading the path module
var app = express();

// Global app configuration section
app.set('views', 'cloud/views');  // Specify the folder to find templates
app.set('view engine', 'ejs');    // Set the template engine

// Middleware for reading request body
app.use(express.bodyParser());

app.get('/', function(req, res) {
	res.render('homepage');
});

// Custom collections
app.get('/collection', function(req, res) {
	res.render('collection', { 	username: 		'Username',
								collectionName: 'Name of Collection',
								memoryCount: '0 memories',
								contributorCount: '0 contributors'});
});

app.get('/collection/summer-in-co', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'Summer in Colorado',
								memoryCount: '3 memories',
								contributorCount: '2 contributors'});
});

app.get('/collection/emmies-first-year', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'Emmie’s First Year',
								memoryCount: '5 memories',
								contributorCount: '2 contributors'});
});

app.get('/collection/nick-and-elizabeth', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'Nick &amp; Elizabeth',
								memoryCount: '3 memories',
								contributorCount: '2 contributors'});
});

app.get('/collection/jack-and-diane', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'Jack &amp; Diane',
								memoryCount: '4 memories',
								contributorCount: '1 contributor'});
});

app.get('/collection/growing-up-at-the-cape', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'Growing Up at the Cape',
								memoryCount: '3 memories',
								contributorCount: '1 contributor'});
});

app.get('/collection/as-a-child', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'As a Child',
								memoryCount: '2 memories',
								contributorCount: '1 contributor'});
});

app.get('/collection/yale-university', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'Yale University',
								memoryCount: '2 memories',
								contributorCount: '1 contributor'});
});

app.get('/collection/family-stories', function(req, res) {
	res.render('collection', { 	username: 		'Elizabeth Pollard',
								collectionName: 'Family Stories',
								memoryCount: '1 memory',
								contributorCount: '2 contributors'});
});

// Unused
app.get('/connections', function(req, res) {
	res.render('connections', { username: 'Elizabeth Pollard'});
});

// Profiles
app.get('/profile', function(req, res) {
	res.render('profile', { username: 'Elizabeth Pollard',
							age: '' });
});

app.post('/profile', function(req, res) {
	var age = '';
	var name = '';

	// Get the rest of the user's information
	var query = new Parse.Query(Parse.User);
	query.equalTo('username', 'elizabeth@gmail.com'); //req.body.email);
	query.find({
		// Query was successful
		success: function(user) {
			name = user[0].get('firstname');
			res.render('profile', { username: name,
							age: '' });
		},
		// Query had a error
		error: function(error) {
			console.log('Error: ' + error.code + ' ' + error.message);
			age = error.message;
			name = 'error';
			res.render('profile', { username: name,
							age: age });
		}
	});
});

app.post('/signup', function(req, res) {
	res.redirect(307, '/profile');
});

// This line is required to make Express respond to http requests.
// Attach the Express app to Cloud Code.
app.listen();
