function testingScope(escopo) {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    //console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);


  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  oddsAndEvens.sort((a,b) => {
      if (a > b) return 1;
      if (b > a) return -1;
      return 0;
  });

  console.log(`Numero ordenados em ordem crescente ${oddsAndEvens}`);