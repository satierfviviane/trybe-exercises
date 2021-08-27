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

