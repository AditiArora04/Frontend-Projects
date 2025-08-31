let user=0;
let comp=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let resetBtn=document.querySelector("#reset-btn");

const userPara = document.querySelector("#user");
const compPara = document.querySelector("#comp");

const genCompChoice = () =>{
    const options=["rock","paper","scissors"];
   // rock,paper,scissors
    const randIdx = Math.floor(Math.random()* 3);
    return options[randIdx];
};

const resetGame= () => {
    userPara.innerText=0;
    compPara.innerText=0;
    msg.style.backgroundColor ="#a7c957";
    msg.innerText="Play Your Move 😏"
 } 

const drawGame = () => {
    msg.innerText="It's a Draw! 😅"; 
    msg.style.backgroundColor ="#0077b6";
};

const showWinner= (userWin , userChoice, compChoice) => {
    if(userWin){
       user++;
       userPara.innerText= user;
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice} 😁`;
        msg.style.backgroundColor ="green";
    }else{
        comp++;
        compPara.innerText= comp;
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice} 😂 `;
        msg.style.backgroundColor ="#fa0060";
    }
};

const playGame = (userChoice) => {
    console.log("User Choice = ",userChoice); 
    //Generate computer choice -> modular ( hr ek chote chote kaam ko funv m divide krte h,
    // ek func ek hi kaam krega, ye chote chote func reusable component hote h )
    const compChoice = genCompChoice();
    console.log("Computer Choice= ",compChoice);

    if(userChoice=== compChoice){
        // draw game
       drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors ,paper
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice ===  "paper" ){
            //rock,scissors
            userWin = compChoice === "scissors"? false:true;
        } else{
            //rock,paper
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click",resetGame);