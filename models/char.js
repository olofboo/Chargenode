var mongoose = require('mongoose');

module.exports = mongoose.model('Character', {
	name: String,
	alignment: String,
	class: String,
	level: Number,
	experience: Number,
	hit_dice: Number,
	strength: Number,
	dexterity: Number,
	constitution: Number,
	intelligence: Number,
	wisdom: Number,
	charisma: Number,
	str_bonus: Number,
	dex_bonus: Number,
	con_bonus: Number,
	int_bonus: Number,
	wis_bonus: Number,
	cha_bonus: Number,
	armor_class: Number,
	hit_points: Number,
});
