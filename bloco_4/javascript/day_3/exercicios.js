//Exercicios Dia 3

//1: 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let quadrado = 5;
let caracter = '';

for (let i = 1; i <= quadrado; i += 1){
    caracter += '*';
    
}
for (let i = 1; i <= quadrado; i += 1){
    console.log(caracter);
}

//2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.

let tamanho = 5;
let caracter = '';

for (let i = 1; i <= tamanho; i += 1){
    caracter += '*';
    console.log(caracter);
}

//3- Agora inverta o lado do triângulo.

let tamanho = 5;
let saida = '';
let espacoVazio = 0;

for (let l = 1; l <= tamanho; l += 1){ //isso é uma linha
  saida = '';
  espacoVazio = tamanho -l;
  for (let c = 0; c <= tamanho; c += 1) { // isso é uma coluna
    if (c <= espacoVazio) {
      saida += ' ';
    }else {
      saida += '*';
    }
  }
  console.log(saida);
  
}

//4- Depois, faça uma pirâmide com n asteriscos de base:


let n = 5;
let symbol = '*';
let inputLine = '';
let midOfMatrix = 0;

if (n % 2 == 1){midOfMatrix = (n + 1) / 2;} else {midOfMatrix = n/ 2;}
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + '.';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};

//Bonus 1:

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}


// Bonus 2: 

let divisors = 1;
let numberToCheck = 25;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');