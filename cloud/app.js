
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

// NOTE: Do not use this as an example for actual collection pages
// 			Instead, see comments below
app.get('/collection', function(req, res) {
	res.render('collection', { 	username: 			'Username',
								collectionName: 	'Name of Collection',
								memoryCount: 		'0 memories',
								contributorCount: 	'0 contributors',
								profilePic:  		'elizabeth.jpg',
								backLink: 			'/profile'});
});

// Custom collections
// All fields a memory could have are shown below
// Do not include a field *at all* if there is no content of that type for that memory
// 
// var memories = [
// 	{	images: 'path/to/image',
// 		title: 'William Dubilier',
// 		text: ['only one paragraph'],
// 		author: 'Marilyn',
// 		authorPic: 'image.jpg',
// 		authorLink: '/profile/name',
// 		month: 'June',
// 		year: '1949',
// 		dateCreated: 'January 2015',
// 		tags: ['vacation', 'family', 'emmie'],
// 		location: '104 An Address',
//		locationImage: '/images/locations/imageName',
// 		videoId: 'letters and numbers after "=" at the end of the URL',
// 		soundFile: 'path/to/soundFile',
//		soundDescription: 'This is a sound',
//		connections: '',
//		comments: []
//	},
//	{	images: 'path/to/image',
// 		title: 'William Dubilier',
// 		text: [{'paragraph 1', 'second paragraph'}],
// 		author: 'Marilyn',
// 		authorPic: 'image.jpg',
// 		authorLink: '/profile/name',
// 		month: 'June 22',
// 		year: '1949',
// 		dateCreated: 'January 2015',
// 		tags: ['vacation', 'family', 'emmie'],
// 		location: '104 An Address',
//		locationImage: '/images/locations/imageName',
// 		videoId: 'letters and numbers after "=" at the end of the URL',
// 		soundFile: 'path/to/soundFile',
//		soundDescription: 'This is a sound',
//		connections: '',
//		comments: []
//	}
// ];
//
// The above example has two memories in it
// The last memory and the last field in the memory should not have a comma after them

// Elizabeth and Nick's Collections
var summerInCOMemories = [{	images: '/images/Elizabeth/summer-in-co/1.jpg',
							text: ['Last week Liza, Emmie and I flew out to my family’s place in Beaver Creek, CO for a much needed vacation.  It was Emmie’s first time flying and she did surprisingly well. Minus a little crying on the descent she was the perfect passenger.','We rented a car in Denver and made the two-hour trek to Beaver Creek.  The drive always takes me back to my childhood and how we used to spend the drive competing to spot mountain goats.  Being at the house with Liza brought back memories of our first trip together only years earlier when I taught her how to ski.','After some family time early in the week, hiking and taking advantage of the beautiful weather, my parents watched Emmie for a few days while Liza and I drove down to the Telluride Music Festival.  We used Airbnb to find an awesome little ski cabin right in downtown Town Park and enjoyed trying out the restaurants and bars in the area.','Telluride was an awesome place to see a concert.  The festival took place over the summer solstice so it seemed like it was midnight by the time the sun finally set. Steve Martin and the Steep Canyon Rangers headlined but I was especially excited to see Dispatch. Hearing The General brought me back to summer nights during my college years, drinking out on the porch of the Langdon St. house with the guys.','Despite the enjoyable trip, being away from Emmie for the first time was a little tough for both of us so we were happy to be back with her after a couple days in Telluride.'],
							author: 'Nick',
							authorPic: 'nick.jpg',
							authorLink: '/profile/nick-pollard',
							month: 'June 22',
							year: '2014',
							location: 'Night Grass Venue, 721 W. Colorado Avenue | Telluride, CO',
							locationImage: '/images/locations/night-grass-venue.png',
							videoId: 'WzGgOPZdJ3g',
							tags: ['Written April 1, 2015','hiking','Colorado']
						},
						{	images: '/images/Elizabeth/summer-in-co/2.jpg',
							title: 'First Words',
							text: ['Emmie couldn’t have planned a better moment to say her first words. We were all gathered together after dinner playing scrabble and getting Emmie ready for bed. Grandma P and I were reading “Goodnight Moon” when the word quietly leapt from her lips. Her first word was moon. I always thought it would be Dada! At least now we know she isn’t picking favorites!'],
							author: 'Elizabeth',
							month: 'July 2',
							year: '2014',
							tags: ['Written April 1,2015','baby', 'words']
						},
						{	images: '/images/Elizabeth/summer-in-co/3.jpg',
							title: 'Fishing with Dad',
							text: ['On Tuesday morning of our trip to Colorado, Dad and I left the girls at home and ventured out for a day of fishing on Stone Creek.  Growing up we would always fit in a father-son day there and it was great to continue the tradition. As per usual, Dad won our competition, catching three rainbow trout to beat my two. I claim the real victory, though, because only my two were big enough to keep.', 'This was the first chance since Emmie was born that Dad and I got to spend some real alone time together. Finally being able to relate to him on the joys of being a father brought our relationship to an entirely different level. For the first time I really felt like I appreciated everything he did for me growing up.'],
							author: 'Nick',
							authorPic: 'nick.jpg',
							authorLink: '/profile/nick-pollard',
							month: 'June',
							year: '2015',
							location: 'Freedom Park, Miller Ranch Road | Edwards, CO',
							locationImage: '/images/locations/freedom-park-co2.png',
							tags: ['Written April 2, 2015', 'fishing', 'Colorado']
						}];

