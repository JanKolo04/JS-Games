<p>
  <img alt="APM" src="https://img.shields.io/apm/l/vim-mode?color=blue">
</p>


# Breakout_2D
In this game you moving a paddle wich bounces the ball. Third element of game are blocks wich are to break. If ball hit block, block will be destroy. When you dont bounce ball you are die, but you have 2 lives so when you lose all lives game will over.

## Table of content
- [Instalation](#instalation)
- [Piece of code](#piece-of-code)
- [Photos](#photos)
- [License](#license)

## Instalation
1. Clone repository</br>
`git clone https://github.com/JanKolo04/JS-Games.git`

2. Go to the project</br>
`cd Breakout_2D`

3. And last step is open file with game in terminal</br>
`open index.html`

## Piece of code

<strong>1. Function drawPaddle drawing paddle o bounces a ball</strong>
- In first line of function we open a field in canvas to draw something.
- In `canvasDraw.rect(paddleX, canvas.height - paddleHeight - 10....` define size and paddle place.
- `FillStlye` and `strokeStyle` defines stlye of paddle. StrokeStyle create a line around paddle in black color. FillStyke define a color of paddle.
- Last three line of function close apply and close all data wih we define to our paddle.
```JS
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
```

<strong>2. Function to listen when key is press</strong>

This function is relly cool because is very simple and easy to write for listen when button will press.
- Fisrt `if` instruction will check if ArrowRight is press.
- Second instruction do same things but for ArrowLeft button.
```JS
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
```


## Photos
Photos from simple gameplay. In the photos you can see how game looks like. On start screen we can see label which tell you must click <strong>ENTER button</strong> to start a game. On second screen is runnig game, I want to game look like classic game. And on last screen is end of game and are two labesl, first label is <strong>Game over</strong> and second is <strong>Click ENTER to restart game</strong>.

<img width="15%" alt="Zrzut ekranu 2022-07-7 o 22 10 03" src="https://user-images.githubusercontent.com/76879087/177864068-01e5c901-f390-43ed-b390-2b14f7aac8ee.png"> <img width="15%" alt="Zrzut ekranu 2022-07-7 o 22 14 16" src="https://user-images.githubusercontent.com/76879087/177864109-8343f272-e219-4f43-861c-a482a2365202.png"> <img width="15%" alt="Zrzut ekranu 2022-07-7 o 22 13 59" src="https://user-images.githubusercontent.com/76879087/177864154-9491a5ea-7e3f-4b85-829d-8eee30a61266.png">


## License
All code is released under the <a href="https://github.com/JanKolo04/JS-Games/blob/main/LICENSE">MIT</a> License
