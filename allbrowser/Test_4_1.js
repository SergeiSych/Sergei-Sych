const { Builder, By, Key, until, WebElement} = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
const { expect } = require('chai');
const moment = require('moment')
var date = moment().add(5, 'd').format('DD.MM.YY') 
class Test_4 {
    
    constructor() {
        
        global.driver = driver;
    }
    async navigateTotheMainPage() {
        await driver.get("https://www.rw.by/")
    }
    async passDate () {

        await driver.findElement(By.xpath("//*[@id='yDate']")).sendKeys(date);
        await driver.findElement(By.className('ui-state-default ui-state-active')).click();
    }
    async passFrom() {
        await driver.findElement(By.name("from")).sendKeys("Брест");
    }
    async passTo() {
        await driver.findElement(By.name("to")).sendKeys("Минск");
    }
    async checkTheDate() {
        await driver.findElement(By.xpath("//*[@hidefocus='true'][1]")).click();
    }
    async getTrain() {
        await driver.wait(until.elementLocated(By.css('[data-ticket_selling_allowed = "true"]')));
        const trains = await driver.findElements(By.css
            ('[data-ticket_selling_allowed = "true"]'));
        trains.forEach(async (element) => {
            const trainName = await element.findElement(By.css('.train-route')).getText();
            const departureTime = await element.findElement(By.css('.train-to-time')).getText();
        console.log( `"${trainName}" - ${departureTime}`);
        });
    }
    async checkFirstLink() {
        await driver.findElement(By.xpath
            ('//*[@id="sch-route"]/div[3]/div[2]/div[1]/div[3]/div/div[1]/div/div[1]/a')).click();
    }
    async checkTheText() {
        await driver.findElement(By.className("sch-title__title h2")).isDisplayed();
            const str = await driver.findElement(By.css('.train-table__link')).getText(); 
            console.log(/[А-яЁё]/.test(str));
    }
    async goToTheMainPage() {
        await driver.wait(until.elementLocated(By.xpath(".//*[@class = 'header-bottom']/div/a"))).click().clickAndWait;
    }
    quitTest(){
        driver.quit();
    }
}
module.exports = new Test_4;