//Declaração de função
function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param");


//expressão de função - consideradas anônimas
const soma = function(num1, num2) {return num1 + num2}
console.log(soma(1,4));



//diferença principal ???
console.log(apresentar()); //na declaração de função é possível chamar a função antes de criá-la, na expressão não.

function apresentar(){
    return "olá";
}