//Arrow function  - flecha =>

//1ª forma - declaração
//2ª forma - expressão de função - anônima
//3ª forma - arrow


//arrow veio junto ES6 2015 - não pode ser nomeada
const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

console.log(soma(3,4));

//Arrow function com + de 1 linha de instrução - precisa {}
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "somente números de 1 a 9"
    }else{
        return num1 + num2;
    }
}

console.log(somaNumerosPequenos(11,2));