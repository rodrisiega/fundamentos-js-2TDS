//tipo de dados
//booleanos

//conversão implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);  //converte o número em string e compara os dois
// == compara o valor
// === compara o valor e o tipo

console.log(numero + numeroString);  //quando mistura String e número ele concatena.



//conversão explícita
//Number()
//String()
console.log(numero + Number(numeroString));

const numeroString2 = "456a";
console.log(numero + Number(numeroString2)); //erro de conversão NaN pois "456a" não pode ser convertido.