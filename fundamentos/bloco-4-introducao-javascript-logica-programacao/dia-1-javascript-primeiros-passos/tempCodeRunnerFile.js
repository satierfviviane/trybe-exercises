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



