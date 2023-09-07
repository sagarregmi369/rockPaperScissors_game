const buttons= document.querySelectorAll('.button');
const result = document.getElementById('result');
const endGame = document.getElementById('end-btn');
const point = document.getElementById('score');

let userScore= 0;
let computerScore= 0;

const computerPlay=()=>{
    let randomCondition=['ROCK', 'PAPER', 'SCISSORS'];
    let randomNumber=Math.floor(Math.random()*3);
    return randomCondition[randomNumber];
}

const userPlay=(value)=>{
    return value;
}

buttons.forEach(button=>{
    button.onclick=()=>{
        let userSelection=userPlay(button.value);
        let botSelection=computerPlay();
        playRound(userSelection, botSelection);
        
        if(userScore===5){
            result.innerText="----------You Won the game!!-----------"
            disableButtons();
            setTimeout(resetGame,3000)
        }else if(computerScore===5){
            result.innerText="----------You lost the game!!--------"
            disableButtons();
            setTimeout(resetGame,3000)
        }
    }
});

const playRound=(playerSelection, computerSelection)=>{
    if (playerSelection == computerSelection){
        point.innerText=`Player Score = ${userScore} ----- Computer Score = ${computerScore}`;
        result.innerText=`The game was draw! ${playerSelection} vs ${computerSelection}`;  
    }else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS")||
              (playerSelection == "PAPER" && computerSelection == "ROCK")||
              (playerSelection == "SCISSORS" && computerSelection == "PAPER")){
        userScore = userScore + 1;
        point.innerText=`Player Score = ${userScore} ----- Computer Score = ${computerScore}`;
        result.innerText=`You Won ! ${playerSelection} beats ${computerSelection}`;
    }else{
        computerScore = computerScore + 1;
        point.innerText=`Player Score = ${userScore} ----- Computer Score = ${computerScore}`;
        result.innerText=`You Lost! ${computerSelection} beats ${playerSelection}`;    
    }
}

const disableButtons=()=>{
    for(let i=0; i<buttons.length; i++){
        buttons[i].disabled = true;
    }
}
const enableButtons=()=>{
    for(let i=0; i<buttons.length; i++){
        buttons[i].disabled = false;
    }
}

let resetGame = () => {
    enableButtons();
    userScore=0;
    computerScore=0;
    result.innerText = ``;
    point.innerText = ``;
};

endGame.onclick = () => {
    resetGame();
};



