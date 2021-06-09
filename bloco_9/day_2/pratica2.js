//Parte 1
const arrayRandomNum = (size) => Array.from({length: size}, (v, k) => Math.round((Math.random() * 50)));
const quadradoSomado = (array) => array.map((v) => v * v).reduce((acc, v) => acc + v);

const promise = new Promise((resolve, reject) => {
  const soma = quadradoSomado(arrayRandomNum(10));
  soma >= 8000 ? reject() : resolve();  
});

promise
  .then(() => console.log('Promise Resolvida'))
  .catch(() => console.log('Promise Rejeitada'));


  //Parte 2

const arrayRandomNum = (size) => Array.from({length: size}, (v, k) => Math.round((Math.random() * 50)));
const quadradoSomado = (array) => array.map((v) => v * v).reduce((acc, v) => acc + v);

const promise = new Promise((resolve, reject) => {
  const soma = quadradoSomado(arrayRandomNum(10));
  soma >= 8000 ? reject() : resolve(soma);  
});

promise
  .then((soma) => console.log([2, 3, 5, 10].map((n) => Math.floor(soma / n))))
  .catch(() => console.log('Promise Rejeitada'));

  //Parte 3

const arrayRandomNum = (size) => Array.from({length: size}, (v, k) => Math.round((Math.random() * 50)));
const quadradoSomado = (array) => array.map((v) => v * v).reduce((acc, v) => acc + v);

const promise = new Promise((resolve, reject) => {
  const soma = quadradoSomado(arrayRandomNum(10));
  soma >= 8000 ? reject() : resolve(soma);  
});

promise
  .then((soma) => [2, 3, 5, 10].map((n) => Math.floor(soma / n)))
  .then((array) => console.log(array.reduce((acc, v) => acc + v)))
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));


  //Bonus


const arrayRandomNum = (size) => Array.from({length: size}, (v, k) => Math.round((Math.random() * 50)));
const quadradoSomado = (array) => array.map((v) => v * v).reduce((acc, v) => acc + v);
const checkSoma = () => {
const soma = quadradoSomado(arrayRandomNum(10));
  if (soma >= 8000){
    throw new Error()
  }
    return soma;  
}
const sumArrayFromSum = (sum) => [2, 3, 5, 10].map(number => sum / number)
  .reduce((number, acc) => number + acc);

const fetchPromise = async () => {
  try {
    const soma = await checkSoma();
    const sumFromSum = await sumArrayFromSum(soma);    
  } catch(error) {
      console.log('É mais de oito mil! Essa promise deve estar quebrada!')

  }
};

fetchPromise();
