var x,y,z
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	x=20
	y=20
	z=20
}

function draw() {
	// let w = random(140)
	// fill(random(215),random(50)+5,random(50)+50)
	// noStroke()
	// 	if (frameCount%7<3){
	// 	fill('white')
	// 	w=10
	// }
	// rect(x,y,w,20)
	// x+=w+10
	// if (x>width){
	// 	x=0
	// 	y+=30
	// }
	// background(0);

	let ww = random(100)
	fill(random(225),random(50)+5,random(50)+50)
	noStroke()
	arc(x,y ,ww, 60, HALF_PI, PI);
	x+=ww+15
	z+=ww+150
	if (x>width-15){
		x=0
		z=random(120)
		y+=30
	}
	fill('white')
	arc(z,y ,ww, 60, 0, QUARTER_PI);
	stroke(255);
	strokeWeight(3);
	fill(0)
	beginShape();
	curveVertex(0, 0);
	curveVertex(0, 140);
	curveVertex(62, 243);
	curveVertex(180, 385);
	curveVertex(314, 247);
	curveVertex(446, 189);
	curveVertex(619, 116);
	curveVertex(794, 213);
	curveVertex(912, 90);
	curveVertex(windowWidth, 0);
	curveVertex(0, 0);
	curveVertex(0, 140);
	endShape();

	
	
// 	textSize(32);
// 	fill(0, 102, 153);
// text('hello world', 60, 60);
}