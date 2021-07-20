const {Builder, By , Key, until} = require('selenium-webdriver');
var Page = require('./google');
var webdriver = require('selenium-webdriver');

class GooglePage extends Page{
    enter_search(searchText){
    driver.findElement(By.css('input[name=q]')).sendKeys(searchText);
    driver.findElement(By.css('input[name=q]')).sendKeys(Key.ENTER);
    }
    go_to_railwayPage(){
    driver.wait(until.elementLocated(By.xpath("//*[@class='yuRUbf'][1]"))).click();
    }
    quitTest(){
        driver.quit();
    }
}
module.exports = new GooglePage();