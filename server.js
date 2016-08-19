//set up

var express  = require('express');
var app      = express();                               // create our app w/ express
var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

//configuration

mongoose.connect('mongodb://olofboo:perseseksi123@ds161495.mlab.com:61495/olavindb');     // connect to mongoDB database

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

//defining the external character model for mongoose's use
var Character = require('./models/char');

//defining the external character generator helper, this will be used by routes only so move it to routes.js
var Chargen = require('./helpers/Chargen');

// define routes, move this to separate file (routes.js)
app.get('/api/characters', function(req, res) {
	Character.find(function(err, characters) {
		if (err)
			res.send(err)
		res.json(characters);
	});
});

app.post('/api/characters', function(req, res) {
	Character.create({
		name : req.body.name,
		done : false
		}, function(err, character) {
			if (err)
				res.send(err);
			Character.find(function(err, characters) {
				if (err)
					res.send(err)
				res.json(characters);
			});
		});
});

app.delete('/api/characters/:char_id', function(req, res) {
	Character.remove({
		_id : req.params.char_id
		}, function(err, character) {
			if (err)
				res.send(err);
			Character.find(function(err, characters) {
				if (err)
					res.send(err)
				res.json(characters);
			});
		});
});

// get started!
app.listen(8080);
console.log("Also cocks! (in port 8080)");
