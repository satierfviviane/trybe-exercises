// Exercício 1 - Bonus
// função sort https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);

// Exercício 2 - Bonus
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numbers.sort(function (a, b) {
    return b - a;
});
console.log(numbers);

// Exercício 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let i = 0; i < numbers.length; i += 1) {
    if ( i + 1 < numbers.length) {
        newArray.push(numbers[i] * numbers[i + 1]);
    } else {
        newArray.push(numbers[i] * 2);
    }
}
console.log(newArray);
