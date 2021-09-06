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

   
function game(count){
    for (var count = 0; count < 5; count++){
        playRound(playerSelection, computerSelection);
        console.log(count)
}
}

/*function game(count){
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
*/

function playRound(){
    //console.log("Hello, welcome to RockPaperScissors please enter your choice");
    playerSelection = prompt().toLowerCase();
    computerSelection = computerPlay().toLowerCase();
    if (computerSelection == playerSelection){
        //return "It's a draw!"
        //draw statement
    }
    else if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScore = ++computerScore;
        console.log(computerScore);
        //return "You lost, Rock beats Scissors!"
        //Losing 1 PC: Rock, Player: Scissors
    }
    else if(computerSelection == "scissors" && playerSelection == "paper"){
        computerScore = ++computerScore;
        console.log(computerScore);
        //return "You lost, Scissors beats Paper"
    }
    else if(computerSelection == "paper" && playerSelection == "rock"){
        computerScore = ++computerScore;
        console.log(computerScore);
        //return "You lost, Paper beats Rock"
    }
    else if (computerSelection == "paper" && playerSelection == "scissors"){
        playerScore = ++playerScore;
        console.log(playerScore);
        //return "You won!!!"
    }
    else if (computerSelection == "scissors" && playerSelection == "rock"){
        playerScore = ++playerScore;
        console.log(playerScore);
        //return "You won!!!"
    }
    else if(computerSelection == "rock" && playerSelection == "paper"){
        playerScore = ++playerScore;
        console.log(playerScore);
        //return "You won!!!"
    }

    else{
        return "Please restart and enter a valid value"
    }
}



let computerScore = 0;
let playerScore = 0;
let i = 0;
let count = 0;
let playerSelection;
let computerSelection;
//playRound(playerSelection, computerSelection);
//console.log(playRound(playerSelection, computerSelection));
game(i);


