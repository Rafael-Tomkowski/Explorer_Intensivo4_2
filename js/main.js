
//1
alert('hello world');


//2
function verificarSomaNumerica(valor1, valor2) {
  // Calcula a soma dos valores
  var soma = valor1 + valor2;
  alert("O resultado é: " + soma);

//3
  // Verifica se a soma é um número
  if (typeof soma === 'number' && !isNaN(soma)) {
    return true; // A soma é um número
  } else {
    return false; // A soma não é um número
  }
}

// Solicita ao usuário dois valores usando o prompt
var valor1 = prompt("Digite o primeiro valor:");
var valor2 = prompt("Digite o segundo valor:");

// Converte os valores de string para número
valor1 = Number(valor1);
valor2 = Number(valor2);

// Verifica se a soma é um número
var eNumerica = verificarSomaNumerica(valor1, valor2);

// Exibe o resultado da verificação
if (eNumerica) {
  alert("A soma dos valores é um número!");
} else {
  alert("A soma dos valores não é um número!");
}

//4
var valor3 = "string"

if(typeof valor3 === 'string'){
  alert("É uma string");
} else{
  alert("Não é uma string");
}


//5
var valor4 = true

if (typeof valor4 === 'boolean') {
  alert("É do tipo booleano");
} else {
  alert("Não é um booleano");
}

//6
var valor5 = 20;
var valor6 = 10;

valor5 = Number(valor5);
valor6 = Number(valor6);

sub = (valor5 - valor6);
alert(sub);

//7
var valor7 = 20;
var valor8 = 10;

valor7 = Number(valor5);
valor8 = Number(valor6);

mult = (valor7 * valor8);
alert(mult);

//8
var valor9 = 20;
var valor10 = 10;

valor7 = Number(valor9);
valor8 = Number(valor10);

div = (valor9 / valor10);
alert(div);

//9
var valor9 = 9
valor9 = Number(valor9);

// Verifica se o valor é par
if (valor9 % 2 === 0) {
  alert("O valor é par!");
} else {
  alert("O valor não é par!");
}

//10
var valor11 = 10

valor11 = Number(valor11);

// Verifica se o valor é par
if (valor11 % 2 != 0) {
  alert("O valor é ímpar");
} else {
  alert("O valor não é ímpar!");
}