app.get('/collection/summer-in-co', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',// Always Elizabeth
											collectionName: 	'Summer in Colorado',
											memoryCount: 		'3 memories',
											contributorCount: 	'2 contributors',
											profilePic:  		'elizabeth.jpg', // Who's profile you came from
											backLink: 			'/profile', // Link to who's profile you came from
											memories: 			summerInCOMemories
	});
});

app.get('/collection/nick/summer-in-co', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Summer in Colorado',
											memoryCount: 		'3 memories',
											contributorCount: 	'2 contributors',
											profilePic:  		'nick.jpg',
											backLink: 			'/profile/nick-pollard',
											memories: 			summerInCOMemories
	});
});

var emmiesFirstYearMemories = [{	images: '/images/Elizabeth/emmies-first-year/1.jpg',
							title: 'The Big Announcement',
							text: ['It was a Friday morning in late February, and Liza and I had plans to spend the weekend skiing with our friends, Jake and Lauren, in the Poconos. I had planned to take a half-day so I woke up early to get into the office and finish up some work.  I opened my eyes and saw that Liza was already awake and cooking breakfast, so I knew something was up.','I went to the kitchen to make sure everything was OK and she greeted me with a big smile and cup of coffee. “Just figured I’d get a jump start on the weekend!,” she said as she eagerly led me into a chair in front of a plate of eggs and bacon.  Hesitantly, I sat down and took a sip of the coffee.  Liza had forgotten to add my usual milk so I asked her to bring some over for me.', 'Liza quickly brought the milk and even though I grabbed it from her hand, it wasn’t until I started trying to pour it in my coffee that I realized I was holding a baby bottle. It took me a second to figure out what was going on, but as I started to turn to question Liza, it hit me – we were pregnant! So many thoughts ran through my head in that moment. I felt like the luckiest man in the world.'],
							author: 'Nick',
							authorPic: 'nick.jpg',
							authorLink: '/profile/nick-pollard',
							month: 'Feb 18',
							year: '2013',
							comments: [{	content: 'I couldn’t think of a creative way to tell you for what felt like the longest time. I woke up at 4am to get everything ready and calm down my nerves!',
											author: 'Elizabeth'
										},
										{	content: 'That was much more creative than how I told your father about Ryan, Heather! He’s is lucky to have you!',
											author: 'Marilyn'}],
							tags: ['Written March 22, 2015', 'baby']
						},
						{	images: '/images/Elizabeth/emmies-first-year/2.jpg',
							title: 'Coming into the world smiling',
							text: ['On our wedding day, I told Liza that I would never love anyone more than her, and I truly meant it. But as Emmie was brought into the world, I broke that promise for the first time.  Liza knew it, because she felt the same thing.  Emmie was the most gorgeous 7 pound, 4 oz ball of goo I’ve ever seen.  The enormous amount of unconditional love we felt for her the instant she was born was beautiful, overwhelming and something I’ll will never forget.'],
							author: 'Nick',
							authorPic: 'nick.jpg',
							authorLink: '/profile/nick-pollard',
							month: 'November 12',
							year: '2013',
							comments: [{	content: 'the most precious goo in the world :)',
											author: 'Elizabeth'}],
							tags: ['Written March 22, 2015', 'baby', 'birth']
						},
						{	images: '/images/Elizabeth/emmies-first-year/3.jpg',
							title: 'First Halloween',
							text: ['Emmie couldn’t speak come her first Halloween, but we felt very confident that we knew what she wanted to be for her first big celebration. Based on her excessive giggling and general joyfulness while watching Sesame Street these last few months, Big Bird seemed like the perfect choice! She stares at the television with the most intense focus whenever the show comes on. And whenever Elmo opens his mouth Emmie just explodes with laughter. That show has pretty much become our only opportunity for rest these past few months!','I dusted off the old Singer sewing machine for the first time in years and had my go at making the costume. She ended up looking more like a Peep than anything else, but Emmie—if you ever read this—just remember that it’s the thought that counts! And you still looked adorable ;)'],
							author: 'Elizabeth',
							month: 'October 31',
							year: '2014',
							tags: ['Written March 30, 2015', 'Halloween', 'baby']
						},
						{	images: '/images/Elizabeth/emmies-first-year/4.jpg',
							title: 'It’s revealed',
							text: ['She’s a lefty just like her mom and Grandpa Joe! Here she is helping me finish up my work. She’ll be one smart cookie  (after all, lefties are know to carry the genius trait)! Nick owes me twenty bucks.'],
							author: 'Elizabeth', 
							month: 'November',
							year: '2014',
							tags: ['Written March 30, 2015', 'writing', 'baby']
						},

						{	images: '/images/Elizabeth/emmies-first-year/5.jpg',
							title: 'Our favorite book',
							text: ['Emmie’s Favorite Book is still Good Night Moon. That was also Elizabeth\'s favorite book as a child, or so her parent’s told me. I think she takes their similar taste as a source of pride. Like Mother Like Daughter, or so she says.'],
							author: 'Nick',
							authorPic: 'nick.jpg',
							authorLink: '/profile/nick-pollard',
							month: 'December',
							year: '2014',
							tags: ['Written March 30, 2015', 'Winter', 'baby']
						}];


