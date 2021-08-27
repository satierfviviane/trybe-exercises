const imposto = 1.20; // 1.20 notacao para 20%

const valorCusto = 100;

const valorVenda = 120;

if (imposto < 0 || valorCusto < 0 || valorVenda < 0 ){
    console.log('Valor menor que zero');
} else {
    const valorCustoTotal = valorCusto * imposto;
    const lucro = valorVenda - valorCustoTotal;
    console.log('O custo total do produto é: R$'+ valorCustoTotal + ' e o lucro é: R$' + lucro);
}