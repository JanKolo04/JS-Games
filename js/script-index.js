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
	//get random number for diffrent way for ball
	let dx = Math.round(Math.random() * (2 - (-2))) - 2;
	let dy = -2;

	//variables for paddle
	let paddleHeight = 10;
	let paddleWidth = 75;
	let paddleX = (canvas.width - paddleWidth) / 2;

	//var for buttons
	let rightPressed = false;
	let leftPressed = false;

	//listen key press
	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);

	function keyDownHandler(e) {
		//if right 'Edge use right' button or right arrow button was clicked
		//change rightPressed into true
		if(e.key == "Right" || e.key == "ArrowRight") {
			rightPressed = true;
		}
		//if left 'Edge use left' button or left arrow button was clicked
		//change leftPressed into true
		else if(e.key == "Left" || e.key == "ArrowLeft") {
			leftPressed = true;
		}
	}

	function keyUpHandler(e) {
		//if right 'Edge use right' button or right arrow button wasn't clicked
		//change rightPressed into false
		if(e.key == "Right" || e.key == "ArrowRight") {
			rightPressed = false;
		}
		//if left 'Edge use left' button or left arrow button wasn't clicked
		//change leftPressed into false
		else if(e.key == "Left" || e.key == "ArrowLeft") {
			leftPressed = false;
		}
	}


	function drawBall() {
		//create ball
		canvasDraw.beginPath();
		//x and y are co-ordinates where ball will be
		//20 and 0 defines radius
		//Math... defines start and end of angle
		//and last parameter defines start of drawing. Flase for clockwise, but true
		//for anti-clockwise 
		canvasDraw.arc(x, y, 10, 0, Math.PI*2, false);
		canvasDraw.fillStyle = "blue";
		canvasDraw.fill();
		canvasDraw.closePath();
	}

	function drawPaddle() {
		//create paddle
		canvasDraw.beginPath();
		//paddleX and canvas.height - paddleHeight defines co-ordinates
		//paddleWidht and paddleHeight defines height and width of paddle
		canvasDraw.rect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
		canvasDraw.fillStyle = "blue";
		canvasDraw.fill();
		canvasDraw.closePath();	
	}

	function draw() {
		//clear all game fild
		canvasDraw.clearRect(0, 0, canvas.width, canvas.height);
		//draw ball
		drawBall();
		//draw paddle
		drawPaddle();

		//belching from wall
		if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
			dx = -dx;
		}
		if(y + dy < ballRadius) {
			dy = -dy;
		}
		else if(y + dy > canvas.height - ballRadius) {
			if(x > paddleX && x < paddleX + paddleWidth) {
				dy -= dy;
			}
			else {
				alert("Game Over");
				document.location.reload();
				clearInterval(interval);
			}
 		}

		//------paddle move------
		//if rightPressed is ture move to right by 7px
		if(rightPressed) {
			paddleX += 7;
			//protection for paddle from out of frame
			if(paddleX + paddleWidth > canvas.width) {
				paddleX = canvas.width - paddleWidth;
			}
		}
		//if leftPressed is ture move to left by 7px
		else if(leftPressed) {
			paddleX -= 7;
			if(paddleX < 0) {
				paddleX = 0;
			}
		}


		//update variables for ball
		x += dx;
		y += dy;

	}

	let interval = setInterval(draw, 10);
}
