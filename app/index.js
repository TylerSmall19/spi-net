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
    publish_key   : process.env.PUB_NUB_PUB,
    subscribe_key : process.env.PUB_NUB_SUB
});

pubnub.subscribe({
  channel  : process.env.PUB_NUB_CHANNEL,
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
