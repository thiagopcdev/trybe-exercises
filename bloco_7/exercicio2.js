const fatorial = n => n == 0 ? 1 : n  * fatorial(n -1);
console.log(fatorial(4));


//Exercicio 2

const longestWord = (frase) => {
    let palavras = frase.split(' ');
    let tamMaiorPalavra = 0;
    let maiorPalavra;

    for (let palavra of palavras ) {
        if (palavra.length > tamMaiorPalavra){
            tamMaiorPalavra = palavra.length;
            maiorPalavra = palavra;
        }
    }
    return maiorPalavra;
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")); // retorna 'aconteceu'


//Excercicio 4

const skillArray = ["Html", "Css", "JavaScript", "React", "Sql"];
function skillText (name) {
    const setName = insideName => (
      `Tryber ${insideName} aqui!

      Tudo bem?`
    )

    let text = `${setName(name)}

    Minhas cinco principais habilidades são:`
    const arrayOrdenado = skillArray.sort();
    arrayOrdenado.forEach((skill, index) =>
    text = `${text}

    * ${skill}`)


    text = `
    ${text}

    #goTrybe
    `
    return text
}

console.log(skillText("Thiago"));