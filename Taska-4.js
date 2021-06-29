
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
            //await driver.findElement(By.xpath('//*[@id="db"]/div[1]/div[1]/div/header/div/div[3]/div[1]/a')).click().clickAndWait;  
        });
    } catch (error) {
        console.log(error)
    }
}
taska4();
