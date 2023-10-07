const scoreText = document.getElementById("score");
let score = 0;
const computer = document.getElementById("computer");
const human = document.getElementById("human");
const restartBtn = document.getElementById("restart");
const result = document.getElementById("result");
// const rockBtn = document.getElementById("rock");
// const paperBtn = document.getElementById("paper");
// const scissorBtn = document.getElementById("scissor");

//computer
function computerChoice(){
let choice = ["Rock","Paper","Scissor"];
return choice[Math.floor(Math.random()*3)];//gives 0 to 3 random nums
}
console.log(computerChoice());

let buttons = document.querySelectorAll("div button");
console.log(buttons);
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        human.innerText = button.innerText;
        computer.innerText = computerChoice();

        if(human.innerText =="Rock" && computer.innerText == "Scissor"){
            score++;
            result.innerText = "YouWin"
        }else if(human.innerText =="Scissor" && computer.innerText== "Paper"){
            score++;
            result.innerText = "YouWin"
        }else if(human.innerText == "Paper" && computer.innerText == "Rock"){
            score++;
            result.innerText = "YouWin"
        }else if(human.innerText == computer.innerText){
            score = score;
            result.innerText = "Draw"
        }
        else{
            score--;
            result.innerText = "YouLose";
        }
        scoreText.innerText = score
    })
})

restartBtn.addEventListener("click",(e)=>{
    score =0;
    scoreText.innerText = "0";
})


