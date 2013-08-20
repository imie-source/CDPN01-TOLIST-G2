 function logoInit() {
    var el = document.getElementById("logo");
    var ctx = el.getContext("2d");

    // Smiley :)


	// Aile droite
	ctx.beginPath();              
	ctx.lineWidth="3";
	ctx.fillStyle="green"; 
	ctx.moveTo(240,40);
	ctx.bezierCurveTo(200,70, 300, 80, 280, 70);
	ctx.fill();

	ctx.beginPath();            
	ctx.lineWidth="3";
	ctx.moveTo(240,40);
	ctx.quadraticCurveTo(280,20,280,70);
	ctx.fill();

	// Aile gauche
	ctx.beginPath();              
	ctx.lineWidth="3";
	ctx.fillStyle="green"; 
	ctx.moveTo(160,40);
	ctx.bezierCurveTo(200,70, 100, 80, 120, 70);
	ctx.fill();

	ctx.beginPath();            
	ctx.lineWidth="3";
	ctx.moveTo(160,40);
	ctx.quadraticCurveTo(120,20,120,70);
	ctx.fill();

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