let numeroPrimo = 72;
let divisor = 1;

// comeca com 2 porque todo numero é divisivel por 1
for (let numero = 2; numero <= numeroPrimo; numero += 1) {
    if (numeroPrimo % numero === 0) {
        divisor += 1;
    }
}
if (divisor === 2) {
    console.log(numeroPrimo + ' é primo');
} else {
    console.log(numeroPrimo + ' não é primo');
}