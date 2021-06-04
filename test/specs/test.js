const  { email, string }  = require('../../get-random');

describe('quarkly.io page', () => {
    let projectId;
    let elementId;

    it('Title', () => {

        browser.setWindowSize(1920, 1080) //устанавливаем размер вызываемого браузера
        browser.url('/');
        expect(browser).toHaveTitle('Quarkly – Design tool for creating websites and web apps.');
    }); 

    it('Registration', () => {
        browser.url('/auth');

        browser.execute(testEmail => {
            window.___testing.__auth('beta.quarkly.iowtf');
            window.___testing.__createTestingUsr(testEmail, '1234566788888');
        }, email());

        expect(browser).toHaveUrlContaining('dashboard');
    });  

    it('Create new project', () => {
       
        $('.modal_close__p3OJi.iconButton_button__3BhK1.iconButton_button-hover__12Uiu.iconButton_button-active__3zbip').click(); //закрывает модальное окно мэйла
       
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
        
    });

    it('Add component on page', () => {

        $('.panelItemTile_tileBody__1UOdD.component_itemBody__1wzuP .panelItemTile_title__29sbG').click();
        

        browser.switchToFrame($('#preview-iframe')); //переключились на фрейм, надо выйти из него потом

           expect($('.sc-fzqNqU.hFpwJZ')).toBeDisplayed(); //элемент отобразился но скрипт ещё подгружается

    });

    it('Context menu', () => {
        $('.sc-fzqNqU.hFpwJZ').waitForClickable(); //ждём когда скрипт подгрузится и элемент станет кликабельным
        $('.sc-fzqNqU.hFpwJZ').click( {button: 2} );  

        
        browser.debug();
       
    });

}); 