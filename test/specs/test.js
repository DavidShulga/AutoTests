const assert = require('assert')

describe('quarkly.io page', () => {
    it('should return something for', () => {
        browser.url('/');

        expect(browser).toHaveTitle('Quarkly – Design tool for creating websites and web apps.');
    });  
    it('registration', () => {
        browser.url('/auth');
        
        const getrandom = 'gfgddgfdgfdgfdgf';

        browser.execute(() => {
            window.___testing.__auth('beta.quarkly.iowtf');
            window.___testing.__createTestingUsr(`${getrandom}@testing.email`, '1234566788888');
        })
        browser.debug();

    });  
});