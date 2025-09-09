const nome = "Rodri";
const idade = 2025-1984;
const cidadeDeNascimento = "Francisco Beltrão";

const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e nasci na cidade de " + cidadeDeNascimento;
console.log(apresentacao);

//template string com o acento de crase ``
const apresentacao2 = `Meu nome é ${nome}, minha idade é ${idade} e nasci na cidade de ${cidadeDeNascimento}`;
console.log(apresentacao2);