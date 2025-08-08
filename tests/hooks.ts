import {Before,After, BeforeAll, AfterAll, Status, AfterStep} from "@cucumber/cucumber"
import { chromium, Browser, Page, BrowserContext} from '@playwright/test'

import {pageFixure} from "./pageFixure"

let browser:Browser;
let page:Page;
let context:BrowserContext;

BeforeAll(async function () {
    browser=await chromium.launch({headless:false,channel:'chrome'});
})



Before(async function () {

 context= await browser.newContext();
 page=await context.newPage();

 pageFixure.page=page;

});

AfterStep(async function({pickle,result}) {
    //screenshots
   
    const img=await pageFixure.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png` ,type:"png"});

    await this.attach(img,"image/png");

});

After(async function({pickle,result}) {
    //screenshots
    if(result?.status==Status.FAILED){
    const img=await pageFixure.page.screenshot({path:`./test-results/screenshots/${pickle.name}.png` ,type:"png"});

    await this.attach(img,"image/png");
    }
    
    await pageFixure.page.close();
    await context.close();
});

AfterAll(async function() {

    await browser.close();
    
});