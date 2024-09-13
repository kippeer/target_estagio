const readline = require('readline');

// Cria uma interface para entrada e saída no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function isFibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0 || num === 1) {
    return `O número ${num} pertence à sequência de Fibonacci.`;
  }

  while (b <= num) {
    let temp = a + b;
    a = b;
    b = temp;

    if (b === num) {
      return `O número ${num} pertence à sequência de Fibonacci.`;
    }
  }

  return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

// Pede ao usuário para digitar o número
rl.question('Digite um número: ', (input) => {
  const numero = parseInt(input, 10);

  // Verifica se a entrada é um número válido
  if (isNaN(numero)) {
    console.log('Por favor, insira um número válido.');
  } else {
    console.log(isFibonacci(numero));
  }

  // Fecha a interface de leitura
  rl.close();
});
