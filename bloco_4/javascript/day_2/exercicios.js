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

//1: Percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
    
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let i = 0; i < numbers.length; i += 1){
        console.log(numbers[i]);
    }
        // ou usando o for of
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let num of numbers){
        console.log(num);
    }

//2: Some todos os valores contidos no array e imprima o resultado;

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum = 0;
    for(let i = 0; i < numbers.length; i += 1){
        sum += numbers[i];
    }
        console.log(sum);

//3: Calcule e imprima a média aritmética dos valores contidos no array;

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum = 0;
    for(let i = 0; i < numbers.length; i += 1){
        sum += numbers[i];
    }
    let media = (sum / numbers.length);
      console.log(media);

//4: Caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let sum = 0;
    for(let i = 0; i < numbers.length; i += 1){
        sum += numbers[i];
    }
    let media = (sum / numbers.length);
    if (media > 20){
        console.log("Média maior que 20!");
    }else{
        console.log("Média menor ou igual a 20!");
    }
    
//5: Utilizando for , descubra qual o maior valor contido no array e imprima-o;
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let maior = 0;
    for(let i = 0; i < numbers.length; i += 1){
        
        if (numbers[i] > maior){ maior = numbers[i];}
    }
    console.log(maior);

//6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let qntImpar= 0;
    for(let i = 0; i < numbers.length; i += 1){
        
        if ((numbers[i] % 2) == 1){ qntImpar += 1;}
    }
    if (qntImpar > 0){
        console.log(qntImpar);
    }else{
        console.log("Nenhum valor ímpar encontrado!");
    }
    
//7: Utilizando for , descubra qual o menor valor contido no array e imprima-o;
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let menor = numbers[0];
    for(let i = 0; i < numbers.length; i += 1){
        
        if (numbers[i] < menor){ menor = numbers[i];}
    }
    console.log(menor);
//8: Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
    let array = [];
    for(let i = 1; i <=25; i += 1){
        array.push(i * 2)
    } 
    console.log(array);
//9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

    let array = [];
    for(let i = 1; i <=25; i += 1){
        array.push(i * 2)
    } 
    for(let i = 0 ; i < array.length; i += 1){
        array[i] = (array[i] / 2);
    } 
    console.log(array);

//Bonus:

//Organiza em ordem crescente:

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    
    for (let index = 1; index < numbers.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            if (numbers[index] < numbers[secondIndex]) {
                let position = numbers[index];
                numbers[index] = numbers[secondIndex];
                numbers[secondIndex] = position;
            }
        }
    }
    for (let number of numbers){
        console.log(number);
    }

//Organiza em ordem decrescente:

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    
        for (let index = 1; index < numbers.length; index += 1) {
            for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
                if (numbers[index] > numbers[secondIndex]) {
                    let position = numbers[index];
                    numbers[index] = numbers[secondIndex];
                    numbers[secondIndex] = position;
                }
            }
         }
        for (let number of numbers){
            console.log(number);
        }

//Novo Array multiplicado pelo seguinte com final multiplicado por 2:

    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    let numbers2 = [];
    
    for (let i = 0; i < numbers.length; i += 1) {
        if (i+1 != numbers.length){
            numbers2.push(numbers[i] * numbers[i+1]);
        }else{
            numbers2.push(numbers[i] * 2);
        }
       
    }
    for (let number of numbers2){
       console.log(number);
    }