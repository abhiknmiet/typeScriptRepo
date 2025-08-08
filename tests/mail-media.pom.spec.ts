import {test,expect} from './fixures'
import { chromium} from '@playwright/test'

import * as data from "../tests/inputData/testData.json";







test('Login test with Empty userName and passWord',async({ page,baseURL,loginPage })=>{
  
  // const loginPage = new LoginPage(page);
   
   await page.goto(`${baseURL}`);

   await loginPage.acceptBtn();

   await loginPage.clickLoginBtn();

   //Login Failed validation
    await expect(loginPage.loginFailedMessage).toBeVisible();
    await expect(loginPage.backButton).toBeVisible();
  

});

test('Login test with random userName and passWord',async({ page,baseURL,loginPage })=>{
    //  const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
   //   const page:Page=await browser.newPage();
    
    await page.goto(`${baseURL}`);
    await loginPage.acceptBtn();
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPass(data.testPass)
    await loginPage.clickLoginBtn();

    //Login Failed validation
    await expect(page.getByText('Login leider nicht')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Zurück zum Login' })).toBeVisible();
    
    

});

test('Test for Back button',async({ page,baseURL,loginPage })=>{
    
    await page.goto(`${baseURL}`);
    await loginPage.acceptBtn();
    await loginPage.clickLoginBtn();

    await page.getByRole('link', { name: 'Zurück zum Login' }).click();

    //After Back btn click validate login page

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();


});