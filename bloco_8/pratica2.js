const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const check =  (num1, num2) => num1 === num2;

const loterry = (bet, func) => {
    const luckyNumber = random(1,5);
    return func(bet, luckyNumber) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(loterry(3, check));