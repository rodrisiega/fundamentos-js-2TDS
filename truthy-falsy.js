//boolean
const usuarioLogado = true;
const contaPaga = false;

//truthy ou falsy
//0 => false
//1 => true

console.log(0 == false);
console.log(""== false);
console.log(1 == true);


//null tipo de dado que representa o vazio "nada"
//undefined var declarada mas sem valor

let minhaVar; //undefined
let varNull = null;

console.log(minhaVar);
console.log(varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof minhaVar);
console.log(typeof varNull);   //aparece como objeto por ser um bug do js deveria ser null
