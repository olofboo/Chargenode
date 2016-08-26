//set up & config

var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect('mongodb://olofboo:perseseksi123@ds161495.mlab.com:61495/olavindb');
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

require('./routes/routes.js')(app);

// get started!
app.listen(8080);
console.log("Also cocks! (in port 8080)");
