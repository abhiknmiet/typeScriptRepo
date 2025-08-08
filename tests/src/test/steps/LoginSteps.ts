import {Given,Then,When,setDefaultTimeout} from "@cucumber/cucumber"
import { webkit,chromium,firefox,Page,Browser} from '@playwright/test'
import {pageFixure} from "../../../pageFixure"
import * as data from "../../../inputData/testData.json";
import { LoginPage } from "../../../mail-media.page";

setDefaultTimeout(60*1000*2)

let browser:Browser;
let page:Page;
let loginPage:LoginPage;

Given('User navigates to the application', async function () {

   loginPage=new LoginPage(pageFixure.page);
   

   await pageFixure.page.goto(data.baseURL);
   await loginPage.acceptBtn();

   await loginPage.clickLoginBtn();

   //Login Failed validation
       await expect(loginPage.loginFailedMessage).toBeVisible();
       await expect(loginPage.backButton).toBeVisible();
     



    
});

Then('User do not enter the userName {string} and password {string}',async function(){



});
