<p>
  <img alt="APM" src="https://img.shields.io/apm/l/vim-mode?color=blue">
</p>


# Hangman

## Table of contents
* [About game](#about-game)
* [Instalation](#instalation)
* [Important functions](#important-functions)

## About game
In this game you are trying to guess the password. On the start you pick categories currently are two categories name and fruits. You can make only five mistakes after lose all lives game will be over. In bottom side of window game you can see tble with wrongs chars, so if you choose wrong char picked char will be in table. All chars you must enter in lower case.

## Instalation
1. First step is clone repository</br>
`git clone https://github.com/JanKolo04/JS-Games.git`

2. Next step is run Apache Web Server in XAMPP

3. Last step to run game you must enter a url in browser</br>
`http://localhost/JS-Games/Hangman/`

## Important functions
1. Function drawWordFiled

      This function draw fileds for chars. Function has parameter with category wich is passing after select category from wich we wont guess words. All data is stored in <strong>JSON file</strong>, so to get data from JSON we can use function from <strong>JQuery</strong> this function it's `$.getJSON("words.json", function(data)`. Data varaible is object with whole data from JSON file. In next two line of code pick random number from 1 to 10 range for get random word from data. Rest piece of code it's createing <strong>HTML object</strong>.

```JS
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
```

## Photos
In the first picture you are pick category of words. In the second picture is game where you guess word and you can see on the left top corner of window your lives, underneath are filds for chars, input where you enter yours chars and in bottom is table for wrong chars. In lasts photo you can see incorrect char in table and correct char in fileds.

<img width="245" alt="Zrzut ekranu 2022-07-31 o 22 00 36" src="https://user-images.githubusercontent.com/76879087/182043100-6269eeaf-a2e4-4ef0-8bca-dd65b833c358.png"> <img width="245" alt="Zrzut ekranu 2022-07-31 o 22 12 52" src="https://user-images.githubusercontent.com/76879087/182043525-8acb8741-8295-417f-b385-d0b02bddd090.png"> <img width="245" alt="Zrzut ekranu 2022-07-31 o 22 00 48" src="https://user-images.githubusercontent.com/76879087/182043102-228fe804-6ece-4e90-a058-e3fb358e6f29.png"> <img width="245" alt="Zrzut ekranu 2022-07-31 o 22 01 00" src="https://user-images.githubusercontent.com/76879087/182043104-dac1d044-8201-4ec1-a339-bee807330b5f.png">

## License
All code is released under the <a href="https://github.com/JanKolo04/JS-Games/blob/main/LICENSE">MIT</a> License
