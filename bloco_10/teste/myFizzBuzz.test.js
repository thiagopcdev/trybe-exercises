const myFizzBuzz = require ('./myFizzBuzz');

describe('Testando MyFizzBuzz', () => {
  it('Verifica se retorno é fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('Verifica se retorno é Fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });

  it('Verifica se retorno é Buzz', () => {
    expect(myFizzBuzz(25)).toBe('buzz');
  });

  it('Verifica se retorno é 17', () => {
    expect(myFizzBuzz(17)).toBe(17);
  });

  it('Verifica se retorna falso se não for numero', () => {
    expect(myFizzBuzz('not_a_number')).toBeFalsy();
  });
});