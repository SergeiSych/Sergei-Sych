const { Builder, By, Key, until, WebElement, elementIsVisible} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();
const { expect, Assert } = require('chai');

class Test_2 {
    constructor() {
        global.driver = driver;
    }
    navigateTotheStartPage() {
        driver.get("http://google.com")
    }
    passtheLink() {
        driver.findElement(By.name("q")).sendKeys("белорусская железная дорога", Key.RETURN).click;
    }
    goToTheMainPage() {
        driver.wait(until.elementLocated(By.xpath("//*[@class='yuRUbf'][1]"))).click();
    }
    switchToEng() {
        driver.wait(until.elementLocated(By.xpath("//*[@class='top-lang__item']/a[contains(text(), 'ENG')]"))).click();
    }
    async  checkNews() {
        const EXPECTED_NEWS_COUNT = 4; 
        await driver.wait(until.elementLocated(By.css('.index-news-list')));
        const newsContainer = await driver.findElement(By.css('.index-news-list'));
        const news = await newsContainer.findElements(By.css('dt'));
        expect(news.length).to.be.at.least(EXPECTED_NEWS_COUNT);
    }  
    scrollToDown () {
        driver.executeScript('window.scrollTo(0,950);');
    }
    checkElement () {
        driver.wait(until.elementLocated(By.css('.copyright')));
    }
    scrollToUp () {
        driver.executeScript('window.scrollTo(0,0);');
    }
    async checkButton () {
        const button = await driver.findElement(By.xpath(".//*[@class='menu-items']/tbody//tr//td/a/em/u/b")).getText()
        expect(button).to.include("CONTACTS");
        const button1 = await driver.findElement(By.xpath(".//*[@class='menu-items']/tbody//tr//td[6]/a/em/u/b")).getText()
        expect(button1).to.include("PRESS CENTER");
        const button2 = await driver.findElement(By.xpath(".//*[@class='menu-items']/tbody//tr//td[2]/a/em/u/b")).getText()
        expect(button2).to.include("PASSENGER SERVICES");
        const button3 = await driver.findElement(By.xpath(".//*[@class='menu-items']/tbody//tr//td[4]/a/em/u/b")).getText()
        expect(button3).to.include("FREIGHT");
        const button4 = await driver.findElement(By.xpath(".//*[@class='menu-items']/tbody//tr//td[5]/a/em/u/b")).getText()
        expect(button4).to.include("CORPORATE");
    }
    quitTest () {
        driver.quit();
    }
  
}

module.exports = new Test_2();
