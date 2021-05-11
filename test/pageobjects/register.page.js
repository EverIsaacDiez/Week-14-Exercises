class RegisterPage {
    // register inputs
    get inputEmail() {
        return $('input[id="registerInputEmail"]');
    }
    get inputName() {
        return $('input[id="registerInputName"]');
    }
    get inputPassword() {
        return $('input[id="registerInputPassword"]');
    }
    get inputConfirmPassword() {
        return $('input[id="registerInputConfirmPassword"]');
    }

    // Register error divs
    get registerErrorDivMail() {
        return $('div[id="registerMailValidationDiv"]').getText();
    }
    get registerErrorDivName() {
        return $('div[id="registerNameValidationDiv"]').getText();
    }
    get registerErrorDivPassword() {
        return $('div[id="registerPasswordValidationDiv"]').getText();
    }
    get registerErrorDivConfirmPassword() {
        return $('div[id="registerCpasswordValidationDiv"]').getText();
    }

    // register buttons
    get btnSubmit() {
        return $('button[id="registerButton"]');
    }
    get btnResetForm() {
        return $('button[id="resetFormBtn"]');
    }
    get btnBackToLogin() {
        return $('a[id="BackToLoginLink"]');
    }

    resetForm() {
        this.btnResetForm.click();
    }

    BackToLogin() {
        this.btnBackToLogin.click();
    }

    register(email, name, password, confirmPass) {
        this.inputEmail.setValue(email);
        this.inputName.setValue(name);
        this.inputPassword.setValue(password);
        this.inputConfirmPassword.setValue(confirmPass);
        this.btnSubmit.click();
    }
}

module.exports = new RegisterPage();
