function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function computerPlay(i){
    i = getRandomInt(3);
    if (i === 1){
        console.log("Scissors");
        return "Scissors";
    }
    else if (i === 2){
        console.log("Rock");
        return "Rock";
    }
    else {
        console.log("Paper");
        return "Paper";
    }
}
function playRound(playerSelection,computerSelection){
    console.log("Hello, welcome to RockPaperScissors please enter your choice");
    playerSelection
}
let playerSelection = prompt();
let computerSelection = computerPlay();

computerPlay();
