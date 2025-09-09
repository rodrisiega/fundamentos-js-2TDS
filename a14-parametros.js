function soma(numero1, numero2){
    return numero1 + numero2;
}

console.log(soma(245, 2));
console.log(soma(-5, 35));
console.log(soma(-500, 60));

//parâmetros x argumentos

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Rodrigo"));

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)));