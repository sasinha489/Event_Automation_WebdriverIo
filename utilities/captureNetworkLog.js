
var fs=require('fs')
describe('Capture Networks Logs',()=>{

    it('Capture ALL Get calls',()=>{

        var output=browser.mock('**',{method:'get'})
        browser.url('https://regres.in')
        console.log(output.call)

        Object.keys(output.calls).forEach( function(Key){
            console.log(output.calls[Key].url)
            fs.writefule(Key+'.json'.JSON.stringify(output.calls[Key]),function(err){
                if(err) throw err;
            })
        })

    });

});