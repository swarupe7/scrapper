const puppeteer= require("puppeteer");

(async ()=>{
    const browser=await puppeteer.launch({headless:false});

    const page=await browser.newPage();
    await page.goto("https://www.superkicks.in/");
    await page.screenshot({path:"mywebsite.png"});
    await browser.close();

})();