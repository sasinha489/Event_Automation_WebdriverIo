class CommonUtils{

    switchToModal(){

    }

   

    captureScreenshot(path){
        browser.saveScreenshot(path);
    }

    
    captureNetworkLogs(){

       
        var output=browser.mock('**',{method:'get'})
        browser.url('https://regres.in')
       // console.log(output.call)

       


       

    }

}

export default new CommonUtils();