const CHOICES = ['rock','paper','scissors'];
const RULES = ['rock beats scissors','paper beats rock','scissors beats paper'];
let roundsPlayed = 0,playerWins = 0, computerWins = 0, totalRounds;

const choicesDiv = document.querySelector(".choices");
const choiceButtons = document.querySelectorAll(".choice");
choiceButtons.forEach(button => button.addEventListener('click',() => playRound(button.innerText.toLowerCase(),getComputerChoice())));

const output = document.querySelector(".output");

const submitButton = document.querySelector("button[type='submit']");

function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    return CHOICES[i];
}

function playRound(playerSelection,computerSelection){
    let ans;
    roundsPlayed++;

    if(playerSelection === computerSelection){
        ans = `Nobody Wins! ${playerSelection} does not beat ${computerSelection}`;
    }
    
    for(let rule of RULES){
        let playerIndex = rule.search(playerSelection);
        let computerIndex = rule.search(computerSelection);

        if(playerIndex !== -1 && computerIndex !== -1 && playerSelection !== computerSelection){
            if(playerIndex < computerIndex){
                ans = "You Win! ";
                playerWins++;
            }
            else{
                ans = "You Lose! ";
                computerWins++;
            }
            ans += rule;
        }
    }

    
    output.innerText += "\n" + ans;

    if(roundsPlayed >= totalRounds || playerWins > (totalRounds / 2) || computerWins > (totalRounds / 2)){
        choicesDiv.style.display = "none";
        let winner = playerWins === computerWins ? "Nobody" : playerWins > computerWins ? "Player" : "Computer";
        output.innerText += `\nThe final winner is ${winner}!`;
    }

}

submitButton.addEventListener('click',() => {
    totalRounds = Number(document.querySelector('#rounds').value);
    if(totalRounds) choicesDiv.style.display = "block";
    output.innerText = "";
    roundsPlayed = 0;
    playerWins = 0;
    computerWins = 0;
});