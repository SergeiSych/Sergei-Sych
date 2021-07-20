const google_page = require('../pageobject/google_page');
const railway_page_main = require('../pageobject/railway_page_main');
const railway_page_search = require('../pageobject/railway_page_search');
const railway_page_train = require('../pageobject/railway_page_train');
describe('Suit', () => {

    it('Test-1', async function() {
        this.timeout(50000);
        var baseurl = 'http://google.com';
        await google_page.go_to_url(baseurl);
        await google_page.enter_search('белорусская железная дорога');
        await google_page.go_to_railwayPage();
        await railway_page_main.switchToEng();
        await railway_page_main.checkElement();   
    });

    it('Test-2', async function()  {
        this.timeout(50000);
        var baseurl = 'http://google.com';
        await google_page.go_to_url(baseurl);
        await google_page.enter_search('белорусская железная дорога');
        await google_page.go_to_railwayPage();
        await railway_page_main.switchToEng();
        await railway_page_main.checkNews();
        await railway_page_main.checkElement_1();
        await railway_page_main.checkButton();
    });

    it('Test-3', async function()  {
        this.timeout(50000);
        var baseurl = "https://www.rw.by/";
        await google_page.go_to_url(baseurl);
        await railway_page_main.passtheLink();
        await railway_page_main.firstLink();
        await railway_page_main.checkTheSame();
        await railway_page_search.youSeeTheText('К сожалению, на ваш поисковый запрос ничего не найдено.');
        await railway_page_search.clearText();
        await railway_page_search.newText("Санкт-Петербург");
        await railway_page_search.checkTheLink();
    });

    it('Test-4', async function() {
        this.timeout(50000);
        var baseurl = "https://www.rw.by/";
        await google_page.go_to_url(baseurl);
        await railway_page_main.passDate();
        await railway_page_main.passFrom("Брест");
        await railway_page_main.passTo("Минск");
        await railway_page_main.checkTheDate();
        await railway_page_train.getTrain();
        await railway_page_train.openFirstLink();
        await railway_page_train.textContent(/[А-яЁё]/);
        await railway_page_train.goToTheMainPage();
    })
})