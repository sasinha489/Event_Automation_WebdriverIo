import westwingPage from '../pageobjects/westwing-page.js';
import stringify from 'json-stringify';
import { type } from 'os';



var fs=require('fs');

//const { default: westwingPage } = require('../pageobjects/westwing-page');
describe('Schema Validation',()=>{

    // it('Capture Events Logs',()=>{

    //   // westwingPage.open();

    //     var waitforElement="//p[text()='Watch Live']";
    //    var output=browser.mock('**',{method:'get'});
    //    // browser.url('https://developer:certainvictorycoolrun@test-tve.concert.mercury.dnitv.com')
    //     browser.url('https://reqres.in/')
    //     browser.pause(10000);
    //     browser.maximizeWindow();
    //     browser.pause(100000);
        
    //     //browser.pause(10000);
     
    // //   $("//p[text()='Shows']").click(function () {
    // //   console.log('Show Button clicked');
    // // }); 
    //     Object.keys(output.calls).forEach(function(Key){

    //         console.log(output.calls[Key].url)
    //         fs.writeFile(Key+'.json',JSON.stringify(output.calls[Key]),function(err){
    //             if(err) throw err;
    //         })
    //     })

    // });

    it('Validate  data of browser schema',() =>{

        fs.readFile('/Users/saksinha/Downloads/webdriver-io-mocha-main/1_del.json','utf-8',(err,jsonString)=>{
           // console.log(jsonString)
            try{
            const data =JSON.parse(jsonString);
            console.log(data.postData);
            const payloads=JSON.parse(data.postData);
            console.log('######  Schema Detail  ######');
            console.log('Schema Name--',payloads[1].type);
            console.log('Action->',payloads[1].payload.action);
            console.log('Seesion Id-->',payloads[1].sessionId);
            console.log('Screen Name-->',payloads[1].payload.screenName);
            console.log('Screen URI',payloads[1].payload.screenURI);
            console.log('contentLoadTime',payloads[1].payload.contentLoadTime);
            console.log('screenPaintTime',payloads[1].payload.screenPaintTime);
            }catch(err){
                console.log('error parsing json',err);
            }
        })
     } );

     it('Multiple Schema Validation  ',() =>{

        console.log('######  Multiple Schema Validation  ######');

        fs.readFile('/Users/saksinha/Downloads/webdriver-io-mocha-main/2_del.json','utf-8',(err,jsonString)=>{
           // console.log(jsonString)
            try{
            const data =JSON.parse(jsonString);
            //console.log(data.postData);
            const payloads=JSON.parse(data.postData);

            
            console.log('###### Intercation Schema Detail ######');
            console.log('Schema Name--',payloads[1].type);
            console.log('Action->',payloads[1].payload.action);
            console.log('Seesion Id-->',payloads[1].sessionId);
            console.log('Screen Name-->',payloads[1].payload.screenName);
            console.log('Screen URI--->',payloads[1].payload.screenURI);
            console.log('Location--->',payloads[1].payload.location);
            console.log('Location Psoition--->',payloads[1].payload.locationPosition);

        
            }catch(err){
                console.log('error parsing json',err);
            }
        })

        fs.readFile('/Users/saksinha/Downloads/webdriver-io-mocha-main/1_del.json','utf-8',(err,jsonString)=>{
            // console.log(jsonString)
             try{
             const data =JSON.parse(jsonString);
             console.log(data.postData);
             const payloads=JSON.parse(data.postData);
             console.log('######  Schema Detail  ######');
             console.log('Schema Name--',payloads[1].type);
             console.log('Action->',payloads[1].payload.action);
             console.log('Seesion Id-->',payloads[1].sessionId);
             console.log('Screen Name-->',payloads[1].payload.screenName);
             console.log('Screen URI',payloads[1].payload.screenURI);
             console.log('contentLoadTime',payloads[1].payload.contentLoadTime);
             console.log('screenPaintTime',payloads[1].payload.screenPaintTime);
             }catch(err){
                 console.log('error parsing json',err);
             }
         })
     } );


     it('Validate  data for Interaction schema',() =>{

        fs.readFile('/Users/saksinha/Downloads/webdriver-io-mocha-main/2_del.json','utf-8',(err,jsonString)=>{
           // console.log(jsonString)
            try{
            const data =JSON.parse(jsonString);
            //console.log(data.postData);
            const payloads=JSON.parse(data.postData);

            console.log('-------------------------------------------');
            console.log('###### Intercation Schema Detail ######');
            console.log('Schema Name--',payloads[1].type);
            console.log('Action->',payloads[1].payload.action);
            console.log('Seesion Id-->',payloads[1].sessionId);
            console.log('Screen Name-->',payloads[1].payload.screenName);
            console.log('Screen URI--->',payloads[1].payload.screenURI);
            console.log('Location--->',payloads[1].payload.location);
            console.log('Location Psoition--->',payloads[1].payload.locationPosition);

        
            }catch(err){
                console.log('error parsing json',err);
            }
        })
     } );

     it('Negative Case :- Validate Schema attribute',() =>{


        var attribute = ['action','sessionId'];
        var arrayLen=attribute.length;

        console.log('###### Negative Test case ##########')
        fs.readFile('/Users/saksinha/Downloads/webdriver-io-mocha-main/1_del.json','utf-8',(err,jsonString)=>{
           // console.log(jsonString)
            try{
            var data =JSON.parse(jsonString);
            //console.log(data.postData);
            var payloads=JSON.parse(data.postData);

            // console.log('-------------------------------------------');
            // console.log('###### Intercation Schema Detail ######');
            // console.log('Schema Name--',payloads[1].type);
            // console.log('Action->',payloads[1].payload.action);
            // console.log('Seesion Id-->',payloads[1].sessionId);
            // console.log('Screen Name-->',payloads[1].payload.screenName);
            // console.log('Screen URI--->',payloads[1].payload.screenURI);
            // console.log('Location--->',payloads[1].payload.location);
            // console.log('Location Psoition--->',payloads[1].payload.locationPosition);

            

            if(attribute.hasOwnProperty('action')){
                console.log(' action attribute present');
            }else{
                console.log('Action attribute is not present ',err);
            }
                  
            }catch(err){
                console.log('error parsing json',err);
            }
        })
     } );



    // it('capture the events from browser', () => {
    //     browser.url('https://developer:certainvictorycoolrun@test-tve.concert.mercury.dnitv.com');
    //     browser.pause(10000);
    //     browser.maximizeWindow();
    //     browser.setupInterceptor(); 
    //     browser.pause(10000);
    //    // browser.click("//p[text()='Shows']")
    //     $("//p[text()='Shows']").click();
    //     console.log('Show button clicked')
    //     //$("//button[@onclick='throwReferenceError()']").click();
    //     var request = browser.getRequests();   
        
    //     console.log(browser.expectRequest('POST','/events/v1', 200));
    //    // console.log(request[0].body);   
    //     });

});

