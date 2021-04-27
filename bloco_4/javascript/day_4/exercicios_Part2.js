//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalindromo (word){

    let palavra = word;
    let palavraInversa = [];
    let polindromo = false;
    let letraDiferente = 0;

    for (let i = palavra.length -1; i >= 0; i -= 1 ){
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
