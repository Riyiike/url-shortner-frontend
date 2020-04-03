const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //get the values from the inputs
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();


  if (emailValue === '') {
    document.querySelector('.errorMsg').textContent = "Nope.. Try again!";

  } else {
    document.querySelector('.errorMsg').textContent = '';
  }


}