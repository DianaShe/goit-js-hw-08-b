import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

populateInputData();


function onInputChange(event) {
    const formData = {};
    const storedData = localStorage.getItem("feedback-form-state");
    
    if (storedData) {
        formData.email = form.elements.email.value;
        formData.message = form.elements.message.value;
    }
    
    formData[event.target.name] = event.target.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onFormSubmit(event) {
    event.preventDefault();
    if (form.elements.email.value === "" || form.elements.message.value === "") {
        return;
    }
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    event.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}


function populateInputData() {
    const savedData = localStorage.getItem("feedback-form-state");

    if (savedData && JSON.parse(savedData).email) {
        form.elements.email.value = JSON.parse(savedData).email;
    };

    if (savedData && JSON.parse(savedData).message) {
        form.elements.message.value = JSON.parse(savedData).message;
    } 
   
}
