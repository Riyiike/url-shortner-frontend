const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-password');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        document.querySelector('.errorMsg').textContent = "Nope.. Try again!";

    } else {
        document.querySelector('.errorMsg').textContent = '';
    }

    if (emailValue === '') {
        document.querySelector('.errorMsg').textContent = "Nope.. Try again!";

    } else {
        document.querySelector('.errorMsg').textContent = '';
    }

}