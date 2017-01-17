'use strict';

var RollingSpider = require('spi-net');
var temporal = require('temporal');
var rollingSpider = new RollingSpider();

var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : process.env.PUB_NUB_PUB,
    subscribe_key : process.env.PUB_NUB_SUB
});


// Patrol Route Path
RollingSpider.prototype.patrol = function(){
    temporal.queue([
      {
        delay: 5000,
        task: function () {
          rollingSpider.forward({ speed: 50, steps: 50 });
          console.log('Starting patrol...Forward 50 steps');
        }
      },
      {
        delay: 5000,
        task: function () {
          rollingSpider.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
        }
      },
      {
      	delay: 5000,
      	task: function(){
      	  rollingSpider.forward({ speed: 50, steps: 50 });
      	  console.log('Forward 50 steps');
      	  cooldown();
      	}
      },
      {
        delay: 5000,
        task: function () {
          rollingSpider.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
        }
      },      
      {
        delay: 5000,
        task: function () {
          rollingSpider.forward({ speed: 50, steps: 50 });
          console.log('Forward 50 steps');
        }
      },
      {
        delay: 5000,
        task: function () {
          rollingSpider.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
        }
      },
      {
        delay: 5000,
        task: function () {
          rollingSpider.forward({ speed: 50, steps: 50 });
          console.log('Forward 50 steps');
        }
      },  
      {
        delay: 5000,
        task: function () {
          rollingSpider.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
        }
      }, 
      {
        delay: 5000,
        task: function () {
          rollingSpider.forward({ speed: 50, steps: 50 });
          console.log('Forward 50 steps');
        }
      }, 
      {
        delay: 5000,
        task: function () {
          rollingSpider.counterClockwise({ speed: 50, steps: 40 });
          console.log('Finishing patrol');
        }
      }                   
    ]);
};


rollingSpider.connect(function () {
  console.log('Paired...Ready to fly');
  rollingSpider.setup(function () {
    rollingSpider.flatTrim();
    rollingSpider.startPing();
    rollingSpider.flatTrim();
  });
});


pubnub.subscribe({
  channel  : process.env.PUB_NUB_CHANNEL,
  callback : function(message) {
    console.log('Received: ', message);
	
  	switch(message.command) {
  		case "FLY":
  			console.log("Drone is launching...");
  			rollingSpider.takeOff();
  		break;
  		case "FORWARD":
  			console.log("Flying straight");
  			rollingSpider.forward();
  		break;
  		case "BACK":
  			console.log("Flying back");
  			rollingSpider.backward();
  		break;
  		case "RIGHT":
  			console.log("Flying right");
  			rollingSpider.right();
  		break;
  		case "LEFT":
  			console.log("Flying left");
  			rollingSpider.left();
  		break;
  		case "UP":
  			console.log("Flying up");
  			rollingSpider.up();
  		break;
  		case "DOWN":
  			console.log("Flying down");
  			rollingSpider.down();
  		break;
  		case "turn left":
  			console.log("Furning left");
  			rollingSpider.turnLeft();
  		break;
  		case "turn right":
  			console.log("Furning right");
  			rollingSpider.turnRight();
  		break;
  	  case "flip":
  	    console.log("Flipping...");
  	    rollingSpider.frontFlip();
  	  break;
  		case "patrol":
  			console.log("Patroling....");
  			rollingSpider.patrol();
  		break;
  		case "LAND":
  			console.log('Stopping');
  			temporal.clear();
  			rollingSpider.land();
  		break;
  		default:
  			console.log('Invalid Command');
  		break;
  		}
  	}	    
});