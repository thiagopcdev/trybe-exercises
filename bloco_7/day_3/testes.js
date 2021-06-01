const assert = require('assert');


const sumAllNumbers = (numbers, i) => i < numbers.length ? numbers[i] + sumAllNumbers(numbers, i +1 ) : 0;

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers,0);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

