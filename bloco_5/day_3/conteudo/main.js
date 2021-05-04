const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

//Exercicio 2
function addTech (event){
    const techElement = document.querySelector('.tech');
    techElement.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';  
}

divUm.addEventListener('click', addTech);
divDois.addEventListener('click', addTech);
divTres.addEventListener('click', addTech);


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
divDois.addEventListener('dblclick', resetText);
divTres.addEventListener('dblclick', resetText);

//Exercicio 3
input.addEventListener('keyup',function(event){
    const techClass = document.querySelector('.tech');
    techClass.innerText = event.target.value;
});

//Exercicio 4

myWebpage.addEventListener('dblclick', function() {
    window.location.assign('https://blog.betrybe.com/');
  });
//Exercicio 5

myWebpage.addEventListener('mouseover', function(event) {
    event.target.style.color = 'red';
  });

//Exercicio 6
myWebpage.addEventListener('mouseout', (event) => {
    event.target.style.color = 'unset';
  });
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.