alert('Boas vindas ao jogo do terror');
let numeroSecreto = 66;
console.log('numeroSecreto')
let chute = prompt('Escolha um número entre 1 e 100');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
alert('Isso ai! Você descobriu o número secreto (66)');
} else {
alert('Você errou :(')
}