//Funções

/*
let x = "";
console.log(x);
x = "oi";
*/

//1-Declaração da função
function imprimeTexto(texto){
    console.log(texto);
}

//2-Execução da função
//imprimeTexto("Rodrigo")
imprimeTexto(soma())  //passando uma função como parâmetro para outra função.

//Três formas de escrever funções
function soma(){
    return 2+2;
}

//console.log(soma());

/* OUTRAS FUNÇÕES
Math.round(): Faz o arredondamento (round em inglês) de um número de ponto flutuante para o inteiro mais próximo.
    ex: Math.round(4.3) retorna 4
Math.ceil(): Faz o arredondamento para o valor mais alto, também conhecido como teto (ceil em inglês).
    ex: Math.ceil(5.2) retorna 6
Math.floor(): Faz o arredondamento para o valor mais baixo, também conhecido como piso (floor em inglês).
    ex: Math.floor(5.2) retorna 5
Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
    ex: Math.trunc(4.8) retorna 4
Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.
    ex: Math.pow(4 , 2) retorna 4^2 = 16
Math.sqrt() : Retorna a raiz quadrada de um número.
    ex: Math.sqrt(64) retorna 8
Math.min(): Retorna o menor valor entre os argumentos.
    ex: Math.min(0, 150, 30, 20, -8, -200) retorna -200
Math.max(): Retorna o maior valor entre os argumentos.
    ex: Math.max(0, 150, 30, 20, -8, -200) retorna 150
Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.
    ex: Math.random() retorna 0.7456916270759015
*/