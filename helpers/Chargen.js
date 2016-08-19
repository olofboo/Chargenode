function die(size) {
	return Math.floor((Math.random() * size) + 1); 
}
function xDy(x,y) {
	var result = 0;
	for (var i = 0; i < x; i++) {
		result = result + die(y);
	}
	return result;
}

function CalculateStatBonus(stat){
	if (stat==18){return 3; }
	if (stat>=16){return 2; }
	if (stat>=13){return 1; }
	if (stat>= 9){return 0; }
	if (stat>= 7){return -1; }
	if (stat>= 4){return -2; }
	if (stat== 3){return -3; }
}
function rollHP(HD, conB) {
		var temp_hd = die(HD) + conB;
		if (temp_hd <= 0)
			{return 1;}
		else return temp_hd;
}

module.exports = Chargen;
function Chargen(name,charClass) {
	this.name = name;
	this.charClass = charClass;
	this.stats = {
	str: xDy(3,6),
	int: xDy(3,6),
	wis: xDy(3,6),
	con: xDy(3,6),
	dex: xDy(3,6),
	cha: xDy(3,6)};

	this.bonuses = {
	strB: CalculateStatBonus(this.stats.str),
	intB: CalculateStatBonus(this.stats.int),
	wisB: CalculateStatBonus(this.stats.wis),
	conB: CalculateStatBonus(this.stats.con),
	dexB: CalculateStatBonus(this.stats.dex),
	chaB: CalculateStatBonus(this.stats.cha)};
	
	switch (this.charClass) {
		case "Cleric":
			this.saves = {
				poison: 11,
				wands: 12,
				paralysis: 14,
				dragonbreath: 16,
				spells: 15,
			};
			this.HD = 6;
			break;
		case "Dwarf":
			this.saves = {
				poison: 8,
				wands: 9,
				paralysis: 10,
				dragonbreath: 13,
				spells: 12,
			};
			this.HD = 8;
			break;
		case "Elf":
			this.saves = {
				poison: 13,
				wands: 13,
				paralysis: 13,
				dragonbreath: 15,
				spells: 15,
			};
			this.HD = 6;
			break;
		case "Fighter":
			this.saves = {
				poison: 12,
				wands: 13,
				paralysis: 14,
				dragonbreath: 15,
				spells: 16,
			};
			this.HD = 8;
			break;
		case "Halfling":
			this.saves = {
				poison: 8,
				wands: 9,
				paralysis: 10,
				dragonbreath: 13,
				spells: 12,
			};
			this.HD = 6;
			break;
		case "Magic-User":
			this.saves = {
				poison: 13,
				wands: 14,
				paralysis: 13,
				dragonbreath: 16,
				spells: 15,
			};
			this.HD = 4; 
			break;
		case "Thief":
			this.saves = {
				poison: 13,
				wands: 14,
				paralysis: 14,
				dragonbreath: 16,
				spells: 15,
			};
			this.HD = 4;
			break;
	}
	
	this.HP = rollHP(this.HD, this.bonuses.conB);
}
