const RegisterPage = require('../pageobjects/register.page');

describe('Test of register', () => {
    function browserPause() {
        browser.pause(2000);
    }
    const urlRegister = '';
    const urlLogin = '';

    //Email
    it('Empty email', () => {
        browser.url(urlRegister);
        RegisterPage.register('', 'roberto diaz', 'Contraseña123!', 'Contraseña123!');
        expect(RegisterPage.registerErrorDivMail).toBe("Email field can't be empty");
        browserPause();
    });
    it('Email invalid', () => {
        RegisterPage.register('incorrect@', 'roberto diaz', 'Contraseña123!', 'Contraseña123!');
        expect(RegisterPage.registerErrorDivMail).toBe('Email is invalid');
        browserPause();
    });

    //Name
    it('Empty name', () => {
        RegisterPage.register('correct@gmail.com', '', 'Contraseña123!', 'Contraseña123!');
        expect(RegisterPage.registerErrorDivName).toBe("Name field can't be empty");
        browserPause();
    });
    it('Invalid name', () => {
        RegisterPage.register('correct@gmail.com', 's', 'Contraseña123!', 'Contraseña123!');
        expect(RegisterPage.registerErrorDivName).toBe('Full name must contains a space');
        browserPause();
    });

    //Password
    it('Uppercase letter', () => {
        RegisterPage.register('correct@gmail.com', 'roberto diaz', 'contraseña123!', 'contraseña123!');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one uppercase letter');
        browserPause();
    });
    it('Lowercase letter ', () => {
        RegisterPage.register('correct@gmail.com', 'roberto diaz', 'ASDDSA2!', 'ASDDSA2!');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one lowercase letter');
        browserPause();
    });
    it('Password with less to 8 characters', () => {
        RegisterPage.register('correct@gmail.com', 'roberto diaz', 'Ass1!', 'Ass1!');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must have at least 8 characters');
        browserPause();
    });
    it('Password without number', () => {
        RegisterPage.register('correct@gmail.com', 'roberto diaz', 'Contraseña!', 'Contraseña!');
        expect(RegisterPage.registerErrorDivPassword).toBe('Password must contain at least one number');
        browserPause();
    });

    //Password confirm
    it('Confirm password empty', () => {
        RegisterPage.register('correct@gmail.com', 'roberto diaz', 'Contraseña123!', '');
        expect(RegisterPage.registerErrorDivConfirmPassword).toBe("confirm password field can't be empty");
        browserPause();
    });
    it('Confirm password doesnt match with password', () => {
        RegisterPage.register('correct@gmail.com', 'roberto diaz', 'Contraseña123!', 'asdasdasd1!A');
        expect(RegisterPage.registerErrorDivConfirmPassword).toBe('passwords must match');
        browserPause();
    });

    //Correct characters
    it('Correct characters', () => {
        RegisterPage.register('correct@gmail.com', 'roberto diaz', 'Contraseña123!', 'Contraseña123!');
        expect(RegisterPage.registerErrorDivMail).toBe('');
        browserPause();
    });

    //Back
    it('Button "Back" to go to login', () => {
        RegisterPage.BackToLogin();
        if (browser.getUrl() === urlLogin);
        else throw new Error('ERROR');
        browserPause();
    });
});
