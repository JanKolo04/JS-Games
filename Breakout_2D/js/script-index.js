window.onload = function() {
	//get canvas
	let canvas = document.querySelector("#canvas");
	//2d context holder
	let canvasDraw = canvas.getContext("2d");

	//-----ball style-----
	//radius ball
	let ballRadius = 10;
	//get center position of ball
	let x = canvas.width / 2;
	let y = canvas.height - 50;

	//tiny variables for drawing efect
	//get random number for diffrent way for ball
	let way = Math.round(Math.random() * (2 - (-2))) - 2;
	if(way == 0) {
		way = 1;
	}
	let dx = way;
	let dy = -2;

	//-------paddle style------
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
	document.addEventListener("mousemove", mouseMovePaddle, false);

	//-------blocls style-------
	//variables for blocks
	let blockRow = 3;
	let blockColumn = 5;
	let blockWidth = 40;
	let blockHeight = 20;
	let blockPadding = 10;
	let blockOffsetTop = 50;
	let blockOffsetLeft = 30;

	//add all block in array two-dimensional
	let blocks = [];
	for(let r=0; r<blockRow; r++) {
		blocks[r] = [];
		for(let c=0; c<blockColumn; c++) {
			blocks[r][c] = {x: 0, y:0, status:1};
		}
	}

	//-------score-----
	let score = 0;
	let lives = 2;
	let first = 0;

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

	//function to move paddle with mouse
	function mouseMovePaddle(e) {
		let relativeX = e.clientX - canvas.offsetLeft;
		//paddle position
		if(relativeX > 0 && relativeX < canvas.width) {
			paddleX = relativeX - paddleWidth / 2;
		}
	}

	function collisionDetect() {
		for(let r=0; r<blockRow; r++) {
			for(let c=0; c<blockColumn; c++) {
				//this variable storing blocks
				let colisionBlock = blocks[r][c];
				//if block isn't destroy change postition
				if(colisionBlock.status == 1) {
					if(x > colisionBlock.x && x < colisionBlock.x + blockWidth && y > colisionBlock.y && y < colisionBlock.y + blockHeight) {
						dy = -dy;
						//after destroy change this block status from 1 to 0
						colisionBlock.status = 0;
						score++;
					}
				}
			}
		}
	}

	function drawBall() {
		//create ball
		canvasDraw.beginPath();
		//x and y are co-ordinates where ball will be
		//ballRadius and 0 defines radius
		//Math... defines start and end of angle
		//and last parameter defines start of drawing. Flase for clockwise, but true
		//for anti-clockwise 
		canvasDraw.arc(x, y, ballRadius, 0, Math.PI*2);
		canvasDraw.fillStyle = "#00ff00";
		canvasDraw.strokeStyle = 'black';
		canvasDraw.fill();
		canvasDraw.stroke();
		canvasDraw.closePath();
	}

	function drawPaddle() {
		//create paddle
		canvasDraw.beginPath();
		//paddleX and canvas.height - paddleHeight defines co-ordinates
		//paddleWidht and paddleHeight defines height and width of paddle
		canvasDraw.rect(paddleX, canvas.height - paddleHeight - 10, paddleWidth, paddleHeight);
		canvasDraw.fillStyle = "#00ff00";
		canvasDraw.strokeStyle = 'black';
		canvasDraw.fill();
		canvasDraw.stroke();
		canvasDraw.closePath();	
	}

	function blockDraw() {
		//draw blocks
		for(let r=0; r<blockRow; ++r) {
			for(let c=0; c<blockColumn; ++c) {
				//if block isn't destroy print block
				if(blocks[r][c].status == 1) {
					let blockX = (c*(blockWidth + blockPadding)) + blockOffsetLeft;
					let blockY = (r*(blockHeight + blockPadding)) + blockOffsetTop;

					blocks[r][c].x = blockX;
					blocks[r][c].y = blockY;
					canvasDraw.beginPath();
					canvasDraw.rect(blockX, blockY, blockWidth, blockHeight);
					canvasDraw.fillStyle = "red";
					canvasDraw.strokeStyle = 'black';
					canvasDraw.fill();
					canvasDraw.stroke();
					canvasDraw.closePath();
				}
			}
		}
	}

	function drawLabel(text, x, y) {
		//create start label
		canvasDraw.textAlign = 'center';
		canvasDraw.fillStyle = "white";
		canvasDraw.font = "bold 16px Arial";
		canvasDraw.fillText(text, x, y);
	}

	function enterKeyListener() {
		document.addEventListener("keydown", function(e) {
			if(e.key == "Enter") {
				document.location.reload();
				clearInterval(interval);
			}
		});
	}

	function draw() {
		//clear all game fild
		canvasDraw.clearRect(0, 0, canvas.width, canvas.height);
		//draw ball
		drawBall();
		//draw paddle
		drawPaddle();
		//blockDraw
		blockDraw();
		//colision
		collisionDetect();
		//score label
		drawLabel("Score: "+score, 40, 20);
		drawLabel("Lives: "+lives, 260, 20);

		//belching from wall
		if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
			dx = -dx;
		}
		if(y + dy < ballRadius) {
			dy = -dy;
		}
		//bleching from paddle
		else if(y + dy > canvas.height - ballRadius - 10) {
			if(x > paddleX && x < paddleX + paddleWidth) {
				dy = -dy;
			}
			else {
				//will subtract one point after die
				lives--;
				//if you have 0 lives do code...
				if(lives == 0) {
					//stop game
					clearInterval(interval);

					//if button is click restart game
					drawLabel("Game over", 150, 200);
					drawLabel("Click ENTER to restart game", 150, 220);
		 			//listener function wich wait for press enter
					enterKeyListener();
					//change ball to default position
				    x = canvas.width / 2;
				    y = canvas.height - 50;
				    dx = way;
				    dy = -2;
				    paddleX = (canvas.width - paddleWidth) / 2;
				}
				else {
					//change ball to default position
				    x = canvas.width / 2;
				    y = canvas.height - 50;
				    dx = way;
				    dy = -2;
				    paddleX = (canvas.width - paddleWidth) / 2;
				}

			}
 		}

 		if(score == (blockRow*blockColumn)) {
 			//clear interval (stop game)
 			clearInterval(interval);
 			//draw labels
 			drawLabel("You win", 150, 200);
 			drawLabel("Click ENTER to reset", 150, 220);
 			//listener function wich wait for press enter
			enterKeyListener();

 		}

		//------paddle move------
		//if rightPressed is ture move to right by 7px
		if(rightPressed && paddleX < canvas.width-paddleWidth) {
			paddleX += 7;
		}
		//if leftPressed is ture move to left by 7px
		else if(leftPressed && paddleX > 0) {
			paddleX -= 7;
		}

		//update variables for ball
		x += dx;
		y += dy;

	}
	//variable with interval
	let interval;
	//draw label
	drawLabel("Click ENTER to start game", 150, 200);
	//after press eneter button start game
	document.addEventListener("keydown", function(e) {
		//security with variable to click only one time
		if(e.key == "Enter" && first == 0) {
			interval = setInterval(draw, 10);
			first = 1;
		}
	});
	
}
