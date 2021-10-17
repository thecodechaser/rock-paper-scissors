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


