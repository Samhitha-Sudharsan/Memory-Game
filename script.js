const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector("game-container");
const results = document.getElementById("result");
const controls = document.querySelector("controls-container");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items=[
    {name: ant, image: ant.jpg},
    {name: bee, image: bee.jpg},
    {name: bird, image: bird.jpg},
    {name: butterfly, image: butterfly.jpg},
    {name: chameleon, image: chameleon.jpg},
    {name: koala, image: koala.jpg},
    {name: lily, image: lily.jpg},
    {name: orchid, image: orchid.jpg},
    {name: parrot, image: parrot.jpg},
    {name: rose, image: rose.jpg},
    {name: watercan, image: watercan.jpg},
    {name: weed, image: weed.jpg}
]

<<<<<<< HEAD
let seconds = 0, minutes =0;
let moveCount = 0, winCount = 0;

const timeGenerator = () => {
    seconds +=1;

    if(seconds>=60){
        minutes +=1;
        seconds =0;
    }

    let secondsValue = seconds < 10 ? '0${seconds}': seconds;
    let minutesValue = minutes < 10 ? '0${minutes}': minutes;

    timeValue.innerHTML = '<span>TIme:</span> ${minutesValue}:{secondsValue}';
    
};

const movesCounter =() => {
    movesCount +=1;
    moves.innerHTML = '<span> Moves: </span> ${movesCount}';

};

//https://youtu.be/dqqxkrKhfS4?list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&t=993
=======
>>>>>>> 02c5d88f4e05e78c85a7b24aaf99bf0998a940a1
