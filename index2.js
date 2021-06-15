const { builder, By, Builder, } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

  async function simpleRegistration() {
      try {
       await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
       await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
       await driver.findElement(By.id("password")).sendKeys("12345");
       await driver.findElement(By.name("submit")).click();
       await driver.findElement(By.className("btn btn-hero-success main-btn")).click();
      } catch (error) {
          console.log(error)
      }
  }

  simpleRegistration();