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
