// Exercicio 1
const name = "Thiago";
const birthCity = "Cachoeira Paulista";
let birthYear = 1992;

console.log(name);
console.log(birthCity);
console.log(birthYear);

// Exercicio 2
var base = 5;
var altura = 8;
var area = base * altura;
console.log(area);

var perimetro = base + altura + base + altura; // 4 lados de um retangulo
console.log(perimetro);

// Exercicio 3

var nota = 90;

if (nota >= 80){
    console.log("Congratulations, você vai aprovado(a)!");
}else if (nota < 80 && nota >= 60){
    console.log("Vocẽ está na nossa lista de espera.");
}else{
    console.log("Você foi reprovado(a)!");
}

//Exericicio 4
var status = "aprovado"
switch (status){
   case ("aprovado"):
       console.log("Aprovado");
       break;
   case ("lista"):
       console.log("Lista");
       break;
   case ("reprovado"):
       console.log("Reprovado");
       break;
   default:
       console.log("Não se aplica");
      break;
}

// Agora na pratica

// 1:

let a = 5;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2:

let a = 5;
let b = 10;

if (a >= b){
    console.log("Maior" + a);
}else{
    console.log("Maior " + b);
}

//3: 

let a = 5;
let b = 10;
let c = 15;

if(a >= b && a >= c){
    console.log("A é o maior: "+ a)
}else if(b > a && b > c){
    console.log("B é o maior: "+ b)
}else{
    console.log("C é o maior: "+ c)
}

//4:

let d = 1;

if(d > 0){
    console.log("Numero Positivo")
}else if(d < 0){
    console.log("Numero Negativo")
}else{
    console.log("Numero Zero")
}

//5:

let a = 60;
let b = 70;
let c = 50;
let soma = a + b + c;
if(soma == 180){
    console.log("Triangulo!")
}else{
    console.log("Inválido!")
}

//6:

let peca = "REI";

peca = peca.toLowerCase();
console.log(peca);
switch(peca){
    case "peao":
        console.log("Só podem se mover uma casa ou duas casas para frente.");
        break;
    case "torre":
        console.log("Se movimentam em linha reta ou para os lados, por todas as casas.");
        break;
    case "cavalo":
        console.log("Se movimenta em L.");
        break;
    case "bispo":
        console.log("Se movimenta somente na diagonal por todo o tabuleiro.");
        break;
    case "rainha":
        console.log("Pode se movimentar para qualquer lado e direção.");
        break;
    case "rei":
        console.log("Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.");
        break;
}

//7:

let nota = 90;

    if(nota >=90){
        console.log("Sua nota é: A");
    }else if(nota >=80 && nota < 90){
        console.log("Sua nota é: B");
    }else if(nota >=70 && nota < 80){
        console.log("Sua nota é: C");
    }else if(nota >=60 && nota < 70){
        console.log("Sua nota é: D");
    }else if(nota >=50 && nota < 60){
        console.log("Sua nota é: E");
    }else if(nota < 50){
        console.log("Sua nota é: F");
    }else {
        console.log("Valor invalido!");
    }

//8:

let a = ((5 % 2)==0);
let b = ((10 % 2)==0);
let c = ((10 % 2)==0);

    if(a == true || b == true || c == true){
        console.log("True");
    }else{
        console.log("False");
    }

//9:

let a = ((5 % 2)==0);
let b = ((10 % 2)==0);
let c = ((10 % 2)==0);

    if(a == false || b == false || c == false){
        console.log("True");
    }else{
        console.log("False");
    }
//10:

let custo = 25;
let venda = 50;
let imposto = 20;

let custoTotal = custo + (custo * imposto/100);
let lucro = venda - custoTotal;

    if(custo > 0 && venda > 0){
        console.log("Lucro de mil vendas: " + (20 * 1000));
    }else{
        console.log("Erro: Entrada menor que zero!")
    }

//11:

let salarioBruto = 3000;
let impINSS = (salarioBruto * 11) /100;
let salarioBase = salarioBruto - impINSS;
let alqRenda = (salarioBase * 7.5) /100;
let parcelaReduzirRenda = 142.80;
let impRenda = alqRenda - parcelaReduzirRenda;
let salarioLiquido = salarioBase - impRenda;

console.log(salarioLiquido);