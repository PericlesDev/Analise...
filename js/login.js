const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login__form');

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
  button.removeAttribute('disabled'); /* Ativa o botão */
 return;
}

    button.setAttribute('disabled', ''); /* Desabilita o botão */
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = 'pages/game.html';

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);