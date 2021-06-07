const  { email, string }  = require('../../get-random');

describe('Authtorization and registration', () => { 
    const ctx = {
        user: {
            fullName: string(6),
            email: email().toLowerCase(),
            password: string(6),
        }
    }


    it('Go to the Quarkly page', () => {
        browser.setWindowSize(1920, 1080) //устанавливаем размер вызываемого браузера
        browser.url('/');

        expect($('[data-qoverride="box2"] [data-qoverride="link2"]')).toBeClickable();
    });
    
    it('Click the sign up button', () => {

        $('[data-qoverride="box2"] [data-qoverride="link2"]').click();
        expect($('[name="auth-sign-up"]')).toBeDisplayed();

    });

    it('Fill data feilds', () => {

        const form = $('[name="auth-sign-up"]');
        form.$('[type="text"]').addValue(ctx.user.fullName);
        form.$('[type="email"]').addValue(ctx.user.email);
        form.$('[type="password"]').addValue(ctx.user.password);

        expect(form.$('button.button_button__1h0Dn')).toBeClickable();
    });

    it('Registrate accaunts data', () => {

        $('[name="auth-sign-up"] button.button_button__1h0Dn').click();
        $(`input[data-tooltip-text="${ctx.user.email}"]`).waitForDisplayed();

        
    });
    
    it('Log out accaunt', () => {});
    it('Log in proccess', () => {});

});