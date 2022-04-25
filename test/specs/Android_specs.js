
import Android from '../pageobjects/Android.js';




describe('Schema Validation',()=>{

    it('Capture Events Logs',()=>{

       // westwingPage.open();
       // $('android=new UiSelector().Resource-Id("com.discovery.dplay.enterprise:id/btn_accept_cookies")').click();
      //  var output=browser.mock('**/cms/configs/artemis-android',{method:'get'})
      
      //  console.log(output.calls);
       
  
        // $('//*[@resource-id=“com.discovery.dplay.enterprise:id/btn_accept_cookies”]').on('click',function () {
        //     console.log('Button clicked');
        //   });
      
       const elem= $('//*[@resource-id=“com.discovery.dplay.enterprise:id/btn_accept_cookies”]')
       elem.click();
     

      //console.log(text);

     //Android.SignIn();

      

    });

});