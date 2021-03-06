window.onload = function() {
	//divs
	let divWordHolder = document.querySelector("#fieldHolder");
	let charHolder = document.querySelector("#charHolder");
	//global var for char
	let charArray = [];
	//correct answer var
	let correctAnswer = 0;
	//lives answer
	let lives = 5;
	//incorrect
	let incorrect = 0;
	
	//listener function
	let button = document.querySelector("#submit");
	button.onclick = function() {
		checkChar();
		win();
	}

	function drawWordFiled(category) {
		$.getJSON("words.json", function(data) {
			//get number from 1 to 10
			//this number is a number of word from JSON file
			let randomWord = Math.round(Math.random() * (0 + 9)) + 1;

			//count all chars in word
			for(let i=0; i<data[category][randomWord].length; i++) {
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
				charArray[i] = data[category][randomWord][i].toLowerCase();
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
				//update incorrect
				incorrect++;
				//update lives variable
				lives--;
				//set innerHTML
				document.querySelector("#lives").innerHTML = "Lives: "+lives;

				//table
				let table = document.querySelector("table");

				//create record
				let record = document.createElement("tr");
				//append into table
				table.appendChild(record);

				//create data number
				let dataNumber = document.createElement("td");
				dataNumber.innerHTML = "<strong>"+incorrect+"</strong>";
				record.appendChild(dataNumber);

				//create data char
				let dataChar = document.createElement("td");
				dataChar.innerHTML = charFromInput;
				record.appendChild(dataChar);
			}
			//if lives equals 0 game over
			if(lives == 0) {
				alert("You lose");
				//reload page
				document.location.reload();
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

	document.querySelector("#categoryButton").addEventListener("click", function() {
		//select
		let selectedCategory = document.querySelector("#selectCategory").value;
		
		//display none category window
		document.querySelector("#startHolder").style = "display: none;";
		document.querySelector("#playHolder").style = "display: flex;";
		//run function with draw fileds
		drawWordFiled(selectedCategory);
	});

}