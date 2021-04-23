//Exercicio 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercicio 2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

//Exercicio 3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu);

//For
//Exercicio 1

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(let i = 0; i < groceryList.length; i += 1){
    console.log(groceryList[i]);
}

//For of
//Exercicio 1


let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names) {
  console.log(name);
}

//Agora na pratica

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//1:
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let i = 0; i < numbers.length; i += 1){
        console.log(numbers[i]);
    }
        // ou usando o for of
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let num of numbers){
        console.log(num);
    }

//2:

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum = 0;
    for(let i = 0; i < numbers.length; i += 1){
        sum += numbers[i];
    }
        console.log(sum);
//3:

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum = 0;
    for(let i = 0; i < numbers.length; i += 1){
        sum += numbers[i];
    }
    let media = sum / numbers.length
      console.log(media);