window.onload = function() {
	//get canvas
	let canvas = document.querySelector("#canvas");
	//2d context holder
	let canvasDraw = canvas.getContext("2d");
	
	//radius ball
	let ballRadius = 10;

	//get center position
	let x = canvas.width / 2;
	let y = canvas.height - 50;

	//tiny variables for drawing efect
	let dx = 2;
	let dy = -2;



	function drawBall() {
		//create ball
		canvasDraw.beginPath();
		canvasDraw.arc(x, y, 20, 0, Math.PI*2, false);
		canvasDraw.fillStyle = "blue";
		canvasDraw.fill();
		canvasDraw.closePath();
	}

	function draw() {
		//clear all game fild
		canvasDraw.clearRect(0,0, canvas.width, canvas.height);
		//draw ball
		drawBall();

		//belching from wall
		if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
			dx = -dx;
		}
		if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
			dy = -dy;
		}


		//update variables for ball
		x += dx;
		y += dy;

	}

	setInterval(draw, 10);
}
