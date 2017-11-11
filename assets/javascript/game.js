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


var userOptions = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j"  ]

document.onkeyup = function() {
  var userGuess = String.fromCharCode(event.keyCode).
  toLowerCase();
  console.log(userGuess);
}
