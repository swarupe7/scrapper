const puppeteer= require("puppeteer");

(async ()=>{
    const browser=await puppeteer.launch({headless:false});

    const page=await browser.newPage();
    await page.goto("https://quotes.toscrape.com/");
    await page.click('a[href="/login"]',{delay:100});

    await page.type("#username","swarup",{delay:100});
    await page.type("#password","swarupe7",{delay:100});

    await page.click('input[value="Login"]');

    
    
    
  


    

})();