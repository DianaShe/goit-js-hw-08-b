import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

const formData = {};
const savedData = JSON.parse(localStorage.getItem("feedback-form-state"));
populateInputData();

function onInputChange(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(savedData);
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}

function populateInputData() {
    if (savedData && savedData.email) {
        form.elements.email.value = savedData.email;
    };

    if (savedData && savedData.message) {
        form.elements.message.value = savedData.message;
    } 
   
}
