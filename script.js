// 1=> all id selected
// 2=> form add Event listener
// 3=> form addEventListener added handelForm
// 2=> received input 

// Selector 1 1️⃣
const form = document.querySelector("form");
const nameField = document.querySelector("#name");
const nameMsgElm = document.querySelector("#nameMsg");
const userNameField = document.querySelector("#userName");
const emailField = document.querySelector("#email");
const mobileNumberField = document.querySelector("#mobileNumber");
const websiteLinkField = document.querySelector("#websiteLink");
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirmPassword");



// receive input 4️⃣
function receiveInputs(){
  const name = nameField.value;
  const userName = userNameField.value;
  const email = emailField.value;
  const mobileNumber = mobileNumberField.value;
  const website = websiteLinkField.value;
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;
  const allInputs = {
    name,
    userName,
    email,
    mobileNumber,
    website,
    password,
    confirmPassword,
  }
  return allInputs;
}


// form addEventListener 2️⃣
form.addEventListener("submit", handelForm);

// form addEventListener added handelForm 3️⃣
function handelForm(e) {
  e.preventDefault();
  receiveInputs()
}


