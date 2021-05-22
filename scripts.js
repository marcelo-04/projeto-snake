
let canvas;
let context;

window.onload = function(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    document.addEventListener("keydown", keyDownEvent);

    let posx = 8;
    setInterval(desenharJogo, 1000 / posx);
};

let tamanhoTela = tamanhoCaminho = 20;
let nextX = nextY = 0; 

let defaultTamanhoCauda = 1;
let tamanhoCauda = defaultTamanhoCauda;
let caminhoCobra = [];
let cobraEixoX = cobraEixoY = 10;

let appleX = (appleY = 15);

function desenharJogo() {
    cobraEixoX += nextX;
    cobraEixoY += nextY;

    if(cobraEixoX < 0) {
        cobraEixoX = tamanhoTela -1;
    }
    if(cobraEixoX > tamanhoTela - 1) {
        cobraEixoX = 0;
    }
    if(cobraEixoY < 0) {
        cobraEixoY = tamanhoTela -1;
    }
    if(cobraEixoY > tamanhoTela - 1) {
        cobraEixoY = 0;
    }
    
    if(cobraEixoX == appleX && cobraEixoY == appleY) {
        tamanhoCauda++;
        appleX = Math.floor(Math.random() * tamanhoTela);
        appleY = Math.floor(Math.random() * tamanhoTela);
    }

    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "green";
    for(let cont = 0; cont < caminhoCobra.length; cont++){
        context.fillRect(
            caminhoCobra[cont].x * tamanhoCaminho,
            caminhoCobra[cont].y * tamanhoCaminho,
            tamanhoCaminho,
            tamanhoCaminho
        );
        if(caminhoCobra[cont].x == cobraEixoX && caminhoCobra[cont].y == cobraEixoY) {
            tamanhoCauda = defaultTamanhoCauda;
        }
    }

    context.fillStyle = "red";
    context.fillRect(appleX * tamanhoCaminho, appleY * tamanhoCaminho, tamanhoCaminho, tamanhoCaminho);

    caminhoCobra.push({
        x: cobraEixoX,
        y: cobraEixoY
    });
    while(caminhoCobra.length > tamanhoCauda) {
        caminhoCobra.shift();
    }
}   

function keyDownEvent(event) {
   
    switch(event.keyCode) {
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
}







