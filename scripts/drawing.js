function setup() {
	var canvas = createCanvas(windowWidth/2, windowHeight/2);
	background('#fae');
	canvas.parent('sketch-holder');
}
function draw() {
	if (mouseIsPressed) {
		fill(0);
		stroke(255);
	} else {
		fill(255);
		stroke(0);
	}
  ellipse(mouseX, mouseY, 10, 10);
}
