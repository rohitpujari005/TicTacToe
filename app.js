console.log("Game started");
let bgmusic = new Audio("./GameSong/BHAAG DK BOSE.mp3");
let winner = new Audio("./GameSong/winnercf.mp3");
let click = new Audio("./GameSong/click.mp3");
let turn = 'X';
let gameover = false;



const changeTurn = () => {
    turn == 'X' ? turn = 'O' : turn = 'X';
}


const checkWin = () => {

    let boxes = document.querySelectorAll(".boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]

    wins.forEach((e) => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && boxes[e[0]].innerText !== "") {
            document.getElementsByClassName("info")[0].innerText = boxes[e[0]].innerText + " Won";
            gameover = true;
            bgmusic.pause();
            bgmusic.currentTime = 0;
            winner.play();
            document.getElementsByClassName("game-container")[0].classList.add("read-only");
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "40%";
            console.log(boxes[e[0]].innerText + "Won");

        }
    })



}

//start game

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    bgmusic.play();
    document.getElementsByClassName("read-only")[0].classList.remove("read-only");
})

//game logic
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    let boxtext = box.querySelector(".boxtext");
    box.addEventListener("click", () => {

        if (boxtext.innerText == "") {

            click.play();
            // console.log("Cliked on boxtext");
            boxtext.innerText = turn;
            changeTurn();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
            }


        }


    })


})


// Add onclick listener to reset button
let reset = document.getElementById("btn2");
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    winner.pause();
    winner.currentTime = 0;
})



