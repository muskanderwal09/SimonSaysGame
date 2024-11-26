let gameSeq = [];
let userSeq = [];
let btns = ["red","green","yellow","blue"];

let start = false;
let level =0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(start == false){
    console.log("Game Started");
    start=true;

    levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },350);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },350);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random button choice
    let randomInd = Math.floor(Math.random() *4);
    let randCol = btns[randomInd];
    let randBtn = document.querySelector(`.${randCol}`);
    gameSeq.push(randCol);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(ind){
    //console.log("current level " ,level);
    //let ind = level - 1;
    if(userSeq[ind] === gameSeq[ind]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 800);
        }
    }else{
        h2.innerHTML = `Game Over! Your Score Is <b>${level}</b><br> Press Any Key To Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }

}


function btnPress () {
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userClo = btn.getAttribute("id");
    userSeq.push(userClo);
    checkAns(userSeq.length-1);
}

let allBtn = document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnPress);
}


function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level =0;
}