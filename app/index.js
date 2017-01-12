var noble = require('noble');
console.log(noble);
noble.startScanning();

noble.on('scanStart', function(){
  console.log("Scanning...");
});
console.log("Hello World!");
