const { check } = require("prettier");
const { Builder, By, Key, until, WebElement, elementIsVisible } = require("selenium-webdriver");
//const { elementIsVisible } = require("selenium-webdriver/lib/until");

const driver = new Builder()
    .forBrowser("firefox")
    .build();
async function taska1() {
    // try {
        await driver.get("http://google.com")
        await driver.findElement(By.name("q")).sendKeys("белорусская железная дорога"
            , Key.RETURN).click;
        await driver.wait(until.elementLocated(By.xpath
            ("//*[@class='yuRUbf'][1]"))).click();
        await driver.findElement(By.xpath
            ("//*[@class='top-lang__item']/a[contains(text(), 'ENG')]")).click();
        await driver.findElement(By.css
                ('[alt = "Национальный правовой портал РБ"]')).isDisplayed();
    // } catch (error) {
    //     console.log(error)
    // }
    driver.quit()
}
taska1();