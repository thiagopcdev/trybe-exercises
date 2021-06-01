const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, i) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados! id: ${i}`);
};

console.log(emailListInData.forEach(showEmailList));


//================================================//

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (n) => ((n % 5 === 0) && (n % 3 === 0));

console.log(numbers.find(findDivisibleBy3And5))

//================================================//

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

console.log(names.find(findNameWithFiveLetters));

//================================================//

const numbers = [1,2,3,4,5,6,7,8,9,10];

const findDivisibleBy3And5 = (n) => n * 3;

console.log(numbers.forEach(findDivisibleBy3And5))

//==================================================//

const numbers = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => ((bigger < number) ? bigger : number);

const bigger = numbers.reduce(getBigger, 100);
console.log(bigger); // 85

//===================================================Pega numero par e faz a soma, utilizando APENAS reduce
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getBigger = (acumul, number) => ((number % 2 === 0) ? acumul + number : acumul);

const bigger = numbers.reduce(getBigger, 0);
console.log(bigger); // 152

//===================================================Pega numero par e faz a soma, utilizando filter e reduce

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const pegaPagar = (num) => num % 2 === 0;
const somar = (acumul, number) => acumul + number;

const bigger = numbers.filter(pegaPagar).reduce(somar, 0);
console.log(bigger); // 152