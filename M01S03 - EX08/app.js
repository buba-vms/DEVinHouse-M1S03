const mensagem = document.querySelector('#mensagem');

const btns = document.querySelectorAll('.btn');

const resposta = document.querySelector('.resposta');

btns.forEach(function (btn) {
  let texto = '';
  btn.addEventListener('click', function () {
    texto = mensagem.value;
    if (btn.classList.contains('adicionar')) {
      createMessage(texto);
    }
    if (btn.classList.contains('salvar')) {
      saveMessage(texto);
    }
    if (btn.classList.contains('mostrar')) {
      createMessageFromLocalStorage();
    }
  });
});

function createP(texto) {
  let p = document.createElement('p');
  p.innerText = texto;
  return p;
}

function createMessage(texto) {
  resposta.innerHTML = '';
  resposta.append(createP(texto));
}

function saveMessage(texto) {
  if (texto.length <= 0) {
    window.alert('O campo de mensagem está vazio');
    return;
  }
  localStorage.setItem('mensagem', JSON.stringify(texto));
}

function createMessageFromLocalStorage() {
  let savedMessage = JSON.parse(localStorage.getItem('mensagem'));
  createMessage(savedMessage);
}
