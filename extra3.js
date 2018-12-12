//constructors for character objects
function Fighter(Name, Icon, Profile, Defence, Strength, Speed, Special, Bio, Statsinfo){
	this.name = Name;
	this.icon = Icon;
	this.profile = Profile;
	this.defence = Defence;
	this.strength = Strength;
	this.speed = Speed;
	this.special = Special;
	this.bio = Bio;
	this.statsinfo = Statsinfo;
	
	this.getName = function(){return this.name;};
	this.getIcon = function(){return this.icon;};
	this.getProfile = function(){return this.profile;};
	this.getDefence = function(){return this.defence;};
	this.getStrength = function(){return this.strength;};
	this.getSpeed = function(){return this.speed;};
	this.getSpecial = function(){return this.special;};
	this.getBio = function(){return this.bio;};
	this.getStatsInfo = function(){return this.statsinfo;};
	
	this.setName = function(yes){this.name = yes;};
	this.setIcon = function(yes){this.icon = yes;};
	this.setProfile = function(yes){this.profile = yes;};
	this.setDefence = function(yes){this.defence = yes;};
	this.setStrength = function(yes){this.strength = yes;};
	this.setSpeed = function(yes){this.speed = yes;};
	this.setSpecial = function(yes){this.special = yes;};
	this.setBio = function(yes){this.bio = yes;};
	this.setStatsInfo = function (yes){this.statsinfo = yes;};
}
function Enemy(Name, Icon, Profile, Defence, Strength, Speed, Special, Bio, Statsinfo){
	this.name = Name;
	this.icon = Icon;
	this.profile = Profile;
	this.defence = Defence;
	this.strength = Strength;
	this.speed = Speed;
	this.special = Special;
	this.bio = Bio;
	this.statsinfo = Statsinfo;
	
	this.getName = function(){return this.name;};
	this.getIcon = function(){return this.icon;};
	this.getProfile = function(){return this.profile;};
	this.getDefence = function(){return this.defence;};
	this.getStrength = function(){return this.strength;};
	this.getSpeed = function(){return this.speed;};
	this.getSpecial = function(){return this.special;};
	this.getBio = function(){return this.bio;};
	this.getStatsInfo = function(){return this.statsinfo;};
	
	this.setName = function(yes){this.name = yes;};
	this.setIcon = function(yes){this.icon = yes;};
	this.setProfile = function(yes){this.profile = yes;};
	this.setDefence = function(yes){this.defence = yes;};
	this.setStrength = function(yes){this.strength = yes;};
	this.setSpeed = function(yes){this.speed = yes;};
	this.setSpecial = function(yes){this.special = yes;};
	this.setBio = function(yes){this.bio = yes;};
	this.setStatsInfo = function (yes){this.statsinfo = yes;};
}

/*create objects*/
var fighter = [];
var enemy = [];

console.log("initial fighter array length: " + fighter.length);
console.log("initial enemy array length: " + enemy.length)

//Defines things after the webpage is fully loaded
document.addEventListener("DOMContentLoaded", function(event){
	CreateCharacterInfo(),
	DisplayIconImages()
});

//render icon images on buttons
function DisplayIconImages(){
	for (i = 0; i < fighter.length; i++){
		$("#charP" + i).css({background: "url(" + fighter[i].getIcon() + ")"});
	}
	
	for (i = 0; i < enemy.length; i++){
		$("#charNPC" + i).css({background: "url(" + enemy[i].getIcon() + ")"});
	}
}

