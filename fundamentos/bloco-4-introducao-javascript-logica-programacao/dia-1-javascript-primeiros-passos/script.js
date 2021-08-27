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