// Randomly picks a letter ---> Random floor method
// User picks a letter ---> onkey function
// compares user picks with computer ---> if then statements?
 // -------------------Things I Need--------------------
 // 		All letters of the alphabet ---> An array
 // 		Wins counter ---> Counter variable
 // 		Losses counter--> Counter variable
 // 		Guesses left decrement counter--> Counter variable
 // 		Users guesses
 // 		Game reset when User guesses reach zero


var userOptions = [ "a", "b", "c", "d",];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesTyped =[];
var userGuess = null; // Value for UserKeystrokes

var computerChoice = userOptions[Math.floor(Math.random() *userOptions.length)];

document.onkeyup = function(event) {

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);
  // Input userChoice vs computerChoice below and compare results

if (guessesTyped.indexOf(userGuess) < 0 && userOptions.indexOf(userGuess) >= 0) {
		guessesTyped[guessesTyped.length]=userGuess;

		guessesLeft--; //Decrement every time user types a letter 


	
}	

if (computerChoice == userGuess) { // Basically a win
		wins++;
		guessesLeft = 9;
		guessesTyped = [];
		computerChoice = userOptions[Math.floor(Math.random() * userOptions.length)];

	}


if (guessesLeft == 0) {
		losses++;
		guessesLeft = 9;
		guessesTyped = []; // resets the array and selects a new word for computer
		computerChoice = userOptions[Math.floor(Math.random() * userOptions.length)]; 
		
	}


var html = //HTML updater
	  "<p><h4>Wins: " + wins + "</h4></p>" +
	   "<p><h4>Losses: " + losses + "</h4></p>"+
	    "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>"+
	     "<p><h4>Your guesses so far: " + guessesTyped + "</h4></p>";


	document.querySelector('#game').innerHTML = html;


   }


