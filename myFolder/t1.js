const { Test } = require('mocha');
const {alert} = require('selenium-webdriver');


describe("Suit", () => { 
 
    it("Test-1", async function() {
        var tttt = require('./tttt');
        await tttt.firefoxBrowser();
        
        
        
    });
    it("Test-2", async function() {
        var ttt = require('./tttt');
        await ttt.chromeBrowser();
    })
})