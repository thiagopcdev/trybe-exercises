const myRemoveWithoutCopy = require('./myRemoveWithout');

describe('Testando MyRemoveWithoutCopy', () => {
  it('array esperado', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).toEqual([1,2,4])
  });
  it('nao retorna o array', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
  });
  test('Nao sofreu alteração', () => {
    expect(() => {
      const array = [5,6,7,8];
      myRemoveWithoutCopy(array, 5).toEqual([5,6,7,8])
    });
  });

  test('Array esperado', () => {
    expect(myRemoveWithoutCopy([1,2,3,4], 5)).toEqual([1,2,3,4]);
  });
});