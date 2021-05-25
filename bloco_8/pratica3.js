const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const check = (nota1, nota2) => {
    if (nota1 === nota2){
        return 1;
    } 
    if (nota1 !== nota2  && nota2 !== 'N.A') {
        return -0.5;
    }
    return 0;
}

const avaliador = (gabarito, resp, func) => {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i += 1) {
        acertos += func(gabarito[i], resp[i]);
    }
    return `Resultado: ${acertos} acertos!`;
}

console.log(avaliador(rightAnswers, studentAnswers, check));