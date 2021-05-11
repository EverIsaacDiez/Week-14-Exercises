//Getting elements by ID
var emailInput = document.getElementById('loginInputEmail');
var passwordInput = document.getElementById('loginInputPassword');
var loginButton = document.getElementById('loginButton');
var infoDiv = document.getElementById('login-validation-div');
var infoDivMail = document.getElementById('mail-validation-div');
var infoDivPassword = document.getElementById('password-validation-div');

// Getting elements from tag
var formExistence = document.getElementsByTagName('form');
var labelsQantity = document.getElementsByTagName('Label');
var inputsQantity = document.getElementsByTagName('input');
var buttonsQantity = document.getElementsByTagName('button');

// Variables to send validation messages
var errorMailMessageBlur = '';
var errorPasswordMessageBlur = '';
var errorMessagesValidationsOk = '';

// Add events to elements
emailInput.addEventListener('blur', validateBlurEmailText);
passwordInput.addEventListener('blur', validateBlurPasswordText);
emailInput.addEventListener('focus', validateFocusEmailText);
passwordInput.addEventListener('focus', validateFocusPasswordText);
loginButton.addEventListener('click', validationsOk);
loginButton.addEventListener('click', handleLogin);

// Validations of email (blur event)
function validateBlurEmailText() {
    if (emailInput.value === '' || emailInput.value === null) {
        errorMailMessageBlur = "Email field can't be empty";
        infoDivMail.style.display = 'block';
        infoDivMail.style.color = 'red';
        infoDivMail.innerText = errorMailMessageBlur;
        return;
    }
    if (!isEmail(emailInput.value)) {
        errorMailMessageBlur = 'Email is invalid';
        infoDivMail.style.display = 'block';
        infoDivMail.style.color = 'red';
        infoDivMail.innerText = errorMailMessageBlur;
        return;
    }
}

// Validations of email (focus event)
function validateFocusEmailText() {
    if (emailInput.value === '' || emailInput.value === null) {
        infoDivMail.style.display = 'none';
        return;
    }
    if (!isEmail(emailInput.value)) {
        infoDivMail.style.display = 'none';
        return;
    }
}

// Validations of password (blur event)
function validateBlurPasswordText() {
    if (passwordInput.value === '' || passwordInput.value === null) {
        errorPasswordMessageBlur = "Password field can't be empty";
        infoDivPassword.style.display = 'block';
        infoDivPassword.style.color = 'red';
        infoDivPassword.innerText = errorPasswordMessageBlur;
        return;
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {
        errorPasswordMessageBlur = 'Password must contain at least one lowercase letter';
        infoDivPassword.style.display = 'block';
        infoDivPassword.style.color = 'red';
        infoDivPassword.innerText = errorPasswordMessageBlur;
        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {
        errorPasswordMessageBlur = 'Password must contain at least one uppercase letter';
        infoDivPassword.style.display = 'block';
        infoDivPassword.style.color = 'red';
        infoDivPassword.innerText = errorPasswordMessageBlur;
        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {
        errorPasswordMessageBlur = 'Password must contain at least one number ';
        infoDivPassword.style.display = 'block';
        infoDivPassword.style.color = 'red';
        infoDivPassword.innerText = errorPasswordMessageBlur;
        return;
    }
    if (passwordInput.value.length < 8) {
        errorPasswordMessageBlur = 'Password must have at least 8 characters';
        infoDivPassword.style.display = 'block';
        infoDivPassword.style.color = 'red';
        infoDivPassword.innerText = errorPasswordMessageBlur;
        return;
    }
}

// Validations of password (focus event)
function validateFocusPasswordText() {
    if (passwordInput.value === '' || passwordInput.value === null) {
        infoDivPassword.style.display = 'none';
        return;
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {
        infoDivPassword.style.display = 'none';
        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {
        infoDivPassword.style.display = 'none';
        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {
        infoDivPassword.style.display = 'none';
        return;
    }
    if (passwordInput.value.length >= 8) {
        infoDivPassword.style.display = 'none';
        return;
    }
}

// Validations on "login" button
function validationsOk() {
    // Validate if in the HTML document exist a form
    if (formExistence.length === 0) {
        errorMessages = "Form tag doesn't exist in the html document";
        infoDiv.style.display = 'block';
        infoDiv.style.color = 'red';
        infoDiv.innerText = errorMessages;
        return;
    }

    // Validate the qantity of labels tags are in the document
    if (labelsQantity.length !== 2) {
        errorMessages = "There aren't label tags in the document";
        infoDiv.style.display = 'block';
        infoDiv.style.color = 'red';
        infoDiv.innerText = errorMessages;
        return;
    }

    // Validate the qantity of inputs tags are in the document
    if (inputsQantity.length !== 2) {
        errorMessages = "there aren't inputs tags in the document";
        infoDiv.style.display = 'block';
        infoDiv.style.color = 'red';
        infoDiv.innerText = errorMessages;
        return;
    }

    // Validate the qantity of buttons are in the document
    if (buttonsQantity.value === 2) {
        errorMessages = "there aren't the enoght qantity of button tags in the document";
        infoDiv.style.display = 'block';
        infoDiv.style.color = 'red';
        infoDiv.innerText = errorMessages;
        return;
    }

    // All validations of inputs
    if (emailInput.value === '' || emailInput.value === null) {
        return;
    }
    if (!isEmail(emailInput.value)) {
        return;
    }
    if (passwordInput.value === '' || passwordInput.value === null) {
        return;
    }
    if (passwordInput.value.search(/[a-z]/) < 0) {
        return;
    }
    if (passwordInput.value.search(/[A-Z]/) < 0) {
        return;
    }
    if (passwordInput.value.search(/[0-9]/) < 0) {
        return;
    }
    if (passwordInput.value.length < 8) {
        return;
    } else {
        errorMessagesValidationsOk = `Logged Succesfully. Your account data is: ${
            emailInput.value
        } ${(passwordInput.value.type = '*******')}`;
        infoDiv.style.display = 'block';
        infoDiv.style.color = 'black';
        infoDiv.innerText = errorMessagesValidationsOk;
        return;
    }
}

//function to test if an email is invalid
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

// Request HTTP through GET method
async function handleLogin() {
    const data = {
        email: emailInput.value,
        password: passwordInput.value,
    };
    fetch('http://localhost:4000/login', {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((a) => console.log(a))
        .catch((err) => console.log(err));
}
