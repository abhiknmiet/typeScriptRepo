
import { webkit, chromium, firefox } from '@playwright/test'
import { test, expect, Browser, Page, Locator } from '@playwright/test'
import { pageFixure } from './pageFixure';

export class LoginPage {
    loginFailedMessage: Locator;
    backButton: Locator;

    constructor(public page: Page) {


        this.loginFailedMessage = this.page.getByText('Login leider nicht');
        this.backButton = this.page.getByRole('link', { name: 'Zurück zum Login' });



    }


    async acceptBtn() {
        await pageFixure.page.locator('iframe[name="landingpage"]').locator('iframe[title="Cookie-Einstellungen erforderlich"]').contentFrame().getByRole('button', { name: 'Akzeptieren und weiter' }).click();

    }

    async clickLoginBtn() {
        await pageFixure.page.getByRole('button', { name: 'Login' }).click();

        


    }

    async enterUserName(userName: string) {

        await this.page.getByRole('textbox', { name: 'E-Mail-Adresse' }).fill(userName);


    }
    async enterPass(passWord: string) {

        await this.page.getByRole('textbox', { name: 'Passwort' }).fill(passWord);


    }


}