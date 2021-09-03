function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay(i){
    i = getRandomInt(3);
    if (i === 1){
        console.log("Scissors");
        return "scissors";
    }
    else if (i === 2){
        console.log("Rock");
        return "rock";
    }
    else {
        console.log("Paper");
        return "paper";
    }
}

   
function game(i, count){
    for (var count = 0; count <5; count++){
        playRound(playerSelection, computerSelection);
            if (playRound(playerSelection, computerSelection) === "You won!!!"){
                i++;
                console.log(count);
            }
            else{
                console.log("not this time")
                console.log(count)
            }
        }

}
function playRound(){
    //console.log("Hello, welcome to RockPaperScissors please enter your choice");
    playerSelection;
    if (computerSelection === playerSelection){
        return "It's a draw!"
        //draw statement
    }
    else if (computerSelection === "rock" && playerSelection === "scissors") {
        return "You lost, Rock beats Scissors!"
        //Losing 1 PC: Rock, Player: Scissors
    }
    else if(computerSelection === "scissors" && playerSelection === "paper"){
        return "You lost, Scissors beats Paper"
    }
    else if(computerSelection === "paper" && playerSelection === "rock"){
        return "You lost, Paper beats Rock"
    }
    else if (computerSelection === "paper" && playerSelection === "scissors"){
        return "You won!!!"
    }
    else if (computerSelection === "scissors" && playerSelection === "rock"){
        return "You won!!!"
    }
    else if(computerSelection === "rock" && playerSelection === "paper"){
        return "You won!!!"
    }

    else{
        return "Please restart and enter a valid value"
    }
}
function yourGuess(Guess){
prompt().toLowerCase()
}

let i = 0;
let count = 0;
let playerSelection = yourGuess();
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));
game(i);


