//Exercicio 1 do conteúdo

let athlete = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    
}

console.log (`A jogadora ${athlete.name, athlete.lastName} tem ${athlete.age} de idade.`)

athlete['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(`A jogadora ${athlete.name, athlete.lastName} foi eleita a melhor do mundo por ${athlete.bestInTheWorld.length} vezes.`)

console.log(`A jogadora possui ${athlete.medals.golden} medalhas de ouro e ${athlete.medals.silver} medalhas de prata.
`)

//Exercicio 2 do conteúdo

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge'
  }

    for(let i in names){
        console.log('Olá, '+ names[i]);
    }

let carro = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
}
    for (let i in carro){
        console.log(i + ': '+ carro[i]);
    }

