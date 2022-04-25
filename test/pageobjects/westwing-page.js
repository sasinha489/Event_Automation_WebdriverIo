
import { expect } from 'chai';
import commonUtil from '../../utilities/common-util';
import Page from './page';
import stringify from 'json-stringify';

class WestwingPage extends Page  {
  /**
  * define elements
  */
  get searchInput()   {return $("//input[@data-testid='search-input']"); }
  get acceptCookie()  {return $("//button[@id='onetrust-accept-btn-handler']"); }
  get productList()   {return $("//div[@class='ProductGrid__StyledGrid-zyj4tq-0 fjUkRM']"); }
  get productListTitle() {return $$("//div[@data-testid='product-title']"); }
  get firstItemWishList(){return $("//div[@data-testid='wishlist-icon'][1]");}
  get emailInputBox() {return $("[name='email']");}
  get passwordInputBox() {return $("[name='password']"); }
  get isTermAccepted () { return $("[name='isClubNewsletterSubscribed']");}
  get registerButton() {return $("//button[@type='submit']");}
  get wishlistIcon() {return $("//span[@data-testid='wishlist-counter']"); }
  get wishlistDel() {return $(".blockListProduct__delete"); }

  // Discovery 
  get waitforElement() {return $("//p[text()='Shows']");}

  /**
   * define or overwrite page methods
   */


    waitForElementToLoad(){
      browser.pause(10000);
      //$("//p[text()='Shows']").click();
      $("//p[text()='Shows']").click(function () {
      console.log('Show Button clicked');
    }); 


    }


  open () {
     // super.open('/');      
      browser.pause(10000);
     // browser.maximizeWindow();
      //browser.pause(10000);
      //browser.waitUntil(() => this.waitforElement.isClickable());
   
    //this.waitforElement.click();
  }

  waitForElementToLoad(){
    browser.waitUntil(() => $("//p[text()='Shows']").isClickable());
    $("//p[text()='Shows']").click(function () {
      console.log('Show Button clicked');
    });
    browser.pause(10000);
  }

  writeFileJson(){
    fs.writeFile(Key+'.json',JSON.stringify(output.calls[Key]),function(err){
        if(err) throw err;
    })
}
  acceptCookieBanner(){
    this.acceptCookie.isDisplayed();
    this.acceptCookie.click();
  }

  searchItem (item) {
     this.searchInput.isDisplayed();
    // browser.waitUntil(() => this.searchInput.isClickable());
     this.searchInput.setValue(item);
   
     browser.pause(5000);
     browser.keys("\uE007");
     browser.pause(5000);
  }


  productListGridIsDisplayed(){
   // browser.waitUntil(()=>this.productList.isDisplayed());
    // this.productListTitle.map((title)=>{
    //   console.log(title.getText());
    // })
    this.productList.isDisplayed();
    
    console.log(this.productListTitle[0].getText());
    
  }

  wishListFirstItem(){
    browser.pause("5000");
    this.firstItemWishList.click();
    browser.pause("5000");
  }

  loginModalPopup(){

    this.emailInputBox.setValue("kaushiktd@gmail.com");
    this.passwordInputBox.setValue("Feb@2021");
    this.isTermAccepted.click();
    this.registerButton.click();
    browser.pause(5000);

  }



  assertWishlistCounter(){
    browser.pause("5000");
    expect(this.wishlistIcon.getText()).to.equal("1");
    commonUtil.captureScreenshot("./screenshots/wishlist.png");
  }

  clickAndNavigateToWishList(){
    
    this.wishlistIcon.click();
    
  }

  deleteWishlist(){
    this.wishlistDel.click();
    commonUtil.captureScreenshot("./screenshots/deleted.png");
  }


}

export default new WestwingPage();
