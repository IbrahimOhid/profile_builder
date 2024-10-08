// 1=> all id selected
// 2=> form add Event listener
// 3=> form addEventListener added handelForm
// 2=> received input 

// Selector 1 1️⃣
const form = document.querySelector("form");
const nameField = document.querySelector("#name");
const nameMsgElm = document.querySelector("#nameMsg");
const userNameField = document.querySelector("#userName");
const userMsgElm = document.querySelector("#userMsg");
const emailField = document.querySelector("#email");
const emailMsgElm = document.querySelector('#emailMsg');
const mobileNumberField = document.querySelector("#mobileNumber");
const mobileNumberMsgElm = document.querySelector('#mobileNumberMsg')
const websiteLinkField = document.querySelector("#websiteLink");
const websiteMsgElm = document.querySelector('#websiteMsg');
const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirmPassword");
let isValid = true;


//common show message 7️⃣
function showMessage(msg = "Something is wrong", color = 'red', target) {
  target.style.color = color;
  target.textContent = msg;
}

// website link validation 1️⃣1️⃣
function validatedWebsiteLink(){
  const websiteInput = websiteLinkField.value;
  const regWebsiteLink = /(https:\/\/|http:\/\/|www\.)?[a-z]{3,20}\.?[a-z]{3,10}\.[a-z]{3,10}/gi;
  if(!regWebsiteLink.test(websiteInput)){
    showMessage('Please insert a valid website link in the specific format (https://ibrahim.com, www.ibrahim.com, ibrahim.com, http://ibrahim.gov.com)', 'red', websiteMsgElm);
  }else{
    showMessage('Ex: https://ibrahim.com, www.ibrahim.com, ibrahim.com ✔', 'green', websiteMsgElm)
  }
}

// Mobile Number Validation 🔟
function validateMobileNumber(){
  const mobileNumberInput = mobileNumberField.value;
  const regMobileNumber = /\+?(88)?0?\w{3}-?\w{3}-?\w{4}/g
  if(!regMobileNumber.test(mobileNumberInput)){
    showMessage('Please insert a valid bangladeshi phone number in the specific format (+8801222222222, 01222222222, 01222-222222)', 'red', mobileNumberMsgElm)
    isValid = false;
  }else{
    showMessage('+8801744-442244 ✔', 'green', mobileNumberMsgElm);
  }
}

// email validation 9️⃣
function validatedEmail(){
  const emailInput = emailField.value;
  const regEmail = /^\w{3,20}\@\w{3,20}\.\w{3,7}$/gi;
  if(!regEmail.test(emailInput)){
    showMessage('Please insert a valid email', 'red', emailMsgElm);
    isValid = false;
  }else{
    showMessage('Ex: ibrahimohid01@gmail.com ✔', 'green', emailMsgElm);
  }
}

// user name validation 8️⃣
function validatedUserName(){
  const userNameInput = userNameField.value;
  const regExpUserName = /^[a-z]{3,10}\_[0-9]{2,5}$/i;
  if(!regExpUserName.test(userNameInput)){
    showMessage('Please insert a valid username', 'red', userMsgElm);
    isValid = false;
  }else{
    showMessage('Ex: ibrahim_33 ✔', 'green', userMsgElm);
  }
}

// name validation 6️⃣
function validatedName() {
  const nameInput = nameField.value;
  const regExpName = /^[a-z]{3,15}\s?[a-z\s]+$/i;
  if (!regExpName.test(nameInput)) {
    showMessage('Please insert a valid name', 'red', nameMsgElm);
    isValid = false;
  } else {
    showMessage('Ex: Mohammad Ibrahim Ohid ✔', 'green', nameMsgElm);
  }
  return isValid;
}

// validation input 5️⃣
function validationInput(receivedData) {
  const { name, userName, email, mobileNumber, website, password, confirmPassword } = receivedData;
  validatedName(name); //-> 6
  validatedUserName(userName); //-> 8
  validatedEmail(email); //-> 9
  validateMobileNumber(mobileNumber); //-> 10
  validatedWebsiteLink(website); //-> 11

  return isValid;
}

// receive input 4️⃣
function receiveInputs() {
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
    confirmPassword
  }
  return allInputs;
}

// form addEventListener added handelForm function 3️⃣
function handelForm(e) {
  e.preventDefault();
  const receivedData = receiveInputs(); //-> 4
  validationInput(receivedData); //-> 5
}

// form addEventListener 2️⃣
form.addEventListener("submit", handelForm);
