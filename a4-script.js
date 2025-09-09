//var - funciona em qualquer parte do código
/*
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area; //o js vai ler o programa e declarar as variáveis antes de executar o programa, por isso pode ser declarada depois de usada.

*/
//let
/*
let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area; //let só consegue utilizar depois que declara

if (forma === 'retângulo'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento)/2;
}

console.log(area);
*/

//const é uma constante, não pode alterar
const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
//const area;
let area;

if (forma === 'quadrado'){
    area = altura * comprimento;
}else{
    area = (altura * comprimento)/2;
}

console.log(area);