app.get('/collection/emmies-first-year', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Emmie’s First Year',
											memoryCount: 		'5 memories',
											contributorCount: 	'2 contributors',
											profilePic:  		'elizabeth.jpg',
											backLink: 			'/profile', 
											memories: 			emmiesFirstYearMemories	
							});
});

app.get('/collection/nick/emmies-first-year', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Emmie’s First Year',
											memoryCount: 		'5 memories',
											contributorCount: 	'2 contributors',
											profilePic:  		'nick.jpg',
											backLink: 			'/profile/nick-pollard', 
											memories: 			emmiesFirstYearMemories	
							});
});

var nickAndElizabethMemories = [{	title: 'How we met',
									text: ['For the three months before Liza and I met, we both worked in the same building at 155 Avenue of the Americas – her at Dave Meyer on the 7th floor and me at Ardown Engineering on the 12th.  She caught my eye so many times crossing paths in the lobby or riding the elevator but I never got the courage to ask her out, or even find out her name.','Fortunately, fate led us together through mutual friends. One night in November, my co-worker, Michael, invited me out for drinks with some friends at a new brewery in Williamsburg. I couldn’t believe it when I saw Liza sitting next to Michael at the bar. Turns out his friend worked at Dave Meyer also and had asked Liza to tag along.','There were a couple decks of cards out on the table so we ended up playing some games. I pride myself on being quite the card shark, but Liza quickly put me in my place. Her competitiveness was adorable and her cockiness completely warranted.','We ended up playing and chatting late into the night, even after Michael and his friends left. We even did some karaoke, reliving out teenage angst with some Blink-182.  We took the L back together, and I somehow convinced her to grab coffee with me at 8am before I had to leave for my two-week business trip to Scottsdale.','I know it was silly but I just had to see her again. And the rest unfolded from there.'],
									author: 'Nick',
									authorPic: 'nick.jpg',
									authorLink: '/profile/nick-pollard',
									month: 'July 28',
									year: '2010',
									tags: ['Written March 15, 2015']
									},
								{	image: '/images/Elizabeth/nickAndElizabethMemories/1.jpg',
									title: 'Our first vacation',
									text: ['Liza was asleep on my shoulder on a flight to Denver for a spur of the moment ski trip after a big snowstorm hit the Rockies. It was our first trip together and I was so excited for the weekend.','The last week was pretty hectic and we were both worn out, Liza especially after pulling an all nighter the night before for work. She could barely keep her eyes open but it was cute watching her try and listening to the way she told me she was so tired. It was quite effective as despite my own tiredness, the only thing I wanted to do was make sure she was able to rest.','I took this picture as she lay there asleep with her hands wrapped around my arm. Its hard to explain but there was just this sense of mutual comfort and security. I felt like it was a moment I would want to remember. Our first long drive together, first flight together, first vacation together. Looking down at her asleep on my shoulder she looked so beautiful, and I just knew that she was the one.'],
									author: 'Nick',
									authorPic: 'nick.jpg',
									authorLink: '/profile/nick-pollard',
									month: 'December',
									year: '2010',
									tags: ['Written March 15, 2015']
								},
								{	images: '/images/Elizabeth/nickAndElizabethMemories/2.jpg',
									title: 'The Swings',
									text: ['Nick took me to Ann Hamilton’s show at the Park Avenue Armory. The installation was called “The Event of the Thread,” and it was one of the most surreal experiences I’ve ever had. We entered the space and I was just taken aback by the beauty of the art. The huge wing was divided in half by a large silk curtain suspended in space by hundreds of small strings. The curtain’s movement was controlled by the viewers who sat on swings. Children were running around laughing and playing, and Nick and I just laid down underneath the curtain and looked up into the cloud of white above us. He held my hand and I nearly lost my breath. It was so beautiful, and I knew then that he was something special.'],
									author: 'Elizabeth',
									month: 'January',
									year: '2011',
									videoId: 'TDTPgbehKMY',
									location: 'Park Avenue Armory | New York, NY',
									locationImage: '/images/locations/park-ave-armory.png',
									tags: ['Written March 30, 2015', 'Ann Hamilton', 'Armory']
								}];

