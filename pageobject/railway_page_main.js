const {Builder, By , Key, until} = require('selenium-webdriver');
var GooglePage = require('./google_page');
var webdriver = require('selenium-webdriver');
var { expect } = require('chai');
const searchQuery = Math.random().toString(36).substring(2, 12) +
    Math.random().toString(36).substring(2, 12);

class RailwayPageMain extends GooglePage{

    switchToEng(){
    driver.wait(until.elementLocated(By.xpath("//*[@class='top-lang__item']/a[contains(text(), 'ENG')]"))).click();
    }
    checkElement() {
         driver.wait(until.elementLocated(By.css('[alt = "Национальный правовой портал РБ"]'))).isDisplayed();
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
     checkElement_1 () {
        driver.wait(until.elementLocated(By.css(".copyright"))).isDisplayed()
        const Elem =  driver.findElement(By.css('.copyright')).getText();
        console.log(/© 2021 Belarusian Railway/.test(Elem)); 
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
     passtheLink() {
        driver.wait(until.elementLocated(By.name("q")));
        driver.findElement(By.name("q")).sendKeys(searchQuery).click;
    }
    async firstLink() {
        driver.findElement(By.css("[type = submit]")).click();
    }
   
    quit(){
        driver.quit();
    }
}
module.exports = new RailwayPageMain();