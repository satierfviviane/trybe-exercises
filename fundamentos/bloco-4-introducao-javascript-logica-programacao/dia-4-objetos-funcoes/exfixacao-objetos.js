// Exercicios
let player = {
    fullName: { name: 'Marta', lastName: 'Silva'},
    // name: 'Marta',
    // lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
}
player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player);

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' de idade');

console.log('A jogadora ' + player.fullName.name + ' ' + player.fullName.lastName + ' foi eleita a melhor do mundo ' + player.bestInTheWorld.length + ' vezes');

console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata');
