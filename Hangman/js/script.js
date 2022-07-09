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
	//divs
	let divWordHolder = document.querySelector("#fieldHolder");
	let charHolder = document.querySelector("#charHolder");
	//global var for char
	let charArray = [];
	//correct answer var
	let correctAnswer = 0;

	
	//listener function
	let button = document.querySelector("#submit");
	button.onclick = function() {
		checkChar();
		win();
	}

	function drawWordFiled() {
		$.getJSON("words.json", function(data) {
			//get number from 1 to 10
			//this number is a number of word from JSON file
			let randomWord = Math.round(Math.random() * (0 + 9)) + 1;

			//count all chars in word
			for(let i=0; i<data.words[randomWord].length; i++) {
				//create char div
				let charDiv = document.createElement("div");
				charDiv.className = "charDiv";
				//set id
				charDiv.id = "char"+i;
				//append into div
				charHolder.appendChild(charDiv);

				//create div Holder
				let charFieldHolder = document.createElement("div");
				//set classname
				charFieldHolder.className = "charField";
				divWordHolder.appendChild(charFieldHolder);

				//append data word into global variable 
				charArray[i] = data.words[randomWord][i].toLowerCase();
			}
		});
	}

	function checkChar() {
		//checker var
		let checker = 0;
		//value form input
		let charFromInput = document.querySelector("#char").value;

		//security
		if(charFromInput.length == 0) {
			alert("Enter char to input");
		}
		else {
			//check if char from input is in char array
			for(let i=0; i<charArray.length; ++i) {
				//if char form input equals char from array do code
				if(charFromInput == charArray[i]) {
					let charDiv = document.querySelector("#char"+i);
					//add char to right field
					//if correct char is first change toUpperCase
					if(i == 0) {
						charDiv.innerHTML = charArray[i].toUpperCase();
						checker = 1;
					}
					else {
						charDiv.innerHTML = charArray[i];
						checker = 1;
					}
					correctAnswer++;
				}
			}

			//if you picked wrong char show alert
			if(checker == 0) {
				alert("You choice wrong char");
				//table
				let table = document.querySelector("table");

				//create record
				let record = document.createElement("tr");
				//append into table
				table.appendChild(record);

				//create data char
				let dataChar = document.createElement("td");
				dataChar.innerHTML = charFromInput;
				record.appendChild(dataChar);
			}
		}
		//clear input value
		document.querySelector("#char").value = "";
	}

	function win() {
		if(correctAnswer == charArray.length) {
			alert("You win!");
			document.location.reload();
		}
	}

	drawWordFiled();

}