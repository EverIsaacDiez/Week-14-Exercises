class LoginPage {
    // Inputs of login
    get inputEmail() {
        return $('input[id="loginInputEmail"]');
    }
    get inputPassword() {
        return $('input[id="loginInputPassword"]');
    }

    //error divs
    get errorDivEmail() {
        return $('div[id="mail-validation-div"]').getText();
    }
    get errorDivPassword() {
        return $('div[id="password-validation-div"]').getText();
    }

    // button of login
    get btnSubmit() {
        return $('button[id="loginButton"]');
    }

    //Link to register form
    get btnRegister() {
        return $('a[id="goToRegisterLink"]');
    }

    buttonRegister() {
        this.btnRegister.click();
    }

    login(email, password) {
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
    }
}

module.exports = new LoginPage();
