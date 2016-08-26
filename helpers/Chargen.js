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
function Chargen(name,charClass, alignment) {
	this.name = name;
	this.charClass = charClass;
	this.alignment = alignment;
	
	this.str= xDy(3,6);
	this.int= xDy(3,6);
	this.wis= xDy(3,6);
	this.con= xDy(3,6);
	this.dex= xDy(3,6);
	this.cha= xDy(3,6);

	this.strB= CalculateStatBonus(this.str);
	this.intB= CalculateStatBonus(this.int);
	this.wisB= CalculateStatBonus(this.wis);
	this.conB= CalculateStatBonus(this.con);
	this.dexB= CalculateStatBonus(this.dex);
	this.chaB= CalculateStatBonus(this.cha);
	
	switch (this.charClass) {
		case "Cleric":
			this.poison= 11;
			this.wands= 12;
			this.paralysis= 14;
			this.dragonbreath= 16;
			this.spells= 15;
			this.HD = 6;
			break;
		case "Dwarf":
			this.poison= 8;
			this.wands= 9;
			this.paralysis= 10;
			this.dragonbreath= 13;
			this.spells= 12;
			this.HD = 8;
			break;
		case "Elf":
			this.poison= 13;
			this.wands= 13;
			this.paralysis= 13;
			this.dragonbreath= 15;
			this.spells= 15;
			this.HD = 6;
			break;
		case "Fighter":
			this.poison= 12;
			this.wands= 13;
			this.paralysis= 14;
			this.dragonbreath= 15;
			this.spells= 16;
			this.HD = 8;
			break;
		case "Halfling":
			this.poison= 8;
			this.wands= 9;
			this.paralysis= 10;
			this.dragonbreath= 13;
			this.spells= 12;
			this.HD = 6;
			break;
		case "Magic-User":
			this.poison= 13;
			this.wands= 14;
			this.paralysis= 13;
			this.dragonbreath= 16;
			this.spells= 15;
			this.HD = 4; 
			break;
		case "Thief":
			this.poison= 13;
			this.wands= 14;
			this.paralysis= 14;
			this.dragonbreath= 16;
			this.spells= 15;
			this.HD = 4;
			break;
	}
	
	this.HP = rollHP(this.HD, this.conB);
	this.AC = 9;
	this.experience = 0;
	this.level =1;
}
