//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo (word){

    let palavra = word;
    let palavraInversa = [];
    let polindromo = false;
    let letraDiferente = 0;

    for (let i = palavra.length -1; i >= 0; i -= 1){
        palavraInversa.push(palavra[i]);
    }
    for (let i in palavra){
        if (palavra[i] !== palavraInversa[i]) letraDiferente += 1;
    }
    if (letraDiferente == 0) polindromo = true;
    
    return polindromo;
}


console.log(verificaPalindromo('desenvolvimento'));

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function higherNumber (numeros) {
     let maiorIndice = 0;
    
     for (let i in numeros){
         if(maiorIndice < numeros[i]) maiorIndice = i;
     }
    return maiorIndice;

}

console.log(higherNumber([2, 3, 6, 7, 10, 1]));

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function higherNumber (numeros) {
    let menorIndice = numeros.length;
   
    for (let i in numeros){
        if(menorIndice > numeros[i]) menorIndice = i;
    }
   return menorIndice;

}

console.log(higherNumber([2, 4, 6, 7, 10, 0, -3]));

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function biggestName (names) {
    let maiorNome = '';
   
    for (let i in names){
        if(maiorNome.length < names[i].length) maiorNome = names[i];
    }
   return maiorNome;

}

console.log(biggestName(['Thiago', 'Larissa', 'Elizabeth', 'Renato','Diego']));

//5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repeatMore (numeros) {
    
    let contadorNumAnterior = 0, contadorNumAtual = 0, indiceNumAnt = 0;
 
    for (let i in numeros){

        for(let i2 in numeros){
            if(numeros[i] == numeros[i2]) 
            contadorNumAtual += 1;
        }
        if(contadorNumAtual > contadorNumAnterior){
            contadorNumAnterior = contadorNumAtual;
            indiceNumAnt = i;
        }
        contadorNumAtual = 0;
    }
  return numeros[indiceNumAnt];

}

console.log(repeatMore([2, 3, 2, 5, 8, 2, 3]));

//6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somatorio (n){
    let totalsoma = 0;
    for(let i = 1; i <= n; i += 1){
        totalsoma += i;
    }
    return totalsoma;
}

console.log(somatorio(5));

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

function comparaFinal (word, wordEnd){
    

    let condicao = true;
    for (let i= 0; i < wordEnd.length; i += 1) {
        if (word[word.length - wordEnd.length + i] !== wordEnd[i]) {
          condicao = false;
        }
      }
    return condicao;
}

console.log(comparaFinal('Thiago', 'ago'));