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
        form.elements[key].value = data[key] || '';
        formData[key] = data[key];
      }
    }
  }
}

getSavedData();

function onTextInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
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

  let a = e.currentTarget.elements;
  let flag = true;

  for (b of a) {
    if (b.nodeName === 'INPUT' || b.nodeName === 'TEXTAREA') {
      //проверяем тестовое ли поле (чтобы не кнопка или что-либо еще)
      if (!b.value) {
        //если поле пустое
        flag = false; //не даст submit форме сделать в следующем if()
        alert(`Fill field ${b.name}`);
        break;
      }
    }
  }
  if (flag) {
    console.log(formData);
    localStorage.removeItem(STORAGE_KEY);
    e.currentTarget.reset();
    formData = {};
  }
}
