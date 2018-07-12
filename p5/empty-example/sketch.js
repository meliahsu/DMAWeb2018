/*var tab;
function setup() {
	var canvas = createCanvas(windowWidth/2, windowHeight/2);
	background('#fae');
	canvas.parent('sketch-holder');
  //here we use a callback to display the image after loading
  tab = loadImage('purpletabby.png');
}
function draw() {
	if (mouseIsPressed) {
		fill(0);
		stroke(255);
	} else {
		fill(255);
		stroke(0);
	}
  image(tab, 0, 0);
}*/
var img;
function setup() {
  createCanvas(400, 400);
  img = loadImage("assets/purpletabby.png");
  pixeldensity(1); //workaround for retina
}

function draw() {
  background(220);
  image(img, 0, 0, width, height);
}
