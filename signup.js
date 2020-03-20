const email = document.getElementById('email');
const password = document.getElementById('password');
const username = document.getElementById('username');
const confirm_password = document.getElementById('error');

form.addEventListener('submit', e => {
  let messages = [];
  if (username.value === '' || username.value == null) {
    username.style.border = '1px solid #5E6E66';
    username_error.innerHTML = '';
    return true;
    /*window.alert('Please enter a username');
         name.focus();
         return false;*/
  }

  if (email.value === '' || email.value == null) {
    messages.push('Email is required');
    email.focus();
    return false;
  }

  if (password.value.length <= 5) {
    messages.push('password must be longer than 5 characters');
    password.focus();
    return false;
  }

  if (password.value.length > 12) {
    messages.push('password must be less than 12 characters');
    password.focus();
    return false;
  }
  return true;
});
