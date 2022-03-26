// 1
let array = [...Array(10)].map(el => Math.floor(Math.random() * 10) + 1);
let arrayDecr = array.sort((a, b) => b - a);
console.log(arrayDecr);

// 2
let troco = (total, valorRecebido) => `R$ ${total - valorRecebido}`;
console.log(troco(29.34, 50));

// 3
let remuneracao = (salario, comissao) =>
  `Salário: R$ ${salario}
   Comissão: R$ ${(comissao * 0.15).toFixed(2)}
   Total: R$ ${(comissao * 0.15 + salario).toFixed(2)}`;
console.log(remuneracao(2500, 950.34));
