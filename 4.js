const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Calcula o valor total mensal
  const valorTotal = Object.values(faturamentoPorEstado).reduce((total, valor) => total + valor, 0);
  
  // Calcula o percentual de representação de cada estado
  const percentualRepresentacao = Object.entries(faturamentoPorEstado).reduce((result, [estado, valor]) => {
    result[estado] = ((valor / valorTotal) * 100).toFixed(2) + '%';
    return result;
  }, {});
  
  // Exibe o percentual de representação
  console.log('Percentual de Representação de Cada Estado:');
  for (const [estado, percentual] of Object.entries(percentualRepresentacao)) {
    console.log(`${estado}: ${percentual}`);
  }
  