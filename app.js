alert('Boas vindas ao jogo do numero secreto);
let numeroSecreto = 50;
console.log('numeroSecreto')
let chute = prompt('Escolha um número entre 1 e 50');

// se chute for igual ao número secreto
if (chute == numeroSecreto) {
alert('Isso ai! Você descobriu o número secreto (5)');
} else {
alert('Você errou :(')
}