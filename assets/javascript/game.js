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

document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  console.log(userGuess);

  var computerChoice = userOptions[Math.floor(Math.random() *userOptions.length)];

  // Input userChoice vs computerChoice below and compare results

--guessesLeft
guessesTyped[userGuess]

if (guessesLeft === 0) {
	alert("you lose");
	return guessesLeft
}

if (userGuess === computerChoice){
	++wins
	alert("you win");
	
}	

var html = 
    "<p>Guess what letter I am thinking of</p>" +
	"<p>Wins:" + wins + "</p>" +
	"<p>Losses:" + losses + "</p>" +
	"<p>Guesses Left:" + guessesLeft + "</p>" +
	"<p>Your guesses so far:" + guessesTyped + "</p>";

	document.querySelector('#game').innerHTML = html;





  //html updater

 




}
