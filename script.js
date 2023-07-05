const CHOICES = ['rock','paper','scissors'];
const RULES = ['rock beats scissors','paper beats rock','scissors beats paper'];

function getComputerChoice(){
    let i = Math.floor(Math.random() * 3);
    return CHOICES[i];
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection) return [`Nobody Wins! ${playerSelection} does not beat ${computerSelection}`,0];
    ans =["",0];
    for(let rule of RULES){
        let playerIndex = rule.search(playerSelection);
        let computerIndex = rule.search(computerSelection);

        if(playerIndex !== -1 && computerIndex !== -1){
            if(playerIndex < computerIndex){
                ans[0] = "You Win! ";
                ans[1] = 1;
            }
            else{
                ans[0] = "You Lose! ";
                ans[1] = -1;
            }
            ans[0] += rule;
        }
    }
    
    return ans;
}

function isValidChoice(choice){
    return CHOICES.findIndex(item => item === choice) === -1 ? false : true;
}

function game(){
    const ROUNDS = prompt("Enter number of rounds : ",5);
    let counter = ROUNDS, playerWins = 0, computerWins = 0;
    while(counter--){
        if(playerWins > (ROUNDS / 2) || computerWins > (ROUNDS / 2)) break;

        console.log(`round ${ROUNDS - counter}`);

        let playerSelection = prompt("Enter your choice (rock/paper/scissors) : ");
        if(!playerSelection) break;
        playerSelection = playerSelection.toLowerCase();
        if(!isValidChoice(playerSelection)){
            counter++;
            continue;
        }
        
        let computerSelection = getComputerChoice();

        let ans = playRound(playerSelection,computerSelection);
        console.log(ans[0]);

        if(ans[1] > 0) playerWins++;
        else if(ans[1] < 0) computerWins++;
    }
    let winner = playerWins === computerWins ? "Nobody" : playerWins > computerWins ? "Player" : "Computer";
    console.log("The final winner is " + winner);
}

