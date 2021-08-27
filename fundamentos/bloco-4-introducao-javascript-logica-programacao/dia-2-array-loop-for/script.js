let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1
for (let i = 0; i < numbers.length; i += 1) {
    console.log(numbers[i]);
}

// Exercício 2
let sumArray = 0; 

for (let i = 0; i < numbers.length; i += 1) {
    sumArray += numbers[i]; 
}
 console.log(sumArray);

// Exercício 3 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
    result = numbers[i];
    
}
media = result / numbers.length;
console.log(media);

// Exercicio 4 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
    result = numbers[i];
    
}
media = result / numbers.length;

if (media > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor que 20');
}

// Exercício 5 
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let majorNum = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (majorNum < numbers[index]) {
        majorNum = numbers[index];
    } else {
        majorNum = majorNum;
    }
} 
console.log(majorNum);

// Exercicio 6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let count = 0;

for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        count += 1;
    }
}
if (count === 0) {
    console.log('nenhum valor ímpar encontrado');
} else {
    console.log(count);
}

// Exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minusNum = numbers[0];

for (i = 1; i < numbers.length; i += 1) {
    if (minusNum > numbers[i]) {
        minusNum = numbers[i];
    }
}
console.log(minusNum);

// Exercício 8
let newArray = [];

for (i = 1; i <= 25; i += 1){
    newArray.push(i);
}
console.log(newArray);

// Exercício 9
let newArray = [];

for (i = 1; i <= 25; i += 1){
    newArray.push(i / 2);
}
console.log(newArray);