//loads information for characters
function LoadInfo(charType, id){
	console.log("loading info... (id = " + id + ")");
	console.log($("#char" + charType + id));
	//load fighter info
	if (charType == 'P'){
		$("#charFullImage").attr("src", fighter[id].getProfile());
		$("#charFullImage").attr("alt" ,"Profile id: " + fighter[id] + "full profile image");
		$("#char-bio-name").html(fighter[id].getName());
		$("#char-bio-bio").html(fighter[id].getBio());
		
		displayStats(true, id);
	//load enemy info
	}else if (charType == 'NPC'){
		$("#charFullImage").attr("src", enemy[id].getProfile());
		$("#charFullImage").attr("alt", "Profile id: " + enemy[id] + "full profile image");
		$("#char-bio-name").html(enemy[id].getName());
		$("#char-bio-bio").html(enemy[id].getBio());
		
		displayStats(false, id);
	}
}

//load character info
function CreateCharacterInfo(){
	console.log("Creating character information");
	
	//-----Create character objects-----//
	for (i = 0; i < 6; i++) fighter.push(new Fighter("", "", "", 0, 0, 0, "", "", ""));
	for (i = 0; i < 10; i++) enemy.push(new Enemy("", "", "", 0, 0, 0, "", "", ""));
	
	//-----fighter 1 info-----//
	fighter[0].setName("Bear");
	fighter[0].setIcon("bear.gif");
	fighter[0].setProfile("bearHD.gif");
	fighter[0].setDefence(300);
	fighter[0].setStrength(80);
	fighter[0].setSpeed(400);
	fighter[0].setSpecial("");
	fighter[0].setBio("This bear loves big apples at 3am. Also he's coming to eat your pant");
	fighter[0].setStatsInfo("");
	
	//-----fighter 2 info-----//
	fighter[1].setName("h");
	fighter[1].setIcon("h.png");
	fighter[1].setProfile("h.png");
	fighter[1].setDefence(200);
	fighter[1].setStrength(200);
	fighter[1].setSpeed(200);
	fighter[1].setSpecial("");
	fighter[1].setBio("h");
	fighter[1].setStatsInfo("");
	
	//-----fighter 3 info-----//
	fighter[2].setName("Arrrtoooumb");
	fighter[2].setIcon("arrrtoooumb.png");
	fighter[2].setProfile("arrrtoooumb.png");
	fighter[2].setDefence(280);
	fighter[2].setStrength(220);
	fighter[2].setSpeed(200);
	fighter[2].setSpecial("");
	fighter[2].setBio("Sometimes we all just have that feeling");
	fighter[2].setStatsInfo("");
	
	//-----fighter 4 info-----//
	fighter[3].setName("Ultimate laugh");
	fighter[3].setIcon("laugh.png");
	fighter[3].setProfile("laugh.png");
	fighter[3].setDefence(130);
	fighter[3].setStrength(325);
	fighter[3].setSpeed(280);
	fighter[3].setSpecial("");
	fighter[3].setBio("Whenever you make a funny meme or need to laugh at toast, this guy is your friend");
	fighter[3].setStatsInfo("");
	
	//-----fighter 5 info-----//
	fighter[4].setName("AAAAAAAAAAAAAAAAAAAAA");
	fighter[4].setIcon("aaa.png");
	fighter[4].setProfile("aaa.png");
	fighter[4].setDefence(200);
	fighter[4].setStrength(400);
	fighter[4].setSpeed(170);
	fighter[4].setSpecial("");
	fighter[4].setBio("For when a normal scream isn't enough");
	fighter[4].setStatsInfo("");
	
	//-----fighter 6 info-----//
	fighter[5].setName("Huehuehuehue");
	fighter[5].setIcon("hue.gif");
	fighter[5].setProfile("hue.gif");
	fighter[5].setDefence(225);
	fighter[5].setStrength(225);
	fighter[5].setSpeed(85);
	fighter[5].setSpecial("");
	fighter[5].setBio("huehuehuehue");
	fighter[5].setStatsInfo("");
	
	
	//-----Npc 1 info-----//
	enemy[0].setName("Derek");
	enemy[0].setIcon("derek.png");
	enemy[0].setProfile("derek.png");
	enemy[0].setDefence(150);
	enemy[0].setStrength(150);
	enemy[0].setSpeed(300);
	enemy[0].setSpecial("");
	enemy[0].setBio("Don't mind derek, he's just chillin");
	enemy[0].setStatsInfo("");
	
	//-----Npc 2 info-----//
	enemy[1].setName("Tom");
	enemy[1].setIcon("TomFace.jpg");
	enemy[1].setProfile("TomFace.jpg");
	enemy[1].setDefence(160);
	enemy[1].setStrength(350);
	enemy[1].setSpeed(90);
	enemy[1].setSpecial("");
	enemy[1].setBio("This guy gets very angry over small things. Like when he accidentally drank cool water instead of cold water");
	enemy[1].setStatsInfo("");
	
	//-----Npc 3 info-----//
	enemy[2].setName("Cool emoticon guy");
	enemy[2].setIcon("CoolEmoticonGuy.png");
	enemy[2].setProfile("CoolEmoticonGuyHD.png");
	enemy[2].setDefence(125);
	enemy[2].setStrength(150);
	enemy[2].setSpeed(325);
	enemy[2].setSpecial("");
	enemy[2].setBio("\"Did some carbon-based life form just say, ICE?\"");
	enemy[2].setStatsInfo("");
	
	//-----Npc 4 info-----//
	enemy[3].setName("Meme Man");
	enemy[3].setIcon("succ.png");
	enemy[3].setProfile("succ.png");
	enemy[3].setDefence(200);
	enemy[3].setStrength(200);
	enemy[3].setSpeed(100);
	enemy[3].setSpecial("");
	enemy[3].setBio("\"How many layers of irony are you on?\"");
	enemy[3].setStatsInfo("");
	
	//-----Npc 5 info-----//
	enemy[4].setName("Tomas the train engine");
	enemy[4].setIcon("tomas.jpg");
	enemy[4].setProfile("tomas.jpg");
	enemy[4].setDefence(400);
	enemy[4].setStrength(150);
	enemy[4].setSpeed(50);
	enemy[4].setSpecial("");
	enemy[4].setBio("Playing MIDI files since 2014");
	enemy[4].setStatsInfo("");
	
	//-----Npc 6 info-----//
	enemy[5].setName("Kappap");
	enemy[5].setIcon("kappap.png");
	enemy[5].setProfile("kappap.png");
	enemy[5].setDefence(150);
	enemy[5].setStrength(125);
	enemy[5].setSpeed(325);
	enemy[5].setSpecial("");
	enemy[5].setBio("Spicing up the good ol' kappa face for that extra sarcastic comment");
	enemy[5].setStatsInfo("");
	
	//-----Npc 7 info-----//
	enemy[6].setName("GODLUL");
	enemy[6].setIcon("GODLUL.png");
	enemy[6].setProfile("GODLUL.png");
	enemy[6].setDefence(250);
	enemy[6].setStrength(300);
	enemy[6].setSpeed(50);
	enemy[6].setSpecial("");
	enemy[6].setBio("When you see an extra wity comment on that internet post but in reality you just exhale loudly through your nose");
	enemy[6].setStatsInfo("");
	
	//-----Npc 8 info-----//
	enemy[7].setName("Octahedron");
	enemy[7].setIcon("octahedron.gif");
	enemy[7].setProfile("octahedron.gif");
	enemy[7].setDefence(200);
	enemy[7].setStrength(400);
	enemy[7].setSpeed(0);
	enemy[7].setSpecial("");
	enemy[7].setBio("you may now access...");
	enemy[7].setStatsInfo("");
	
	//-----Npc 9 info-----//
	enemy[8].setName("The Best");
	enemy[8].setIcon("thebest.jpg");
	enemy[8].setProfile("thebest.jpg");
	enemy[8].setDefence(250);
	enemy[8].setStrength(400);
	enemy[8].setSpeed(250);
	enemy[8].setSpecial("");
	enemy[8].setBio("This guy is the best the best the best the best the best the best");
	enemy[8].setStatsInfo("");
	
	//-----Npc 10 info-----//
	enemy[9].setName("v   o   i   d");
	enemy[9].setIcon("blank.png");
	enemy[9].setProfile("blank.png");
	enemy[9].setDefence(0);
	enemy[9].setStrength(400);
	enemy[9].setSpeed(400);
	enemy[9].setSpecial("");
	enemy[9].setBio("It surrounds us all");
	enemy[9].setStatsInfo("");

	console.log("Successfully created " + fighter.length + " fighters and " + enemy.length + " enemys");
}