app.get('/collection/nick-and-elizabeth', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Nick &amp; Elizabeth',
											memoryCount: 		'3 memories',
											contributorCount: 	'2 contributors',
											profilePic:  		'elizabeth.jpg',
											backLink: 			'/profile',
											memories: 			nickAndElizabethMemories });
});

app.get('/collection/nick/nick-and-elizabeth', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Nick &amp; Elizabeth',
											memoryCount: 		'3 memories',
											contributorCount: 	'2 contributors',
											profilePic:  		'nick.jpg',
											backLink: 			'/profile/nick-pollard',
											memories: 			nickAndElizabethMemories });
});

// Elizabeth's Collections
var jackAndDianeMemories = [{	images: '/images/Elizabeth/jack-diane/1.jpg',
								title: 'Their Story',
								text: ['My grandpa always said that he first met grandma outside the bank in downtown Larchmont. She claimed that he followed her when she left the teller and abandoned his place in line to chase after her. He said it was an immediate and mutual attraction; she said how creeped out she felt and how she only agreed to give him her number if she let him go! Funny how we remember things differently. My parents said they started changing their story after John Mellencamp’s song came out in 1982: then they met as two American kids growing up in the heartland…'],
								author: 'Elizabeth'
								month: 'April',
								year: '1949',
								videoId: 'h04CH9YZcpI',
								tags: ['Written March 20, 2015', 'John Mellencamp']
							},
							{	images: '/images/Elizabeth/jack-diane/2.jpg',
								title: '50th Anniversary',
								text: ['My dad and I made this illustration as an invitation to my grandparent’s 50th anniversary party. They loved it. That was always my favorite thing about them— their amazing sense of humor and their ability to laugh at themselves. I think they threw a better party at that age than I can ever hope to manage!'],
								month: 'May 22',
								year: '2004',
								tags: ['Written March 20, 2015', 'Anniversary', '50']
							},
							{	images: '/images/Elizabeth/jack-diane/3.jpg',
								title: 'Finding old treasures',
								text: ['When I was training for field hockey preseason I spent the summer at my grandparents house. It was so strange sleeping in my dad’s old bedroom. It felt like living inside a time capsule. Nothing seemed to have moved from the 70s. His drawers were still full of polaroids and class notes on loose leaf sheets of paper (To be honest, I’m surprised I even FOUND notes from class after hearing the things I’ve heard). My grandma would comb through the drawers and show off her favorite items and recite the stories that went along with them. This was her favorite object: my dad’s first drawing of Scruffles. He used to draw the cartoon all the time and even sold holiday cards with this little fellow. I loved the fact that they kept everything in place. It was like an homage to the past, and I could tell how much they loved being parents.'],
								month: 'Summer',
								year: '2001',
								tags: ['Written March 20, 2015']
							},
							{	title: 'Grandma\'s Singing',
								text: ['Grandma was a natural performer. That was our biggest connection actually, as she always encouraged me and helped me prepare for my auditions for the school musicals. I loved her voice; it wasn’t the most beautiful sound in the world, but it always amazed me. She commanded attention when she sang. When she was a child living in Hell’s Kitchen she was recruited to be a model. She landed several ads even even got a role as Shirley Temple’s stage double! Unfortunately Shirley never missed a day on set so Grandma never got to test out her tap skills.'],
								month: 'August',
								year: '2012',
								tags: ['Written March 20, 2015']
							}];

