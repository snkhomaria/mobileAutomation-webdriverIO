import Page from './page.js';

class WelcomePage extends Page {
    get inputName() {
        return $('com.fghilmany.dietmealapp:id/et_name');
    }

    get inputWeight() {
        return $('com.fghilmany.dietmealapp:id/et_weight');
    }

    get inputHeight() {
        return $('com.fghilmany.dietmealapp:id/et_height');
    }

    get inputGender() {
        return $('com.fghilmany.dietmealapp:id/rb_female');
    }

    get btnNext() {
        return $('com.fghilmany.dietmealapp:id/bt_next'); 
    }

    get inputDaily() {
        return $('com.fghilmany.dietmealapp:id/rb_low_to_medium');
    }

    get btnSelesai() {
        return $('com.fghilmany.dietmealapp:id/bt_finish');
    }

    get assertHome() {
        return $('com.fghilmany.dietmealapp:id/tv_header_name');
    }

    async InputData() {
        await this.inputName.setValue('Ria');
        await this.inputWeight.setValue('42');
        await this.inputHeight.setValue('155');
        await this.inputGender.click();
        await this.btnNext.click();
    }

    async dailyActivity () {
        await this.inputDaily.click();
        await this.btnSelesai.click();
    }

    async verifyHome() {
        await expect(this.assertHome).toHaveContaining('Hi');
    }
}

export default new WelcomePage();