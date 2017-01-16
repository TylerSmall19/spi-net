// var noble = require('noble');
// console.log(noble);
// noble.startScanning();

// noble.on('stateChange', function(){
//   console.log("Scanning...");
// });
// console.log("Hello World!");
'use strict';

// var RollingSpider = require('rolling-spider');
// var temporal = require('temporal');
// var rollingSpider = new RollingSpider();
// Kevin
// {uuid: 'RS_B138965'}
// Jon
// {uuid: 'RS_R042799'}

var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : "pub-c-5c099dc9-4fb8-41d4-a462-54224a4f47d7",
    // publish_key   : [YOUR_PUBNUB_PUB_KEY_HERE],
    subscribe_key : "sub-c-78d941e8-d9b7-11e6-b9cf-02ee2ddab7fe"
    // subscribe_key : [YOUR_PUBNUB_SUB_KEY_HERE]
});

pubnub.subscribe({
  channel  : "sky_net",
  callback : function(message) {
    console.log('Received: ', message);
  }
});

// rollingSpider.connect(function () {
//   console.log('Paired');
//   rollingSpider.setup(function () {
//     // Logic to run commands here
//   });
// });
