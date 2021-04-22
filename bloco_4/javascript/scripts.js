// Exercicio 1
const name = "Thiago";
const birthCity = "Cachoeira Paulista";
let birthYear = 1992;

//console.log(name);
//console.log(birthCity);
//console.log(birthYear);

// Exercicio 2
var base = 5;
var altura = 8;
var area = base * altura;
//console.log(area);

var perimetro = base + altura + base + altura; // 4 lados de um retangulo
//console.log(perimetro);

// Exercicio 3

var nota = 90;

//if (nota >= 80){
//    console.log("Congratulations, você vai aprovado(a)!");
//}else if (nota < 80 && nota >= 60){
//    console.log("Vocẽ está na nossa lista de espera.");
//}else{
//    console.log("Você foi reprovado(a)!");
//}

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
//