const FormEl = document.querySelector(".login-form");

const submitForm = (event) => {
    const emailEl = event.target.elements.email.value;
    const passwordEl = event.target.elements.password.value;
    const object = { emailEl, passwordEl,};   
    
    event.preventDefault();
    if (emailEl === "" || passwordEl === "") {
    return alert("Заповніть всі поля");
    }
    console.log(object);
    return FormEl.reset();
};

FormEl.addEventListener("submit", submitForm);