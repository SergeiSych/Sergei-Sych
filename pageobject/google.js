const webdriver = require('selenium-webdriver');
const driver = new webdriver.Builder().forBrowser('firefox').build();
//driver.manage().setTimeout({implicit: (10000)});

class Page{
    constructor(){
         global.driver = driver;
    }
    
    go_to_url(theURL) {
    driver.get(theURL)
    }
    go_to_url_1(theURL) {
        driver.get(theURL)
        }
    // go_to_main_page(theURL){
    //     driver.get(theURL)
    // }
}
module.exports = Page;