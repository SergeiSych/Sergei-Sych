var assert = require('chai').assert;

describe('Test runner', () => {
    
it.only("Taska №1 ", function()  {
        const { check } = require("prettier");
        const { Builder, By, Key, until, WebElement } = require("selenium-webdriver");
        const { elementIsVisible } = require("selenium-webdriver/lib/until");
            
        const driver = new Builder()
                .forBrowser("firefox")
                .build();

        async function taska1() {
                try {
                    await driver.get("http://google.com")
                    await driver.findElement(By.name("q")).sendKeys("белорусская железная дорога"
                        , Key.RETURN).click;
                    await driver.wait(until.elementLocated(By.xpath
                        ("//*[@class='yuRUbf'][1]"))).click();
                    await driver.findElement(By.xpath
                        ("//*[@class='top-lang__item']/a[contains(text(), 'ENG')]")).click();
                    await driver.findElement(By.css
                            ('[alt = "Национальный правовой портал РБ"]')).isDisplayed();
                } catch (error) {
                    console.log(error)
                }
            }
            taska1();
});

it.only("Taska №2", function() {
        const { Builder, By, Key, until  } = require("selenium-webdriver");
        const { elementIsVisible } = require("selenium-webdriver/lib/until");
        const { expect, Assert } = require('chai');
            
        const driver = new Builder()
                .forBrowser("firefox")
                .build();
            
        async function taska2() {
                  
                  try {
                   await driver.get("http://google.com")
                   await driver.findElement(By.name("q")).sendKeys("белорусская железная дорога",Key.RETURN);
                   await driver.wait(until.elementLocated(By.xpath
                    ("//*[@class='yuRUbf'][1]"))).click();
                   await driver.wait(until.elementLocated(By.xpath("//*[@class='top-lang__item']/a[contains(text(), 'ENG')]"))).click();
                   const newsContainer = await driver.findElement(By.css('.index-news-list'));
                   const news = await newsContainer.findElements(By.css('dt'))
                   const EXPECTED_NEWS_COUNT = 4;
                   expect(news.length).to.be.at.least(EXPECTED_NEWS_COUNT);
                   //await driver.manage().window().getRect().then(asdsad => {console.log(asdsad)})
                   await driver.executeScript('window.scrollTo(0,950);');
                   await driver.wait(until.elementLocated(By.css('.copyright')))//.then(location => {
                   //console.log(location)})
                   driver.sleep(5000)
                   await driver.executeScript('window.scrollTo(0,0);');
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
              
            
                  } catch (error) {
                      console.log(error)
                  }
              }
             taska2();
});

it.only("Taska №3 ", function()  {
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
        
        await driver.findElement(By.css("[type = submit]")).click();
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
});

it.only("Taska №4 ", function()  {
        
 const moment = require("moment");
 const { Builder, By, until, WebElement,  } = require("selenium-webdriver");
 const { elementIsVisible, elementIsDisabled } = require("selenium-webdriver/lib/until");
 const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function taska4() {
    
    var moment= require('moment')
    var date = moment().add(5, 'd').format('DD.MM.YY')  
    console.log(date);
    try {
        await driver.get("https://www.rw.by/");
        await driver.findElement(By.xpath("//*[@hidefocus='true']"))
        await driver.findElement(By.xpath("//*[@id='yDate']")).sendKeys(date);
        await driver.findElement(By.name("from")).sendKeys("Брест")
        await driver.findElement(By.name("to")).sendKeys("Минск")
        await driver.findElement(By.className('ui-state-default ui-state-active')).click();
        await driver.findElement(By.xpath("//*[@hidefocus='true'][1]")).click();
        await driver.wait(until.elementLocated(By.css('[data-ticket_selling_allowed = "true"]')));
                
        const trains = await driver.findElements(By.css
            ('[data-ticket_selling_allowed = "true"]'));

        trains.forEach(async (element) => {
            const trainName = await element.findElement(By.css('.train-route')).getText();
            const departureTime = await element.findElement(By.css('.train-to-time')).getText();
            console.log(`"${trainName}" - ${departureTime}`);
            
            //await driver.manage().setTimeouts( { implicit: 10000 } );
            await driver.findElement(By.xpath
                (".//*[@class = 'sch-table__cell cell-1']/a[1]")).click();
                await driver.findElement(By.className("sch-title__title h2")).isDisplayed();
            const str = await driver.findElement(By.css('.train-table__link')).getText(); 
            console.log(/[А-яЁё]/.test(str));
            await driver.wait(until.elementLocated(By.xpath(".//*[@class = 'header-bottom']/div/a"))).click().clickAndWait;;
        });
    } catch (error) {
        console.log(error)
    }
}
taska4();
});

});
