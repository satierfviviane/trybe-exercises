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

// Exercício 8 - Usar somente um if
const A = 31;
const B = 67;
const C = -993;

if (A % 2 === 0 || B % 2 === 0 || C % 2 === 0) {
    console.log('true');
} else {
    console.log('false');
}

// Exercício 9 - Usar somente um if
const A = 6;
const B = 4; 
const C = 222; 

if ((A % 2) !== 0 || (B % 2) !== 0 || (C % 2) !== 0){
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 10 - 
const imposto = 1.20; // 1.20 notacao para 20%

const valorCusto = 100;

const valorVenda = 120;

if (imposto < 0 || valorCusto < 0 || valorVenda < 0 ){
    console.log('Valor menor que zero');
} else {
    const valorCustoTotal = valorCusto * imposto;
    const lucro = valorVenda - valorCustoTotal;
    console.log('O custo total do produto é: R$'+ valorCustoTotal + ' e o lucro é: R$' + lucro);
}

// Exercício 11
// Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 10000.00;
let INSS = 0;
let IR = 0;
let salarioIR = 0;

if (salarioBruto <= 1556.94) {
    INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92 ) {
    INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
    INSS = salarioBruto * 0.11; 
} else {
    INSS = 570.88;
}

let salarioINSS = salarioBruto - INSS;

if (salarioINSS <= 1903.88) {
    console.log('Não há dedução de IR');
} else if (salarioINSS <= 2826.65) {
    IR = (salarioINSS * 0.075) - 142.80;
} else if (salarioINSS <= 3751.05) {
    IR = (salarioINSS * 0.15) - 354.80;
} else if (salarioINSS <= 4664.68) {
    IR = (salarioINSS * 0.225) - 636,13;
} else {
    IR = (salarioINSS * 0.275) - 869.36;
}
let salarioLiq = salarioINSS - IR;

console.log('Desconto INSS: R$' + INSS);
console.log('Desconto IR: R$' + IR);
console.log('Salário líquido: R$' + salarioLiq);



