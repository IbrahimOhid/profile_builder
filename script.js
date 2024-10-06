// Selector
const form = document.querySelector("form");
const nameField = document.querySelector("#name");
const nameMsgElm = document.querySelector("#nameMsg");
const userNameField = document.querySelector("#userName");
const emailField = document.querySelector("#email");
const mobileNumberField = document.querySelector("#mobileNumber");
const facebookLinkField = document.querySelector("#facebookLink");
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirmPassword");

// showMessage
function showMessage(msg, action=danger) {
  const textMsg = `<small class='text-${action}>${msg}</small>`;
  nameMsgElm.insertAdjacentHTML('afterbegin', textMsg);
}

// name input
function nameInput() {
  const name = nameField.value;
  const rexName = /^[a-z]{3,10}\s[a-z]{3,10}$/i;
  if (!rexName.test(name)) {
    showMessage("Please insert a valid name.", 'danger');
  } else {
    showMessage(msg);
  }
}

function handelForm(e) {
  e.preventDefault();
  nameInput();
}

form.addEventListener("submit", handelForm);
