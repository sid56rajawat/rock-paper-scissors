const CHOICES = ['rock','paper','scissors'];

function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    return CHOICES[i];
}

function playRound(playerSelection, computerSelection) {
    let ans = `Nobody Wins! ${playerSelection} does not beat ${computerSelection}`;
    if(playerSelection === "rock"){
        if(computerSelection === "paper"){
            ans = "You Lose! Paper beats Rock";
        }
        else if(computerSelection === "scissors"){
            ans = "You Win! Rock beats Scissors";
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            ans = "You Win! Paper beats Rock";
        }
        else if(computerSelection === "scissors"){
            ans = "You Lose! Scissors beats Paper";
        }
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            ans = "You Lose! Rock beats Scissors";
        }
        else if(computerSelection === "paper"){
            ans = "You Win! Scissors beats Paper";
        }
    }
    else{
        ans = "Invalid Player Choice!";
    }
    return ans;
}

function game(){
    let rounds = 5, winCounter = 0;
    while(rounds--){
        if(winCounter > 2 || winCounter < -2) break;

        console.log(`round ${5 - rounds}`);

        let playerSelection = prompt("Enter your choice (rock/paper/scissors) : ");
        if(!playerSelection) break;
        playerSelection = playerSelection.toLowerCase();

        let computerSelection = getComputerChoice();

        let ans = playRound(playerSelection,computerSelection);
        console.log(ans);

        if(ans.search("Nobody") != -1) continue;
        if(ans.search("Invalid") != -1){
            rounds++;
            continue;
        }
        if(ans.search("Win") != -1) winCounter++;
        else winCounter--;
    }
    let winner = winCounter === 0 ? "Nobody" : winCounter > 0 ? "Player" : "Computer";
    console.log("The final winner is " + winner);
}

