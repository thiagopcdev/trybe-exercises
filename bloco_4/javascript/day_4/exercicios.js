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


//Exercicio 1 - Agora a prática

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem vinda, ' + info.personagem);


  //2

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  info['recorrente'] = 'Sim';

  console.log(info);

  //3

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info['recorrente'] = 'Sim';
    for (let i in info){
        console.log(i);
     }

  //4

  let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  info['recorrente'] = 'Sim';
    for (let i in info){
        console.log(info[i]);
     }

     //5

     let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
      };
      let info2 = {
        personagem: 'Tio Patinhas',
        origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
        nota: 'O último MacPatinhas',
        recorrente: 'Sim',
      };
      
      for (let key in info, info2){
        if(info[key] !== info2[key]){
            console.log(info[key] + " e " + info2[key]);    
        }else{
            console.log("Ambos recorrentes");
        }
        
      }
     