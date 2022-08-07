import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name = email]');
const messageInput = form.querySelector('[name = message]');

let formData = {};

//Заполняем поля из кеша, если есть
if (localStorage.getItem('feedback-form-state')) {
  const { email, message } = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  emailInput.value = email;
  messageInput.value = message;
}

function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

form.addEventListener(
  'input',
  throttle(e => {
    onTextInput(e);
  }, 500)
);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  if (emailInput.value && messageInput.value) {
    //если оба поля полные
    console.log(formData);
    localStorage.removeItem('feedback-form-state');

    form.reset();

    for (const string in formData) delete formData[string]; //очищаем от элементов объект formData
  }
}
