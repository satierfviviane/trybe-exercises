// Exercício 1
const a = 4;
const b = 3;

const sum = a + b; 
console.log(sum);

const sub = a - b;
console.log(sub);

const mult = a * b;
console.log(mult);

const div = a / b;
console.log(div);

const mod = a % b;
console.log(mod);

// Exercício 2
const num1 = 123;
const num2 = -900;

if (num1 > num2) {
    console.log(num1);
} else {
    console.log(num2);
}

// Exercício 3
const numA = 23;
const numB = 44;
const numC = 1998;

if (numA > numB && numA > numC) {
    console.log(numA);
} else if (numB > numA && numB > numC) {
    console.log(numB);
} else {
    console.log(numC);
}

// Exercício 4
const numD = 0;

if (numD > 0) {
    console.log('positive');
} else if (numD < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

// Exercício 5
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.
let anguloA = 90;
let anguloB = 45;
let anguloC = 45;

let somaAngulos = anguloA + anguloB + anguloC
let angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos) {
    if (somaAngulos === 180){
        console.log(true);
    }
    else {
        console.log(false);
    }
} else {
    console.log("Erro ângulo inválido");
}

// Exercicio 6
// ToLowerCase in https://www.w3schools.com/jsref/jsref_tolowercase.asp
let pecaXadrez = "TORRE";

switch (pecaXadrez.toLowerCase()){
case "rei":
    console.log("Rei: se move em qualquer direção, mas só uma casa por vez");
    break;

case "rainha" :
    console.log("Rainha: pode se mover em qualquer direção, quantas casas quiser");
    break;

case "torre":
    console.log("Torre: pode se mover na vertical e na horizontal, quantas casas quiser");
    break;

case "bispo":
    console.log("Bispo: move-se na diagonal, quantas casas quiser");
    break;
    
case "cavalo":
    console.log("Cavalo: move-se em L, pode saltar sobre outras peças");
    break;

case "peão":
    console.log("Peão: move-se uma casa para frente, exceto no primeiro movimento, quando pode mover-se em duas casas");
    break;
}

// Exercício 7
const nota = 85.5

if (nota < 0 || nota > 100) {
    console.log("Nota incorreta!");
}
else if (nota >= 90){
    console.log("Nota A");
}
else if (nota >= 80){
    console.log("Nota B");
}
else if (nota >= 70){
    console.log("Nota C");
}
else if (nota >= 60){
    console.log("Nota D");
}
else if (nota >= 50){
    console.log("Nota E");
}
else {
    console.log("Nota F")
}

// Exercício 8
const A = 31;
const B = 67;
const C = -993;

if (A % 2 === 0 || B % 2 === 0 || C % 2 === 0) {
    console.log('true');
} else {
    console.log('false');
}

