const {Builder, By, Key, util, Button} = require("selenium-webdriver");
const { Name } = require("selenium-webdriver/lib/command");

async function example () {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("белорусская железная дорога"
    ,Key.RETURN).click;
    await driver.findElements(By.linkText.click("Белорусская железная дорога: Официальный сайт"));
    
}
example();