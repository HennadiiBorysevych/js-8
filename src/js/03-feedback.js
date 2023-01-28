const throttle = require('lodash.throttle');

const FEEDBACK_STORAGE = 'feedback-form-state';
const inPut = document.querySelector('input');
const formSubmit = document.querySelector('.feedback-form');
const textArea = document.querySelector('textarea');

function handelStorageSection(event) {
  const formData = {
    email: inPut.value,
    message: textArea.value,
  };

  localStorage.setItem(FEEDBACK_STORAGE, JSON.stringify(formData));
}

formSubmit.addEventListener('input', throttle(handelStorageSection, 500));

formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  let email = inPut.value;
  let message = textArea.value;

  console.log({ email, message });

  localStorage.removeItem('feedback-form-state');
});
