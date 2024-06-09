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

