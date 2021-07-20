const {Builder, By , Key, until} = require('selenium-webdriver');
var Page = require('./google');
var webdriver = require('selenium-webdriver');
var { expect } = require('chai');

class RailwayPageSearch extends Page{
    async youSeeTheText(searchText) {
        const nothingFoundText = await driver.findElement(By.xpath("//font")).getText()
        expect(nothingFoundText).to.include(searchText);
    }
    async clearText() {
        await driver.findElement(By.xpath('//*[@id="searchinpm"]')).clear();
    }
    async newText(searchText) {
        await driver.findElement(By.xpath('//*[@id="searchinpm"]')).sendKeys(searchText);
        await driver.findElement(By.xpath('//*[@id="sform"]/div[1]/input')).click();
    }
    async checkTheLink() {
        await driver.wait(until.elementLocated(By.className('name')));
        const link = await driver.findElements(By.className('name'));
        const EXPECTED_NEWS_COUNT = 15;
        expect(link.length).to.be.at.least(EXPECTED_NEWS_COUNT);
        for(let linkName of link){
            console.log(await linkName.getText());
        }
    }

}

module.exports = new RailwayPageSearch();