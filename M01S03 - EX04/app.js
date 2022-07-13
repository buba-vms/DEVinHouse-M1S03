// Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS)
// 5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).

const caixaDeTexto = document.querySelectorAll('.container');
console.log(caixaDeTexto);

window.addEventListener('DOMContentLoaded', function () {
  caixaDeTexto.forEach(function (caixa) {
    caixa.innerHTML = '<p>ola tudo bem com vc</p>';
  });
  // document.body.innerHTML = '<p>ola tudo bem com vc</p>';
});
