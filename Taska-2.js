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
