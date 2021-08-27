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
