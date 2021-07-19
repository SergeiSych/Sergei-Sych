const { Builder, By, Key, until, WebElement, elementIsVisible} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();
class Test_1 {
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
    async switchToEng() {
        await driver.wait(until.elementLocated(By.xpath("//*[@class='top-lang__item']/a[contains(text(), 'ENG')]"))).click();
    }
    async checkElement() {
        await driver.wait(until.elementLocated(By.css('[alt = "Национальный правовой портал РБ"]'))).isDisplayed();
            
    }
    quiteTest(){
        driver.quit();
    }
    
}
    

module.exports = new Test_1();