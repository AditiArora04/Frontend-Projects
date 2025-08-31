let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "yellow", "green"];

let  started = false;
let level = 0;
let highest = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
        // highUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },270);
};

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },270);
};

function levelUp() {
    userSeq= [];
    level++;
    h2.innerText = `level ${level}`;

    //random btn choose
    let randomIdx = Math.floor(Math.random() * 4);
    let randCol = btns[randomIdx];
    let randBtn = document.querySelector(`.${randCol}`);
    // console.log(randomIdx);
    // console.log(randCol);
    // console.log(randbtn);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn); 
};

function highUp(){
    let highest = Math.max(level);
    if(level > highest){
        highest = level;
        console.log(highest);
    }
};

function checkAns(idx) {
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        if(level > highest){
            highest = level;
            console.log(highest);
        }       
        h2.innerHTML = `Game Over!  Your score is : <b>${level}</b> <br> Highest Score: <b>${highest}<b> <br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
};

function btnPress() {
    let btn = this;
    userFlash(btn);
    // console.log(this);

    userCol = btn.getAttribute("id");
    userSeq.push(userCol);

    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};