// Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha:
// um campo de input do item um botão para criar um item na lista

const item = document.querySelector('#item');

const adicionar = document.querySelector('.adicionar');

const lista = document.querySelector('.lista');

const apagar = document.querySelector('.apagar');

adicionar.addEventListener('click', function () {
  lista.append(criarLista(item));
});

apagar.addEventListener('click', function () {
  lista.innerHTML = '';
});

function criarLista(item) {
  let li = document.createElement('li');
  li.textContent = item.value;
  return li;
}
