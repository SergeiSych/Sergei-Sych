const { Test } = require('mocha');
const {alert} = require('selenium-webdriver');
//const { checkTheDate, clickButton } = require('./Test_4');


describe("Suit", () => { 
 
    it("Test-1", async function() {
        this.timeout(50000);
        var Test_1 = require('./Test_1')
        await Test_1.navigateTotheStartPage();
        await Test_1.passtheLink();
        await Test_1.goToTheMainPage();
        await Test_1.switchToEng();
        await Test_1.checkElement();
        await Test_1.quiteTest();
    });

    it  ('Test-2', async function ()  { 
        this.timeout(50000);
        var Test_2 = require('./Test_2')
        await Test_2.navigateTotheStartPage();
        await Test_2.passtheLink();
        await Test_2.goToTheMainPage();
        await Test_2.switchToEng();
        await Test_2.checkNews();
        await Test_2.scrollToDown();
        await Test_2.checkElement();
        await Test_2.scrollToUp();
        await Test_2.checkButton();
        await Test_2.quitTest();
     });

    it('Test-3', async function () {
        this.timeout(50000);
        var Test_3 = require('./Test_3');
        await Test_3.navigateTotheMainPage();
        await Test_3.passtheLink();
        await Test_3.firstLink();
        await Test_3.checkTheSame();
        await Test_3.youSeeTheText();
        await Test_3.clearText();
        await Test_3.newText();
        await Test_3.checkTheLink();
        await Test_3.quiteTest();
    });

    it('Test-4', async function () {
        this.timeout(50000);
        var Test_4 = require('./Test_4');
        await Test_4.navigateTotheMainPage();
        await Test_4.passDate();
        await Test_4.passFrom();
        await Test_4.passTo();
        await Test_4.checkTheDate();
        await Test_4.getTrain();
        await Test_4.checkFirstLink();
        await Test_4.checkTheText();
        await Test_4.goToTheMainPage();
        await Test_4.quiteTest();
    });
})