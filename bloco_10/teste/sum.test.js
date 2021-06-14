const  sum = require('./sum');

describe('sum', () => {
  test('Testando soma', () => {
    expect(sum(4,5)).toBe(9);
  });

  test('Throw is not a number',  () => {
    expect(() => sum(4, '5')).toThrow();
  })

  test(' 0 + 0 = 0', () => {
    expect(sum(0,0)).toBe(0);
  });

  test('error "Parameters must be number"', () => {
    expect(() => sum(4,'5')).toThrow(/parameters must be numbers/)
  })
});
  