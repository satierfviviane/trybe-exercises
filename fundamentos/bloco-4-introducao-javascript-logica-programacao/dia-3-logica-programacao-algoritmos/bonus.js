// Exercicio 6 
// verifica se um numero é primo ou não
let numeroPrimo = 72;
let divisor = 1;

// comeca com 2 porque todo numero é divisivel por 1
// aqui ele percorre a sequencia numerica, se o numero for primo, ele só será divisivel por 1 e por ele mesmo, logo o divisor terá valor 2.
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