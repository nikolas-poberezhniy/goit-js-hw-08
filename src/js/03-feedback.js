import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('[name = email]');
const messageInput = form.querySelector('[name = message]');
const STORAGE_KEY = 'feedback-form-state';
let formData = {};

//Заполняем поля из кеша, если есть
function getSavedData() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        form.querySelector(`[name = ${key}]`).value = data[key] || '';
        formData[key] = data[key];
      }
    }
  }
}

getSavedData();

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
