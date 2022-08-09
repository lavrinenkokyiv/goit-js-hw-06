const loginFormEl = document.querySelector('form.login-form')
const emailEl = loginFormEl.querySelector('[type = "email"]')
const passwordEl = loginFormEl.querySelector('[type = "password"]')

loginFormEl.addEventListener('submit', setOutput)
function setOutput(evt) {
    evt.preventDefault();
    const {
        elements: {email, password},
    } = evt.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert ('Заповніть всі поля');
    }
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    evt.currentTarget.reset();}
