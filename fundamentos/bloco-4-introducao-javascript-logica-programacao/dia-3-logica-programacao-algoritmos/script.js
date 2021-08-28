// Exercício 1
let n = 5;
let asterisco = '*';
let linha = '';

for (let index = 0; index < n; index += 1) { // aqui imprime 1 linha
    linha = linha + asterisco;
}
for (let index = 0; index < n; index += 1) { // aqui imprime 5 linhas
    console.log(linha); 
}

// Exercício 2
let size = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
}

// Exercício 3
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
}

