const { Builder, By, Key, util, Button, WebElement } = require("selenium-webdriver");
const { elementIsVisible } = require("selenium-webdriver/lib/until");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

  async function simpleRegistration() {
      try {
       await driver.get("http://google.com")
       await driver.findElement(By.name("q")).sendKeys("белорусская железная дорога"
       ,Key.RETURN).click;
       await driver.findElement(By.xpath("/html/body/div[7]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div/div/div[1]/a/h3")).click();
      } catch (error) {
          console.log(error)
      }
  }
  simpleRegistration();