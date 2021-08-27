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

// Exercicio 4 e 5
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