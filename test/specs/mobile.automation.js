import WelcomePage from '../pageobjects/welcome.page.js'

describe('Open Application and go to Home Page',() => {
    it('should open apps', async() => {
        await $('android.widget.TextView[@content-desc="Diet Meal App"]').click();
    })

    it ('User input data on Welcoming Page', async() => {
        await WelcomePage.InputData();
        await WelcomePage.dailyActivity();
    })

    it ('User direct to Home Page', async() => {
        await WelcomePage.verifyHome('Hi');
    })
})