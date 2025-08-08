import {test,expect,Browser,Page} from '@playwright/test'
import { webkit,chromium,firefox} from '@playwright/test'





test('Login test with Empty userName and passWord',async()=>{
   const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
   const page:Page=await browser.newPage();

   await page.goto("http://www.gmx.net/");


   await page.locator('iframe[name="landingpage"]').contentFrame().locator('iframe[title="Cookie-Einstellungen erforderlich"]').contentFrame().getByRole('button', { name: 'Akzeptieren und weiter' }).click();

   await page.getByRole('button', { name: 'Login' }).click();

   //Login Failed validation
   await expect(page.getByText('Login leider nicht')).toBeVisible();
   await expect(page.getByRole('link', { name: 'Zurück zum Login' })).toBeVisible();
  

});

test('Login test with random userName and passWord',async()=>{
      const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
      const page:Page=await browser.newPage();
    
    await page.goto("http://www.gmx.net/");
    await page.locator('iframe[name="landingpage"]').contentFrame().locator('iframe[title="Cookie-Einstellungen erforderlich"]').contentFrame().getByRole('button', { name: 'Akzeptieren und weiter' }).click();
    await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).click();
    
    await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill('testName');
    
   
    await page.getByRole('textbox', { name: 'Passwort' }).click();
    await page.getByRole('textbox', { name: 'Passwort' }).fill('testpassword');
    await page.screenshot({path:'loginPage.png'});
    await page.getByRole('button', { name: 'Login' }).click();

    //Login Failed validation
    await expect(page.getByText('Login leider nicht')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Zurück zum Login' })).toBeVisible();

    
});

test('Test for Back button',async()=>{
      const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
      const page:Page=await browser.newPage();
    
    await page.goto("http://www.gmx.net/");
    await page.locator('iframe[name="landingpage"]').contentFrame().locator('iframe[title="Cookie-Einstellungen erforderlich"]').contentFrame().getByRole('button', { name: 'Akzeptieren und weiter' }).click();
   
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Zurück zum Login' }).click();

    //After Back btn click, validate login page

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();


});


test.only('Login test with valid userName and passWord',async()=>{
  const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
  const page:Page=await browser.newPage();

await page.goto("http://www.gmx.net/");
await page.locator('iframe[name="landingpage"]').contentFrame().locator('iframe[title="Cookie-Einstellungen erforderlich"]').contentFrame().getByRole('button', { name: 'Akzeptieren und weiter' }).click();
await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).click();

await page.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill('interview12345@gmx.de');


await page.getByRole('textbox', { name: 'Passwort' }).click();
await page.getByRole('textbox', { name: 'Passwort' }).fill('thisissafe12345');
await page.screenshot({path:'loginPage.png'});
await page.getByRole('button', { name: 'Login' }).click();

await expect(page.getByText('E-Mail schreiben')).toBeVisible();

});
