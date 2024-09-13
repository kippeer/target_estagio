const fs = require('fs');

// Função para ler e processar os dados
const processarDados = (dados) => {
  // Calcula a soma dos valores e o número de dias com faturamento
  const { somaValores, diasComFaturamento } = dados.reduce((acc, dia) => {
    if (dia.valor > 0) {
      acc.somaValores += dia.valor;
      acc.diasComFaturamento += 1;
    }
    return acc;
  }, { somaValores: 0, diasComFaturamento: 0 });

  // Calcula a média mensal
  const mediaMensal = diasComFaturamento > 0 ? somaValores / diasComFaturamento : 0;

  // Conta o número de dias com faturamento superior à média mensal
  const diasAcimaDaMedia = dados.filter(dia => dia.valor > mediaMensal).length;

  // Encontra o menor e o maior valor de faturamento
  const menorValor = dados
    .filter(dia => dia.valor > 0)
    .reduce((min, dia) => dia.valor < min ? dia.valor : min, Infinity);

  const maiorValor = dados
    .filter(dia => dia.valor > 0)
    .reduce((max, dia) => dia.valor > max ? dia.valor : max, -Infinity);

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
};

// Lê o arquivo JSON e chama a função
fs.readFile('dados.json', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  const faturamento = JSON.parse(data);
  const resultados = processarDados(faturamento);

  console.log(`Menor valor de faturamento: ${resultados.menorValor}`);
  console.log(`Maior valor de faturamento: ${resultados.maiorValor}`);
  console.log(`Número de dias com faturamento superior à média mensal: ${resultados.diasAcimaDaMedia}`);
});
