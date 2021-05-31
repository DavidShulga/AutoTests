const assert = require('assert')

describe('quarkly.io page', () => {
    it('should return something for', () => {
        browser.url('https://quarkly.io')

        expect(browser).toHaveTitle('Quarkly – Design tool for creating websites and web apps.')
    });   
});