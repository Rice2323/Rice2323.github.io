var wordSet = [ "SUPERMAN", "BATMAN", "FLASH", "GREENLANTERN", "WONDERWOMAN", "BLACKCANARY", "BEASTBOY", "CYBORG", "AQUAMAN", "SHAZAM", "VIXEN", "STARFIRE"] ;

var wins = 0;
var losses = 0;
var guessedLetters = []; 
var guessesLeft = 7 ; 
var dashName = [];  
var selectedWord = []; 
var letterGuessed = []; 
var letterLocation = []; 
var lettersNeeded = 0;
 

var totalWins = document.getElementById("wins");
var totalLosses = document.getElementById("losses");
var chosenLetters = document.getElementById("wrongGuesses");
var wordHolder = document.getElementById("puzzleWord"); 
var remainingGuesses = document.getElementById("guessesLeft");

function myScore() {


    wordHolder.textContent = dashName.join(" ");
    totalWins.textContent = "You've won " + wins + " games!";
    totalLosses.textContent = "You've lost " + losses + " games...";
    chosenLetters.textContent = "You've already tried: " + guessedLetters;
    remainingGuesses.textContent = "You have " + guessesLeft + " guesses left.";
}

function startGame(){


    guessesLeft = 7;
    lettersNeeded = 0;
    letterGuessed = [];
    dashName = [];

    selectedWord = wordSet[Math.floor(Math.random() * wordSet.length)];
    console.log(selectedWord);

    

    for ( i = 0 ;  i< selectedWord.length; i++){

    
            dashName.push("_");
            
            lettersNeeded++;

            
        }
        myScore();
      


}

 startGame();

document.onkeyup = function(event) {
var guess = event.key;
    guess.toLowerCase();



    if (selectedWord.indexOf(guess) > -1){
        for ( x = 0 ; x < dashName.length ; x++) {
           
            if ( dashName[x] === guess) {

                letterLocation.push(guess);
                lettersNeeded--;
                dashName[letterLocation[x]] = guess ;
            };
        };

       
        }
   else{ 
       guessesLeft--;

       myScore();

   } 

   if (guessesLeft === 0){

       alert("YOU LOSE!! HA HA HA HA HA!!!");
       losses++;
       startGame();

   }
   if (lettersNeeded === 0){

        alert("WINNER! WINNER! CHICKEN DINNER!!!");

        wins++;

        startGame();

   }


}