app.get('/collection/jack-and-diane', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Jack &amp; Diane',
											memoryCount: 		'4 memories',
											contributorCount: 	'1 contributor',
											profilePic:  		'elizabeth.jpg',
											backLink: 			'/profile',
											memories: 			jackAndDianeMemories });
});

app.get('/collection/growing-up-at-the-cape', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Growing Up at the Cape',
											memoryCount: 		'3 memories',
											contributorCount: 	'1 contributor',
											profilePic:  		'elizabeth.jpg',
											backLink: 			'/profile',
											memories: 			[] });
});

app.get('/collection/as-a-child', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'As a Child',
											memoryCount: 		'2 memories',
											contributorCount: 	'1 contributor',
											profilePic:  		'elizabeth.jpg',
											backLink: 			'/profile',
											memories: 			[] });
});

app.get('/collection/yale-university', function(req, res) {
	res.render('collection-template', { 	username: 			'Elizabeth Pollard',
											collectionName: 	'Yale University',
											memoryCount: 		'2 memories',
											contributorCount: 	'1 contributor',
											profilePic:  		'elizabeth.jpg',
											backLink: 			'/profile',
											memories: 			[]
	});
});

// Elizabeth and Marilyn's Collections
var familyStoriesMemories = [
	{	images: '/images/Elizabeth/jack-diane/3.jpg',
		title: 'William Dubilier',
		text: ['My grandpa, William Dubilier, was honored by the French Government for his contributions to the rebuilding of France. He was a brilliant person. By the age of 8 he had dozens of patents and supported his entire family of 10 while living in the Bowery of New York City. He left home when he was 12 and lived alone and focused on creating. He invented burglar alarms to catch criminals in his building, developed the modern condenser, and also created sonar technology. He was even sent to install wireless telephone technology in the Russian Czar’s palace when he was 16 years old! The condenser/capacitor made modern broadcasting and commercial radio possible. There’s a long line of inventors in this family!'],
		author: 'Marilyn',
		authorPic: 'marilyn.jpg',
		month: 'June',
		year: '1949',
		dateCreated: '',
		tags: []
	},
	{	images: '/images/Elizabeth/jack-diane/3.jpg',
		title: 'Hello',
		text: ['paragraph 1', 'second paragraph'],
		author: 'Marilyn',
		authorPic: 'image.jpg',
		authorLink: '/profile/name',
		month: 'June 22',
		year: '1949',
		dateCreated: 'January 2015',
		tags: ['vacation', 'family', 'emmie'],
		location: '104 An Address',
		videoId: 'www.linkToVideo.com',
		soundFile: 'path/to/soundFile',
		comments: []
	}
];



