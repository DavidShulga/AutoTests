const  { email }  = require('../../get-random');

describe('quarkly.io page', () => {
    
    it('should return something for', () => {
        browser.url('/');
        expect(browser).toHaveTitle('Quarkly – Design tool for creating websites and web apps.');
    }); 

    it('registration', () => {
        browser.url('/auth');

        browser.execute(testEmail => {
            window.___testing.__auth('beta.quarkly.iowtf');
            window.___testing.__createTestingUsr(testEmail, '1234566788888');
        }, email());

        browser.debug();
    });  
}); 