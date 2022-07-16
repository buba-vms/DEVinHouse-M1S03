// 3 - Crie uma função que recebe um array de números e retorna a quantidade de números pares e a quantidade de números ímpares.
// Em seguida imprima na tela uma string informando a quantidade de valores informados, os ímpares e os pares
// (ex: A quantidade informada foi _, a de valores pares foi _, e a de valores ímpares foi )

console.log('teste 1');
analisarParImpar([2, 2, 2, 2, 2, 2]);
console.log('teste 2');
analisarParImpar([5, 5, 5, 5, 5, 5]);
console.log('teste 3');
analisarParImpar([5, '', 5, 2, 2, 2, 4, 3]);
console.log('teste 4');
console.log(verificarPar([2, 2, 2, 2, 2, 2, 2, 2]));
console.log('teste 5');
console.log(verificarImpar([2, 2, 2, 2, 2, 2, 2, 2]));
console.log('teste 6');
console.log(verificarPar(2));
console.log('teste 7');
console.log(verificarImpar(3));
console.log('teste 8');
analisarParImpar(['a', 'b', 'c', 'd']);

function analisarParImpar(nums) {
  // invoca função para ver pares
  pares = verificarPar(nums);
  // invoca função para ver impares
  impares = verificarImpar(nums);
  invalido = verificarInvalido(nums);
  if (invalido > 0) {
    console.log(
      `A quantidade informada foi ${nums.length}, A quantidade de valores pares foi ${pares} e a quantidade de valroes impares foi ${impares}, a quantidade de valores invalidos foi ${invalido}`
    );
  }
  console.log(
    `A quantidade informada foi ${nums.length}, A quantidade de valores pares foi ${pares} e a quantidade de valroes impares foi ${impares}`
  );
}

function verificarPar(nums) {
  let pares = 0;
  if (!isNaN(nums)) {
    nums = [nums];
  }
  nums.forEach((num) => {
    if (num % 2 === 0) {
      pares++;
    }
  });
  return pares;
}

function verificarImpar(nums) {
  let impares = 0;
  if (!isNaN(nums)) {
    nums = [nums];
  }
  nums.forEach((num) => {
    if (num % 2 === 1) {
      impares++;
    }
  });
  return impares;
}

function verificarInvalido(nums) {
  let invalido = 0;
  if (!isNaN(nums)) {
    nums = [nums];
  }
  nums.forEach((num) => {
    if (num % 2 !== 1 && num % 2 !== 0) {
      invalido++;
    }
  });
  return invalido;
}
