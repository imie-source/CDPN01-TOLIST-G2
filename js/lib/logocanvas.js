 // Pour garder tous les elements du canvas
 var leftWing;
 var rightWing;
 var canvas = document.getElementById("logo");
 var ctx = canvas.getContext("2d");
 var goingTo = "top";

 function Wing(side)
 {
 	this.x = 0;
 	this.y = 0;
 	this.side = side;
 	this.lineWidth = 0;
 	this.fillStyle = "black";
 	this.animate = 0;
 	this.animateMax = 10;
 }

 function refresh()
 {
 	ctx.clearRect(0, 0, canvas.width, canvas.height);
 	logoInit();
 }

 function drawWing(wing)
 {
	ctx.beginPath();
	ctx.lineWidth= wing.lineWidth;
	ctx.fillStyle= wing.fillStyle; 
	ctx.moveTo(wing.x, wing.y);

	var top = wing.y;
	if(wing.animate!=0)
		top = wing.y - (30*(wing.animate/wing.animateMax));

	if(wing.side=="right")
		ctx.bezierCurveTo((wing.x-40), (top+30) , (wing.x+60), (top+40), (wing.x+40), (top+30));
	else
		ctx.bezierCurveTo((wing.x+40), (top+30) , (wing.x-60), (top+40), (wing.x-40), (top+30));
	
	ctx.fill();

	ctx.beginPath();            
	ctx.lineWidth= wing.lineWidth;
	ctx.moveTo(wing.x, wing.y);
	if(wing.side=="right")
		ctx.quadraticCurveTo((wing.x+40), (top-10) , (wing.x+40), (top+30));
	else
		ctx.quadraticCurveTo((wing.x-40), (top-10) , (wing.x-40), (top+30));
	ctx.fill();
 }

 function initWings()
 {
 	// aile droite
	rightWing = new Wing("right");
	rightWing.x = 240;
	rightWing.y = 40;
	rightWing.lineWidth = 3;
	rightWing.fillStyle = "green";

	// aile gauche
	leftWing = new Wing("left");
	leftWing.x = 160;
	leftWing.y = 40;
	leftWing.lineWidth = 3;
	leftWing.fillStyle = "green";
 }

 function logoInit() {

    // Smiley :)

	// Aile droite
	drawWing(rightWing);

	// Aile gauche

	drawWing(leftWing);

	// Visage
	ctx.beginPath();
	ctx.arc(200,50,40,0,Math.PI*2,true);
	ctx.strokeStyle = "#333";
	ctx.lineWidth = 1;
	ctx.fillStyle = "yellow";
	ctx.fill();
	ctx.stroke();

	// Bouche
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.arc(200,60,20,0,Math.PI,false);
	ctx.strokeStyle = "#333";
	ctx.fillStyle = "red";
	ctx.lineCap = "round";
	ctx.fill();

	// Yeux
	ctx.beginPath();
	ctx.strokeStyle = "#369";
	ctx.fillStyle="red";
	ctx.arc(230,20,10,0,Math.PI*2,false);
	ctx.fill();
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(170,20,10,0,Math.PI*2,false); 
	ctx.stroke();
	ctx.fill();
	
    // I
    ctx.beginPath();
    ctx.moveTo(10,13);
    ctx.lineTo(30,13);
    ctx.moveTo(20,13);
    ctx.lineTo(20,77);
    ctx.moveTo(10,77);
    ctx.lineTo(30,77);


    // M
    ctx.moveTo(40,80);
    ctx.lineTo(40,10);
    ctx.lineTo(50,50);
    ctx.lineTo(60,10);
    ctx.lineTo(60,80);


    // I
    ctx.moveTo(70,13);
    ctx.lineTo(90,13);
    ctx.moveTo(80,13);
    ctx.lineTo(80,77);
    ctx.moveTo(70,77);
    ctx.lineTo(90,77);


    // E
    ctx.moveTo(130,13);
    ctx.lineTo(100,13);
    ctx.lineTo(100,77);
    ctx.lineTo(130,77);
    ctx.moveTo(100,45);
    ctx.lineTo(130,45);

    ctx.closePath();
    ctx.lineWidth = 8;
    ctx.strokeStyle = "#321564";
    ctx.stroke();
  }

  initWings();

  setInterval(function(){
  	if(leftWing.animate == leftWing.animateMax)
  		goingTo = "bot";
  	else if(leftWing.animate == 0 && goingTo == "bot")
  		goingTo = "top";

  	if(goingTo=="top")
  	{
	  	leftWing.animate++;
	  	rightWing.animate++;
	}
	else
	{
		leftWing.animate--;
		rightWing.animate--;
	}
  	refresh();
  }, 50);