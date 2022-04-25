
// import { expect } from 'chai';
// import { addProperty } from 'chai/lib/chai/utils';
import stringify from 'json-stringify';
class Android {



    get userName()   {return $("//*[@content-desc=‘e-mail’ and @class=‘android.widget.EditText’]"); }
    get passWord()   {return $("//*[@class=‘android.widget.EditText’ and @content-desc=‘password’]"); }
    get acceptButton()  {return $("//*[contains(@text,‘I Accept’)]"); }
    get clickOk()   {return $("//*[@text=‘OK’ and @class=‘android.widget.Button’]"); }
    get onBoarding()   {return $("//*[@text=‘GO TO ONBOARDING’]"); }
    get clickSignIn()   {return $("//* [@text= ‘Sign In’ and @class=‘android.widget.Button’]"); }
    get clickContinue()   {return $("//*[@class=‘android.view.ViewGroup’ and  @content-desc=‘continue’]"); }




    // launch(){

    //     var insertTextSelector = await $(‘android=new UiSelector().resourceId(“org.wikipedia.alpha:id/search_src_text”)’);
    //     await insertTextSelector.click();
        
    // }
    
    SignIn(){
            //browser.pause(10000);
            
            this.acceptButton.click();
            browser.pause(10000);
            this.clickOk.click();
            browser.pause(10000);
            this.onBoarding.click();
            browser.pause(10000);
            this.clickSignIn.click();
            browser.pause(10000);
            this.acceptButton.click();
            browser.pause(10000);
            this.userName.setValue("android.uk.prod.total_plus_cmore_sport1.tier7@test.com");
            browser.pause(10000);
            this.passWord.setValue("Androidteam123");
            browser.pause(10000);

            this.clickContinue.click();
            browser.pause(10000);

        
    }
}
export default new Android();