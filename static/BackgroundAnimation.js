//can be put in  a script file
var solar_system = new Array();
var astroid = new Array();
var star = new Array();
 /*Shows orbital lines when false*/
 var hideLines = false;
 /*How many times faster the simulation is*/
 var speedSim = 1;
 var time = 0;
  /**/
 var AstroidSize = 0.4;
 var averageAstroidSpeed = 0.0002
 /*Star Variables*/
  var starNum = 5000;
  var starSize = 0.7;
  var starColors = ["white", "yellow", "yellow", "blue", "white", "white", "#cc0099", "red", "red"];
function startGame() {
		myGameArea.start(); 
		/*Star Background*/
		var curentColor;
		for(r = 0; r < starNum; r++){
			curentColor = Math.round(Math.random() * starColors.length, 0);
			star[r] = new starF(Math.random() * myGameArea.canvas.width, Math.random() * starSize, Math.random() * 2*Math.PI, myGameArea.canvas.width/2, myGameArea.canvas.height/2 , 0.0000001, starColors[curentColor]);
		}
		//star[starNum] = new nebula(Math.random() * myGameArea.canvas.width, 100, Math.random() * 2*Math.PI, myGameArea.canvas.width/2, myGameArea.canvas.height/2 , 0.0000001, starColors[6], 40)
		///star[starNum + 1] = new nebula(Math.random() * myGameArea.canvas.width, 100, Math.random() * 2*Math.PI, myGameArea.canvas.width/2, myGameArea.canvas.height/2 , 0.0000001, starColors[6], 10)
		//astar[starNum + 2] = new nebula(Math.random() * myGameArea.canvas.width, 100, Math.random() * 2*Math.PI, myGameArea.canvas.width/2, myGameArea.canvas.height/2 , 0.0000001, starColors[6], 20)
		/*Celestial Objects*/
		solar_system[0] = new Celestial_Ob_Fx(0, myGameArea.canvas.width/2, myGameArea.canvas.height/2, 50, 50, "yellow");
		solar_system[1] = new Celestial_Ob(200, solar_system[0], 10, 10, 0.01, "blue");
		solar_system[2] = new Celestial_Ob(20, solar_system[1], 1, 1, 0.05, "grey");
		solar_system[3] = new Celestial_Ob(80, solar_system[0], 6, 6, 0.06, "gray");
		solar_system[4] = new Celestial_Ob(140, solar_system[0], 9, 9, 0.03, "#ffffcc");
		solar_system[5] = new Celestial_Ob(270, solar_system[0], 9, 9, 0.005, "red");
		solar_system[6] = new Celestial_Ob(400, solar_system[0], 20, 20, 0.001, "#ff6600");
		solar_system[7] = new Celestial_Ob(500, solar_system[0], 13, 13, 0.0005, "#ffcc66");
		solar_system[8] = new Celestial_Ob(600, solar_system[0], 8, 8, 0.0001, "#3399ff");
		solar_system[9] = new Celestial_Ob(750, solar_system[0], 12, 12, 0.00005, "#0066ff");
		astroid[0] = new Astroid_Rg(320, solar_system[0], 500, 30, "#800000");
		astroid[1] = new Astroid_Rg(20, solar_system[7], 30, 4, "#800000");
}
var myGameArea = {
    canvas : document.createElement("canvas"),
	
    start : function() {
		this.canvas.style.zIndex = "-1";
        this.canvas.width = document.body.clientWidth;
        this.canvas.height = document.body.clientHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('mousedown', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('mouseup', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })
        window.addEventListener('touchstart', function (e) {
            myGameArea.x = e.pageX;
            myGameArea.y = e.pageY;
        })
        window.addEventListener('touchend', function (e) {
            myGameArea.x = false;
            myGameArea.y = false;
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.context.fillStyle = "black";
		this.context.beginPath();
		this.context.rect(0,0,this.canvas.width, this.canvas.height);
		this.context.fill();
		this.context.closePath();
		for(p = 0; p < star.length; p++){
		star[p].update();
		}
	}
}
function Celestial_Ob_Fx(distance, x, y, mass, size, colour){
	this.distance = distance;
	this.mass = mass;
	this.size = size;
	this.colour = colour;
	this.x = x;
	this.y = y;
	this.update = function(){
		ctx = myGameArea.context;
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}
function Astroid_Rg(distance, master, mass, width, colour){
	this.distance = distance;
	this.mass = mass;
	this.colour = colour;
	this.x = 0;
	this.y = 0;
	this.width = width;
	this.astroids = new Array();
	for(i = 0; i < this.mass; i++){
		this.astroids[i] = new Astroid(Math.floor((Math.random() * (this.width)) + (this.distance)), Math.floor((Math.random() * (3 * AstroidSize)) + (2 * AstroidSize)), (Math.random() * (2*Math.PI)), master, (Math.random() * (averageAstroidSpeed)));
	}
	this.update = function(){
		ctx = myGameArea.context;
		for(i = 0; i < this.mass; i++){
			this.astroids[i].update(master);
		}	
	}
}
function Astroid(distance, size, orbit, master, speed){
	this.distance = distance;
	this.master = master;
	this.speed = speed;
	this.size = size;
	this.colour = "grey";
	this.x = 0;
	this.y = 0;
	this.rotations = orbit;
	this.update = function(master1){
		ctx = myGameArea.context;
		var distx;
		var disty;
		this.rotations += this.speed * speedSim;
		distx = Math.sin(this.rotations)*this.distance;
		disty = Math.cos(this.rotations)*this.distance;
		this.x = master1.x + distx;
		this.y = master1.y + disty;
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}
function starF(distance, size, orbit, cX, cY, speed, color){
	this.distance = distance;
	this.speed = speed;
	this.size = size;
	this.colour = color;
	this.cX =cX;
	this.cY =cY;
	this.x = 0;
	this.y = 0;
	this.rotations = orbit;
	this.update = function(){
		ctx = myGameArea.context;
		var distx;
		var disty;
		this.rotations += this.speed * speedSim;
		distx = Math.sin(this.rotations)*this.distance;
		disty = Math.cos(this.rotations)*this.distance;
		this.x = this.cX + distx;
		this.y = this.cY + disty;
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}
function nebula(distance, size, orbit, cX, cY, speed, color, width){
	this.distance = distance;
	this.speed = speed;
	this.size = size;
	this.colour = color;
	this.cX = cX;
	this.cY = cY;
	this.x = 0;
	this.y = 0;
	this.width = width
	this.rotations = orbit;
	this.nebulaPart = new Array();
	for(r = 0; r < this.size; r++){
			this.nebulaPart[r] = new starF(Math.random() * this.width, Math.random() * starSize, Math.random() * 2*Math.PI, this.x, this.y, 0, this.colour);
		}
	this.update = function(){
	ctx = myGameArea.context;
		var distx;
		var disty;
		this.rotations += this.speed * speedSim;
		distx = Math.sin(this.rotations)*this.distance;
		disty = Math.cos(this.rotations)*this.distance;
		this.x = this.cX + distx;
		this.y = this.cY + disty;
		for(r = 0; r < this.size; r++){
			this.nebulaPart[r].update();
		}
	}
}
function Celestial_Ob(distance, master, mass, size, speed, colour){
	this.distance = distance;
	this.master = master;
	this.mass = mass;
	this.size = size;
	this.speed = speed;
	this.colour = colour;
	this.x = 0;
	this.y = 0;
	this.curcuml = 2 * distance * Math.PI;
	this.rt = this.curcum1 / speed;
	this.rpt = (2 * Math.PI)/this.rt;
	this.rotations = 0;
	if(this.mass >= 1000){
	this.rotations = Math.PI;
	}
	this.update = function(){
		ctx = myGameArea.context;
		var distx;
		var disty;
		this.rotations += this.speed * speedSim;
		distx = Math.sin(this.rotations)*this.distance;
		disty = Math.cos(this.rotations)*this.distance;
		this.x = master.x + distx;
		this.y = master.y + disty;
		if(hideLines == false){
		ctx.beginPath();
		ctx.arc(master.x, master.y, this.distance, 0, 2*Math.PI);
		ctx.stroke();
		ctx.closePath();
		}
		ctx.fillStyle = this.colour;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	}
}
function updateGameArea() {
    myGameArea.clear();
	time += 1*speedSim;
	for(t=0;t < astroid.length; t++){
		astroid[t].update();
	}
	for(i=0;i < solar_system.length; i++){
		solar_system[i].update();
	}
}
function setDynamicBackground(){
	startGame();
}