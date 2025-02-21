let gameSeq = [];
let userSeq = [];
let level = 0;
let started = false;
let btns  = ["yellow", "red", "green", "purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress" , function () {
    if (started == false) {
        console.log("Game is started");
        started = true;  
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash")
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash")
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp , 1000);
        }
    } else {
        h2.innerHTML = `Game over! Your score was <b>${level}<b> <br> Press any  key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn")
for(btn of allbtns) {
    btn.addEventListener("click" , btnPress);
}

function reset() {
    started = 0;
    gameSeq = [];
    userSeq = [];
    level = 0;
}