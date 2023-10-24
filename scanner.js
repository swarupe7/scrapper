const puppeteer= require("puppeteer");

(async ()=>{
    const browser=await puppeteer.launch({headless:false});

    const page=await browser.newPage();
    await page.goto("https://port-nine-theta.vercel.app/");

    const grabPara=await page.evaluate(()=>{
        const pgTag= document.querySelectorAll(".c-info .c-info-item");
        let stack=[];
        pgTag.forEach((tag)=>{
            stack.push(tag.innerText);
        });
                return stack;
    })
    
    
   console.log(grabPara);


    await browser.close();

})();