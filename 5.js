// Função para inverter os caracteres de uma string
function inverterString(str) {
    let resultado = '';
    
    // Percorre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
      resultado += str[i];
    }
    
    return resultado;
  }
  
  // Exemplo de uso com uma string definida no código
  const stringOriginal = 'Hello, World!';
  const stringInvertida = inverterString(stringOriginal);
  
  console.log(`String Original: ${stringOriginal}`);
  console.log(`String Invertida: ${stringInvertida}`);
  
  // Exemplo de uso com uma string informada pelo usuário
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Digite uma string para inverter: ', (entrada) => {
    console.log(`String Original: ${entrada}`);
    console.log(`String Invertida: ${inverterString(entrada)}`);
    readline.close();
  });
  