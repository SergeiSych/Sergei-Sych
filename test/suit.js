const google_page = require('../pageobject/google_page');
const railway_page_main = require('../pageobject/railway_page_main');
const railway_page_search = require('../pageobject/railway_page_search');

describe('Suit', () => {
// beforeEach(function(){
   
// })
    it('Test-1', async function() {
        this.timeout(50000);
        var baseurl = 'http://google.com';
        await google_page.go_to_url(baseurl);
        await google_page.enter_search('белорусская железная дорога');
        await google_page.go_to_railwayPage();
        await railway_page_main.switchToEng();
        await railway_page_main.checkElement();
        await railway_page_main.quit();
        
    });

    it('Test-2', async function()  {
        this.timeout(50000);
        var baseurl = 'http://google.com';
        await google_page.go_to_url_1(baseurl);
        await google_page.enter_search('белорусская железная дорога');
        await google_page.go_to_railwayPage();
        await railway_page_main.switchToEng();
        await railway_page_main.checkNews();
        await railway_page_main.checkElement_1();
        await railway_page_main.checkButton();
        await railway_page_main.quit();

    });
    // it('Test-3', async function()  {
    //     this.timeout(50000);
    //     var baseurl = "https://www.rw.by/";
    //     await google_page.go_to_url(baseurl);
    //     await railway_page_main.passtheLink();
    //     await railway_page_main.firstLink();
    //     await railway_page_search.checkTheSame();
    // });
})