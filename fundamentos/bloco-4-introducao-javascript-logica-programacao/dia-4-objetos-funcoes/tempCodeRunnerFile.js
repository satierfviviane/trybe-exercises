let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
};

for (let dados in info) {
    if (dados === 'recorrente' &&
    info[dados] === 'Sim' &&
    info2[dados] === 'Sim') {
        console.log('Ambos recorrentes');
    } else {
        console.log(info[dados] + ' e ' + info2[dados]);
    }
}