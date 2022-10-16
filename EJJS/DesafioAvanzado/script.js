const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const bttnReset = document.getElementById("reset");
const message = document.getElementById("message");
const h1 = document.querySelector("h1");
const easyBttn = document.getElementById("easyButton");
const hardBttn = document.getElementById("hardButton");


let easy = true;
let hard;
easyBttn.addEventListener("click", function(){
    easy = true;
    hard = false;
    easyBttn.classList.add("selected");
    hardBttn.classList.remove("selected");
    randomColors();
})
hardBttn.addEventListener("click", function(){
    hard = true;
    easy = false;
    easyBttn.classList.remove("selected");
    hardBttn.classList.add("selected");
    randomColors();
})


let clickedColor;
let pickedColor;

let colors = [];
let red, green, blue;
function randomColors(){
    message.style.opacity = "0";
    message.innerText = "";
    colors = [];
    for(let i = 0; i < squares.length; i++){
        squares[i].style.opacity = "1";
        if(easy){
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
        }else if(hard){
            let randMax = Math.floor(Math.random() * (256 - 30)) + 30;
            let ranMin = randMax - 30;
            red = Math.floor(Math.random() * (randMax - ranMin)) + ranMin;
            green = Math.floor(Math.random() * (randMax - ranMin)) + ranMin;
            blue = Math.floor(Math.random() * (randMax - ranMin)) + ranMin;
        }
        let randomColor = "rgb(" + red + ", " + green + ", " + blue + ")";
        squares[i].style.backgroundColor = randomColor;
        colors.push(randomColor);
        h1.style.color = "black";
        colorDisplay.style.color = "black";
    }
    pickedColor = colors[Math.floor(Math.random() * 6)];
    colorDisplay.innerText = pickedColor;
    
}

bttnReset.addEventListener("click", randomColors);



for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
        clickedColor = squares[i].style.backgroundColor;

        if (pickedColor != clickedColor){
            squares[i].style.opacity = "0";
        }else{
            message.innerText = "¡¡CORRECTO!!";
            message.style.opacity = "1";
            h1.style.color = pickedColor;
            colorDisplay.style.color = pickedColor;
            colors = [];
            for(let i = 0; i < squares.length; i++){
                squares[i].style.opacity = "1";
                squares[i].style.backgroundColor = pickedColor;
            }
        }
    })
}



