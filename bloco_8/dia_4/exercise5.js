const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const result = names.reduce((acc, name) => {
    return acc + name.split('').reduce((soma, letra) => 
      (letra.toLowerCase() == 'a' ? soma + 1 : soma), 0)}, 0);

  return result;
}

assert.deepStrictEqual(containsA(), 20);