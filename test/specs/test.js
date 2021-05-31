const assert = require('assert')

describe('quarkly.io page', () => {
    it('should return something for', async () => {
        await browser.url('https://quarkly.io')
        expect(browser).toHaveTitle('Quarkly – Design tool for creating websites and web apps.')
    });   
});