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
/*Head: <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.dom.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/addons/p5.sound.min.js"></script>
<script src="scripts/drawing.js"></script>
Body: <div id="sketch-holder"></div>*/
