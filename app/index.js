// var noble = require('noble');
// console.log(noble);
// noble.startScanning();

// noble.on('stateChange', function(){
//   console.log("Scanning...");
// });
// console.log("Hello World!");
'use strict';

var RollingSpider = require('rolling-spider');
var temporal = require('temporal');
var rollingSpider = new RollingSpider();
// Kevin
// {uuid: 'RS_B138965'}
// Jon
// {uuid: 'RS_R042799'}

rollingSpider.connect(function () {
  console.log('Paired');
  rollingSpider.setup(function () {
    rollingSpider.flatTrim();
    rollingSpider.startPing();
    rollingSpider.flatTrim();
    temporal.queue([
      {
        delay: 5000,
        task: function () {
          console.log('Takeoff');
          rollingSpider.takeOff();
          rollingSpider.flatTrim();
        }
      },
      {
        delay: 5000,
        task: function () {
          console.log('Forward');
          rollingSpider.forward();
        }
      },
      {
        delay: 3000,
        task: function () {
          rollingSpider.land();
          console.log('Land');
        }
      },
      {
        delay: 3000,
        task: function () {
          temporal.clear();
          process.exit(0);
        }
      }
    ]);
  });
});
