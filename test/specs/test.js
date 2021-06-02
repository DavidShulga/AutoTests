const  { email, string }  = require('../../get-random');

describe('quarkly.io page', () => {
    let projectId;

    it('Title', () => {
        browser.url('/');
        expect(browser).toHaveTitle('Quarkly – Design tool for creating websites and web apps.');
    }); 

    it('registration', () => {
        browser.url('/auth');

        browser.execute(testEmail => {
            window.___testing.__auth('beta.quarkly.iowtf');
            window.___testing.__createTestingUsr(testEmail, '1234566788888');
        }, email());

        expect(browser).toHaveUrlContaining('dashboard');
    });  

    it('create new project', () => {
        function getProjectIds() {
             return $$('.projects_content__38WSE>a').map(element => {
                return element.getAttribute('href').replace('https://beta.quarkly.io/project/', '');
            });
        };

        $('.projectItem_plus__17of5').waitForDisplayed();

        const projectIds = getProjectIds();


        const projectCount = $$('.projects_content__38WSE>a').length
        const projectName = string(6);
        $('.projectItem_item__2gcPy.projectItem_tiles4__2bCCv.projectItem_addNew__3nARw').click();

        $('.inputLarge_input__1ZL9W').addValue(projectName);

        $('.modalPrompt_actions__2zWQ9 .button_button__3kU75.button_button-base__1Tql_').click();

        expect($$('.projects_content__38WSE>a')).toBeElementsArrayOfSize(projectCount + 1);

       [projectId] = getProjectIds().filter(elem => !projectIds.includes(elem));
    });

    it('Open new project', () => {

        $(`[href="/project/${projectId}"]`).click()

                
        expect(browser).toHaveUrlContaining(projectId);
        browser.debug();
    });

}); 