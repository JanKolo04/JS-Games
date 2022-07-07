/*
window.onload = function() {
	//get canvas field
	let canvas = document.querySelector("#canvas");
	let canvasDraw = canvas.getContext("2d");


	function drawFiled() {
		$.getJSON("../words.json", function(data) {
			//get number from 1 to 10
			//this number is a number of word from JSON file
			let randomWord = Math.round(Math.random() * (1 - 10 + 1)) + 1;
			//count all chars in word
			for(let i=0; i<data.words.randomWord; i++) {
				canvasDraw.beginPath();
				canvasDraw.rect("");
			}
		});
	}

}
*/

window.onload = function() {
	let divWordHolder = document.querySelector("#divWordHolder");

	function drawWordFiled() {
		$.getJSON("words.json", function(data) {
			//get number from 1 to 10
			//this number is a number of word from JSON file
			let randomWord = Math.round(Math.random() * (1 - 10 + 1)) + 1;
			console.log(data.words[1]);
			//count all chars in word
			/*
			for(let i=0; i<data.words[randomWord].length; i++) {
				//create div Holder
				let charFieldHolder = document.createElement("div");
				//set classname
				charFieldHolder.className = "charFieldHolder";
				divWordHolder.appendChild(charFieldHolder);

			}
			*/
		});
	}

	drawWordFiled();
}