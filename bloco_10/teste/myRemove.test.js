const myRemove = require('./myRemove');

describe('Testando o MyRemove', () => {
  test('Verifica se remove valor', () => {
    expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4])
  });

  test('Nao retornar array original', () => {
    expect(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
  });

  test('Nao sofreu alteração', () => {
    expect(() => {
      const array = [5,6,7,8];
      myRemove(array, 5).toEqual([5,6,7,8])
    });
  });

  test('Array esperado', () => {
    expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
  });
});