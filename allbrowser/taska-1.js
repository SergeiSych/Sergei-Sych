const { Test } = require('mocha');
const {alert} = require('selenium-webdriver');

describe("Suit", () => { 
 
    it("Test-1", async function() {
        this.timeout(50000);
        var Test_1 = require('./Test_1')
        await Test_1.navigateTotheStartPage();
        await Test_1.passtheLink();
        await Test_1.goToTheMainPage();
        await Test_1.switchToEng();
        await Test_1.checkElement();
        await Test_1.quitTest();
    });
    it("Test-1-1", async function() {
        this.timeout(50000);
        var Test_1_1 = require('./Test_1_1')
        await Test_1_1.navigateTotheStartPage();
        await Test_1_1.passtheLink();
        await Test_1_1.goToTheMainPage();
        await Test_1_1.switchToEng();
        await Test_1_1.checkElement();
        await Test_1_1.quitTest();
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
     it  ('Test-2-1', async function ()  { 
        this.timeout(50000);
        var Test_2_1 = require('./Test_2_1')
        await Test_2_1.navigateTotheStartPage();
        await Test_2_1.passtheLink();
        await Test_2_1.goToTheMainPage();
        await Test_2_1.switchToEng();
        await Test_2_1.checkNews();
        await Test_2_1.scrollToDown();
        await Test_2_1.checkElement();
        await Test_2_1.scrollToUp();
        await Test_2_1.checkButton();
        await Test_2_1.quitTest();
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
        await Test_3.quitTest();
    });

    it('Test-3-1', async function () {
        this.timeout(50000);
        var Test_3_1 = require('./Test_3_1');
        await Test_3_1.navigateTotheMainPage();
        await Test_3_1.passtheLink();
        await Test_3_1.firstLink();
        await Test_3_1.checkTheSame();
        await Test_3_1.youSeeTheText();
        await Test_3_1.clearText();
        await Test_3_1.newText();
        await Test_3_1.checkTheLink();
        await Test_3_1.quitTest();
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
        await Test_4.quitTest();
    });
    it('Test-4-1', async function () {
        this.timeout(50000);
        var Test_4_1 = require('./Test_4_1');
        await Test_4_1.navigateTotheMainPage();
        await Test_4_1.passDate();
        await Test_4_1.passFrom();
        await Test_4_1.passTo();
        await Test_4_1.checkTheDate();
        await Test_4_1.getTrain();
        await Test_4_1.checkFirstLink();
        await Test_4_1.checkTheText();
        await Test_4_1.goToTheMainPage();
        await Test_4_1.quitTest();
    });
})