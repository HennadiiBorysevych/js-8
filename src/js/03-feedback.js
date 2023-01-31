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

const feedbackFormInfo = localStorage.getItem(FEEDBACK_STORAGE);
const feedbackFormInfoParsed = JSON.parse(feedbackFormInfo);

formSubmit.addEventListener('submit', event => {
  event.preventDefault();
  let email = feedbackFormInfoParsed.email;
  let message = feedbackFormInfoParsed.message;

  console.log({ email, message });
  inPut.value = '';
  textArea.value = '';
});

inPut.value = feedbackFormInfoParsed.email;
textArea.value = feedbackFormInfoParsed.message;

localStorage.removeItem('feedback-form-state');
