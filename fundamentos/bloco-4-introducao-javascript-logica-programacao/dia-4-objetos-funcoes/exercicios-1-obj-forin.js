let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// Exercicio 1
console.log('Bem-vinda ' + info.personagem);

// Exercicio 2
info.recorrente = 'Sim';
console.log(info);

// Exercicio 3
for (let index in info) {
    console.log(index);
}

// Exercicio 4
for (let index in info) {
    console.log(info[index]);
}

// Exercicio 5
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