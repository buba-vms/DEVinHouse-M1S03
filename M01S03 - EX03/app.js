// 3 - Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
// Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares
// (ex: A quantidade informada foi _, a de valores pares foi _, e a de valores ímpares foi )

analisarNumeros([2, 2, 2, 2, 2, 2]);
analisarNumeros([5, 5, 5, 5, 5, 5]);
analisarNumeros([5, '', 5, 2, 2, 2, 4, 3]);

function analisarNumeros(nums) {
  pares = verificarPar(nums);
  impares = verificarImpar(nums);
  console.log(
    `A quantidade de valores pares foi ${pares} e a quantidade de valroes impares foi ${impares}`
  );
}

function verificarPar(nums) {
  let pares = 0;
  nums.forEach((num) => {
    if (num % 2 === 0) {
      pares++;
    }
  });
  return pares;
}

function verificarImpar(nums) {
  let impares = 0;
  nums.forEach((num) => {
    if (num % 2 === 1) {
      impares++;
    }
  });
  return impares;
}