function displayStats(isfighter, id){
	var statsCanvas = document.getElementById("statCanvas");
	var ctx = statsCanvas.getContext("2d");
	
	var ctx_hp_y = 7;
	var ctx_po_y = 50;
	var ctx_mo_y = 93;
	var ctx_re_y = 136;
	var ctx_bar_height = 20;
	
	//reset stats
	ctx.clearRect(0,ctx_hp_y,500,ctx_bar_height);		//defence
	ctx.clearRect(0,ctx_po_y,500,ctx_bar_height);		//strength
	ctx.clearRect(0,ctx_mo_y,500,ctx_bar_height);		//speed
	//document.getElementById("char-stat-special").innerHTML = "Special: ";
	console.log("drawing stats...");
	
	//-----fighter stats-----//
	if (isfighter){
		var grd = ctx.createLinearGradient(0, ctx_hp_y,fighter[id].getDefence(), 300);
		grd.addColorStop(0, "rgb(25, 100, 25)");
		grd.addColorStop(1, "rgb(25, 255, 25)");
		ctx.fillStyle=grd;
		ctx.fillRect(0,ctx_hp_y,fighter[id].getDefence(),ctx_bar_height);
		var grd = ctx.createLinearGradient(0, ctx_po_y,fighter[id].getStrength(), 300);
		grd.addColorStop(0, "rgb(100, 25, 25)");
		grd.addColorStop(1, "rgb(252, 25, 25)");
		ctx.fillStyle=grd;
		ctx.fillRect(0,ctx_po_y,fighter[id].getStrength(),ctx_bar_height);
		var grd = ctx.createLinearGradient(0, ctx_mo_y,fighter[id].getSpeed(), 300);
		grd.addColorStop(0, "rgb(25, 25, 100)");
		grd.addColorStop(1, "rgb(25, 25, 255)");
		ctx.fillStyle=grd;
		ctx.fillRect(0,ctx_mo_y,fighter[id].getSpeed(),ctx_bar_height);
		//document.getElementById("char-stat-special").innerHTML = "Special: " + fighter[id].getSpecial();
	}else{
		var grd = ctx.createLinearGradient(0, ctx_hp_y,enemy[id].getDefence(), 300);
		grd.addColorStop(0, "rgb(25, 100, 25)");
		grd.addColorStop(1, "rgb(25, 255, 25)");
		ctx.fillStyle=grd;
		ctx.fillRect(0,ctx_hp_y,enemy[id].getDefence(),ctx_bar_height);
		var grd = ctx.createLinearGradient(0, ctx_hp_y,enemy[id].getStrength(), 300);
		grd.addColorStop(0, "rgb(100, 25, 25)");
		grd.addColorStop(1, "rgb(255, 25, 25)");
		ctx.fillStyle=grd;
		ctx.fillRect(0,ctx_po_y,enemy[id].getStrength(),ctx_bar_height);
		var grd = ctx.createLinearGradient(0, ctx_hp_y,enemy[id].getSpeed(), 300);
		grd.addColorStop(0, "rgb(25, 25, 100)");
		grd.addColorStop(1, "rgb(25, 25, 255)");
		ctx.fillStyle=grd;
		ctx.fillRect(0,ctx_mo_y,enemy[id].getSpeed(),ctx_bar_height);
		//document.getElementById("char-stat-special").innerHTML = "Special: " + enemy[id].getSpecial();
	}
}
