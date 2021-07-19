const {Builder, By, Keys} = require('selenium-webdriver')
const  driver = new Builder().forBrowser('firefox').build()
async function qqq() {
try{
await driver.get('http://google.com');
await driver.findElement(By.css("body")).sendKeys(Keys.Control +"t");


await driver.get('http://google.com');
}catch(error){
    console.error(error)
}
}
qqq()

