let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minusNum = numbers[0];

for (i = 1; i < numbers.length; i += 1) {
    if (minusNum > numbers[i]) {
        minusNum = numbers[i];
    }
}
console.log(minusNum);