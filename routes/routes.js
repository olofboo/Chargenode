//defining the character model and character generation helper paths

var Character = require('../models/char');
var Chargen = require('../helpers/Chargen');

// define routes, move this to separate file (routes.js)
module.exports = function (app) {
app.get('/api/characters', function(req, res) {
	Character.find(function(err, characters) {
		if (err)
			res.send(err)
		res.json(characters);
	});
});

app.get('/api/characters/:char_id', function(req, res) {
	Character.findOne({ _id: req.params.char_id }, function(err, characters) {
		if (err)
			res.send(err)
		res.json(characters);
	});
});

app.get('/api/random', function(req, res) {
	Character.find(function(err, characters) {
		if (err)
			res.send(err)
		var id = Math.floor(Math.random() * characters.length);
		var randchar = characters[id];
		res.json(randchar);
	});
});

app.post('/api/characters', function(req, res) {

the_char = new Chargen(req.body.name, req.body.class, req.body.align);

	Character.create({
		name : the_char.name,
		class: the_char.charClass,
		alignment: the_char.alignment,
		level: the_char.level,
		experience: the_char.experience,
		hit_dice: the_char.HD,
		strength: the_char.str,
		dexterity: the_char.dex,
		constitution: the_char.con,
		intelligence: the_char.int,
		wisdom: the_char.wis,
		charisma: the_char.cha,
		str_bonus: the_char.strB,
		dex_bonus: the_char.dexB,
		con_bonus: the_char.conB,
		int_bonus: the_char.intB,
		wis_bonus: the_char.wisB,
		cha_bonus: the_char.chaB,
		armor_class: the_char.AC,
		hit_points: the_char.HP,
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
};
