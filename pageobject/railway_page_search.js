const {Builder, By , Key, until} = require('selenium-webdriver');
var Page = require('./google');
var webdriver = require('selenium-webdriver');
var { expect } = require('chai');
const searchQuery = Math.random().toString(36).substring(2, 12) +
    Math.random().toString(36).substring(2, 12);

class RailwayPageSearch extends Page{
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

}

module.exports = new RailwayPageSearch();