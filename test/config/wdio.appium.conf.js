const { config } = require('./wdio.shared.conf')
exports.config = {
    ...config,
    ...{

        user: process.env.BROWSERSTACK_USERNAME || 'saketkumarsinha_AnzX52',
        key: process.env.BROWSERSTACK_ACCESS_KEY || 'agZKY4h7scUSMNNqGBcN',
      
      services: ['browserstack'],
      capabilities: [
        {
            project: "First Webdriverio Android Project",
            build: 'Webdriverio Android',
            name: 'first_test',
            device: 'Google Pixel 3',
            os_version: "9.0",
            'browserstack.geoLocation': 'gb',
            //geoLocation: 'gb',
            networkLogs: "true",
            'browserstack.networkLogs': 'true',
            app: process.env.BROWSERSTACK_APP_ID || 'bs://387b97ee9779095eb915d3fa5753f7f3a33d45a5',
            debug: "true"
        }
      ]
    }
}