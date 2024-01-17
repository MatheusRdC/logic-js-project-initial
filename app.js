alert("Boas vindas ao jogo do número secreto!");
const maxNumber = 1000;
let number;
let secretNumber = parseInt(Math.random() * maxNumber + 1);
let attempts = 1;

while (number != secretNumber) {
  number = prompt(`Escolha um número de 1 a ${maxNumber}`);

  if (number == secretNumber) {
    break;
  } else {
    if (number < secretNumber) {
      alert(`O número secretro é maior que ${number}`);
    } else if (number > secretNumber) {
      alert(`O número secretro é menor que ${number}`);
    }
    attempts++;
  }
}

const attemptsText = attempts == 1 ? "tentativa" : "tentativas";

alert(
  `Isso aí! você descobriu o número secreto ${secretNumber} com ${attempts} ${attemptsText}!`
);
