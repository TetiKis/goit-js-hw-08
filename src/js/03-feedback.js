var throttle = require('lodash.throttle');


const emailForm = document.querySelector('.feedback-form');
const emailFormInput = emailForm.querySelector(`input[name="email"]`);
const messageFormInput = emailForm.querySelector(`textarea[name="message"]`);
const FORM_KEY = "feedback-form-state";

emailForm.addEventListener('submit', onFormSubmit);
emailForm.addEventListener('input', throttle(onTextareaInput, 500));
saveSubmitTextrea();



function onFormSubmit(evt) {
    evt.preventDefault();
    console.log({
		email: emailFormInput.value,
		message: messageFormInput.value
	});
    evt.currentTarget.reset();
    localStorage.removeItem(FORM_KEY);
};

function onTextareaInput() {
    const formObject = {
		email: emailFormInput.value,
		message: messageFormInput.value
	};
	localStorage.setItem(FORM_KEY, JSON.stringify(formObject));
	console.log(formObject);
}


function saveSubmitTextrea() {
    const savedMessage = localStorage.getItem(FORM_KEY);

    if (savedMessage) {
        const save = JSON.parse(savedMessage);
        emailFormInput.value = save.email;
        messageFormInput.value = save.message;
    }
}