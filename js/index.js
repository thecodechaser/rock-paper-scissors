function computerPlay(){
    let number =Math.floor(Math.random() * 3)+1;
    if(number==1){
        return "rock";
    } else if(number==2){
        return "paper";
    } else {
        return "scissors";
    }
}

function playerPlay(){
    let playerSelection=prompt("Please enter input");
   return playerSelection.toLowerCase();
}

let playerScore=0;
let computerScore=0;


function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection) {
        return "It is a tie";
    }


    if(playerSelection == "rock") {

        if(computerSelection == "scissors") {
            playerScore++;
            return "You Win! Rock beats Scissors";
        } else if(computerSelection == "paper") {
            computerScore++;
            return "You Lose! Paper beats Rock";
        }
    }

    if(playerSelection == "paper") {

        if(computerSelection == "rock") {
            playerScore++;
            return "You Win! Paper beats Rock";
        } else if(computerSelection == "scissors") {
            computerScore++;
            return "You Lose! Scissors beats Paper";
        }
    }

    if(playerSelection == "scissors") {

        if(computerSelection == "paper") {
            playerScore++;
            return "You Win! Scissors beats Paper";
        } else if(computerSelection == "rock") {
            computerScore++;
            return "You Lose! Rock beats Scissors";
        }
    } else {
        return "Wrong input! please choose among Rock, Paper, Scissors"
    }
}


