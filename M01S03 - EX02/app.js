// Crie uma função nomeada que recebe um array de elementos, imprima cada um dos elementos e em seguida retorne a quantidade de elementos no array (seu tamanho).

function analisarArray(lista) {
  imprimirArray(lista);
  retornarQuantidadeArray(lista);
}

function imprimirArray(lista) {
  lista.forEach((element) => {
    console.log(element);
  });
}

function retornarQuantidadeArray(lista) {
  console.log(lista.length);
  return lista.length;
}

analisarArray([1, 3, 4, 5, 6]);

analisarArray(['e', 'd', 'c', 'b', 'a', 5]);
