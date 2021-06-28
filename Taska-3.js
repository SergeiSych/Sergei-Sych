const { check } = require("prettier");
const { Builder, By } = require("selenium-webdriver");
const { elementIsVisible } = require("selenium-webdriver/lib/until");
const driver = new Builder()
    .forBrowser("firefox")
    .build();

const { expect, Assert } = require('chai');    

async function taska3() {
    try { 
        const searchQuery = Math.random().toString(36).substring(2, 12) +
        Math.random().toString(36).substring(2, 12);

        await driver.get("https://www.rw.by/")
        await driver.findElement(By.name("q")).sendKeys(searchQuery);
        
        await driver.findElement(By.xpath("/html/body/div[3]/div[3]/div[2]/div[2]/div[3]/div[2]/form/button")).click();
        const currentUrl = await driver.getCurrentUrl()
        expect(currentUrl).to.include(searchQuery)  
        const nothingFoundText = await driver.findElement(By.xpath("//font")).getText()
        expect(nothingFoundText).to.include("К сожалению, на ваш поисковый запрос ничего не найдено.");
        
        await driver.findElement(By.xpath('//*[@id="searchinpm"]')).clear();
        await driver.findElement(By.xpath('//*[@id="searchinpm"]')).sendKeys("Санкт-Петербург");
        await driver.findElement(By.xpath('//*[@id="sform"]/div[1]/input')).click();
        
        const link = await driver.findElements(By.className('name'))
        const EXPECTED_NEWS_COUNT = 15;
        expect(link.length).to.be.at.least(EXPECTED_NEWS_COUNT);

        let sP = await driver.findElements(By.className('name'));
        for(let linkName of sP){
            console.log(await linkName.getText());
                
        }
    }catch (error) {
        console.log(error)

    }
}

taska3();