app.get('/collection/family-stories', function(req, res) {
	res.render('collection-template', {
								username: 			'Elizabeth Pollard',
								collectionName: 	'Family Stories',
								memoryCount: 		'1 memory',
								contributorCount: 	'2 contributors',
								profilePic:  		'elizabeth.jpg',
								backLink: 			'/profile',
								memories: 			familyStoriesMemories
	});
});

app.get('/collection/marilyn/family-stories', function(req, res) {
	res.render('collection-template', {
								username: 			'Elizabeth Pollard',
								collectionName: 	'Family Stories',
								memoryCount: 		'1 memory',
								contributorCount: 	'2 contributors',
								profilePic:  		'marilyn.jpg',
								backLink: 			'/profile/marilyn-camps',
								memories: 			familyStoriesMemories
	});
});

// Marilyn's Collections
app.get('/collection/marilyn/year-in-kenya', function(req, res) {
	res.render('collection-template', {
								username: 			'Elizabeth Pollard',
								collectionName: 	'Year in Kenya',
								memoryCount: 		'4 memories',
								contributorCount: 	'1 contributor',
								profilePic:  		'marilyn.jpg',
								backLink: 			'/profile/marilyn-camps',
								memories: 			[]
	});
});

app.get('/collection/marilyn/ending-up-in-sf', function(req, res) {
	res.render('collection-template', {
								username: 			'Elizabeth Pollard',
								collectionName: 	'Ending Up in San Francisco',
								memoryCount: 		'4 memories',
								contributorCount: 	'1 contributor',
								profilePic:  		'marilyn.jpg',
								backLink: 			'/profile/marilyn-camps',
								memories: 			[]
	});
});

app.get('/collection/marilyn/working-in-baltimore', function(req, res) {
	res.render('collection-template', {
								username: 			'Elizabeth Pollard',
								collectionName: 	'Working in Baltimore',
								memoryCount: 		'1 memory',
								contributorCount: 	'1 contributor',
								profilePic:  		'marilyn.jpg',
								backLink: 			'/profile/marilyn-camps',
								memories: 			[]
	});
});

app.get('/collection/marilyn/mamaroneck-high-school', function(req, res) {
	res.render('collection-template', {
								username: 			'Elizabeth Pollard',
								collectionName: 	'Mamaroneck High School',
								memoryCount: 		'2 memories',
								contributorCount: 	'1 contributor',
								profilePic:  		'marilyn.jpg',
								backLink: 			'/profile/marilyn-camps',
								memories: 			[]
	});
});

app.get('/collection/marilyn/younger-years', function(req, res) {
	res.render('collection-template', {
								username: 			'Elizabeth Pollard',
								collectionName: 	'Younger Years',
								memoryCount: 		'2 memories',
								contributorCount: 	'1 contributor',
								profilePic:  		'marilyn.jpg',
								backLink: 			'/profile/marilyn-camps',
								memories: 			[]
	});
});

// Unused
app.get('/connections', function(req, res) {
	res.render('connections', { username: 'Elizabeth Pollard'});
});

// Profiles
app.get('/profile/nick-pollard', function(req, res) {
	res.render('profile-nick', { 	username: 	'Nick Pollard',
									location: 	'New York, New York',
									profilePic: 'nick.jpg' });
});

app.get('/profile/marilyn-camps', function(req, res) {
	res.render('profile-marilyn', { username: 	'Marilyn Camps',
									location: 	'Larchmont, New York',
									profilePic: 'marilyn.jpg' });
});

app.get('/profile', function(req, res) {
	res.render('profile', { username: 	'Elizabeth Pollard',
							location: 	'New York, New York',
							profilePic: 'elizabeth.jpg' });
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
									location: 'New York, New York',
									profilePic: 'elizabeth.jpg' });
		},
		// Query had a error
		error: function(error) {
			console.log('Error: ' + error.code + ' ' + error.message);
			age = error.message;
			name = 'error';
			res.render('profile', { username: name,
									location: 'New York, New York',
									profilePic: 'elizabeth.jpg' });
		}
	});
});

app.post('/signup', function(req, res) {
	res.redirect(307, '/profile');
});

// This line is required to make Express respond to http requests.
// Attach the Express app to Cloud Code.
app.listen();
