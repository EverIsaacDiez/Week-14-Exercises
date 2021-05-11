const LoginPage = require('../pageobjects/login.page');

describe('Test of login', () => {
    function browserPause() {
        browser.pause(2000);
    }
    const urlRegister = 'https://everisaacdiez.github.io/week14/public/register.html';
    const urlLogin = 'https://everisaacdiez.github.io/week14/public/login.html';

    //Email
    it('Empty email', () => {
        browser.url(urlLogin);
        LoginPage.login('', 'Contraseña123!!');
        expect(LoginPage.errorDivEmail).toBe("Email field can't be empty");
        browserPause();
    });
    it('Invalid email', () => {
        LoginPage.login('incorr-hotm', 'Contraseña123!!');
        expect(LoginPage.errorDivEmail).toBe('Email is invalid');
        browserPause();
    });

    //Password
    it('Lowercase letter in password', () => {
        LoginPage.login('correct@gmail.com', 'ASDASD213!');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one lowercase letter');
        browserPause();
    });
    it('Uppercase letter in password', () => {
        LoginPage.login('correct@gmail.com', '2aads!2');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one uppercase letter');
        browserPause();
    });
    it('input without number', () => {
        LoginPage.login('correct@gmail.com', 'ASD!asd');
        expect(LoginPage.errorDivPassword).toBe('Password must contain at least one number');
        browserPause();
    });
    it('password with at least 8 characters', () => {
        LoginPage.login('correct@gmail.com', 'aA!1');
        expect(LoginPage.errorDivPassword).toBe('Password must have at least 8 characters');
        browserPause();
    });

    //Correct characters
    it('Input with correct characters', () => {
        LoginPage.login('correct@gmail.com', 'Constraseña123!');
        expect(LoginPage.errorDivEmail).toBe('');
        browserPause();
    });

    //Go to register section
    it('Button "Create a new account" to go to register', () => {
        LoginPage.buttonRegister();
        if (browser.getUrl() === urlRegister);
        else throw new Error('ERROR');
        browserPause();
    });
});
