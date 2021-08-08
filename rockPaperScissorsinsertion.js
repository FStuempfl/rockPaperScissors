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
function playRound(playerSelection,computerSelection){
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
    else {
        return "You won!!!"
    }
}
let playerSelection = prompt().toLowerCase();
let computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
console.log(playRound(playerSelection, computerSelection));


