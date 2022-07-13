// Crie uma função não nomeada que recebe um número e devolva uma string dizendo se é par ou ímpar.

const InformeParOuImpar = function (num) {
  if (num % 2 === 0) {
    return 'par';
  } else if (num % 2 === 1) {
    return 'impar';
  } else {
    return 'inválido';
  }
};

console.log(InformeParOuImpar(5));
console.log(InformeParOuImpar(9));
console.log(InformeParOuImpar(23));
console.log(InformeParOuImpar(24));
console.log(InformeParOuImpar());
console.log(InformeParOuImpar(`aaa`));
