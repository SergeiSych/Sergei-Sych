const {Builder, By , Key, until} = require('selenium-webdriver');
var Page = require('./google');
var webdriver = require('selenium-webdriver');

class RailwayPageTrain extends Page{
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
    async openFirstLink() {
        await driver.findElement(By.xpath
            ('//*[@id="sch-route"]/div[3]/div[2]/div[1]/div[3]/div/div[1]/div/div[1]/a')).click();
    }
    async textContent(searchText) {
            await driver.findElement(By.className("sch-title__title h2")).isDisplayed();
            const str = await driver.findElement(By.css('.train-table__link')).getText(); 
            console.log(searchText.test(str));  
    }
    async goToTheMainPage() {
        await driver.wait(until.elementLocated(By.xpath(".//*[@class = 'header-bottom']/div/a"))).click().clickAndWait;
    }

}
module.exports = new RailwayPageTrain();