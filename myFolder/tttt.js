const {Builder,driver,webdriver} = require("selenium-webdriver");


class differentBrowser {
    constructor(){ }
    firefoxBrowser() {
    //var driver = require('selenium-webdriver/firefox');    
    var driver = new Builder().forBrowser("firefox").build();
    driver.get("http://google.com")
    }
    chromeBrowser(){
    //var driver = require('selenium-webdriver/chrome');
    var driver = new Builder()
    .forBrowser('chrome')
    .build();
    driver.get("http://google.com")
    }
}

module.exports = new differentBrowser;