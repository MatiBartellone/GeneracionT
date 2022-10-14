let main = document.getElementById("main");
let randomWord = document.getElementById("randomWord");
let text = document.getElementById("text");
let input = document.querySelector('input');
let timeSpan = document.getElementById("timeSpan");
let scoreSpan = document.getElementById("score");
let endGameContainer = document.getElementById("end-game-container");

input.addEventListener('input', updateValue);

const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
    ]

let palabraAleatoria;
let time = 10;
let score = 0;
let palabraIngresada;

function randomWords(){
    return words[Math.floor(Math.random() * words.length)];
}
function addToDOM(){
    randomWord.innerText = randomWords();
}
addToDOM();

function actualizarTiempo(){
    if(time == 0){
        clearInterval(interval);
        gameOver();
    }
    time -= 1;
    timeSpan.innerText = time + "s";
}
let interval = setInterval(actualizarTiempo, 1000);

function updateScore(){
    score += 1;
    scoreSpan.innerText = score;
}

function gameOver(){
    main.innerHTML = ""

    let h1 = document.createElement("h1");
    h1.innerText = "GAME OVER";

    let puntaje = document.createElement("p");
    puntaje.innerText = "puntaje final: " + score;

    let bttn = document.createElement("button");
    bttn.innerText = "VOLVE A EMPEZAR";
    bttn.addEventListener("click", function(){
        location.reload();
    })

    endGameContainer.appendChild(h1);
    endGameContainer.appendChild(puntaje);
    endGameContainer.appendChild(bttn);
}

function updateValue(e) {
    text.textContent = e.target.value;
    palabraIngresada = e.target.value;

    if(palabraIngresada == randomWord.innerText){
        time += 3;
        e.target.value = ""
        addToDOM();
        updateScore();
    }
  }

