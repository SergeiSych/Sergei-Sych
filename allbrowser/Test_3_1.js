const { Builder, By, Key, until, WebElement, elementIsVisible} = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
const { expect } = require('chai');
const searchQuery = Math.random().toString(36).substring(2, 12) +
    Math.random().toString(36).substring(2, 12);

class Test_3 {
    
    constructor() {
        
        global.driver = driver;
    }
    async navigateTotheMainPage() {
        await driver.get("https://www.rw.by/")
    }
    async passtheLink() {
        await driver.wait(until.elementLocated(By.name("q")));
        await driver.findElement(By.name("q")).sendKeys(searchQuery).click;
    }
    async firstLink() {
        await driver.findElement(By.css("[type = submit]")).click();
    }
    async checkTheSame () {
        const currentUrl = await driver.getCurrentUrl();
        expect(currentUrl).to.include(searchQuery);
    }
    async youSeeTheText() {
        const nothingFoundText = await driver.findElement(By.xpath("//font")).getText()
        expect(nothingFoundText).to.include("К сожалению, на ваш поисковый запрос ничего не найдено.");
    }
    clearText() {
        driver.findElement(By.xpath('//*[@id="searchinpm"]')).clear();
    }
    async newText() {
        await driver.findElement(By.xpath('//*[@id="searchinpm"]')).sendKeys("Санкт-Петербург");
        await driver.findElement(By.xpath('//*[@id="sform"]/div[1]/input')).click();
    }
    async checkTheLink() {
        const link = await driver.findElements(By.className('name'));
        const EXPECTED_NEWS_COUNT = 15;
        expect(link.length).to.be.at.least(EXPECTED_NEWS_COUNT);
        for(let linkName of link){
            console.log(await linkName.getText());
        }
  
    }
    quitTest(){
        driver.quit();
    }

}
module.exports = new Test_3();