'use strict';


var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : process.env.PUB_NUB_PUB,
    subscribe_key : process.env.PUB_NUB_SUB
});


var Swarm = require('rolling-spider').Swarm;
var temporal = require('temporal');


var swarm = new Swarm({timeout: 10});


Swarm.prototype.patrol = function(){
    temporal.queue([
      {
        delay: 5000,
        task: function () {
          console.log('Starting patrol...Forward 50 steps');
          swarm.forward({ speed: 50, steps: 50 });
        }
      },
      {
        delay: 5000,
        task: function () {
          console.log('Turning Left 50 steps');
          swarm.counterClockwise({ speed: 50, steps: 40 });
        }
      },
      {
        delay: 5000,
        task: function(){
          console.log('Forward 50 steps');
          swarm.forward({ speed: 50, steps: 50 });
        }
      },
      {
        delay: 5000,
        task: function () {
          console.log('Turning Left 50 steps');
          swarm.counterClockwise({ speed: 50, steps: 40 });
        }
      },      
      {
        delay: 5000,
        task: function () {
          console.log('Forward 50 steps');
          swarm.forward({ speed: 50, steps: 50 });
        }
      },
      {
        delay: 5000,
        task: function () {
          console.log('Turning Left 50 steps');
          swarm.counterClockwise({ speed: 50, steps: 40 });
        }
      },
      {
        delay: 5000,
        task: function () {
          console.log('Forward 50 steps');
          swarm.forward({ speed: 50, steps: 50 });
        }
      },  
      {
        delay: 5000,
        task: function () {
          console.log('Turning Left 50 steps');
          swarm.counterClockwise({ speed: 50, steps: 40 });
        }
      }, 
      {
        delay: 5000,
        task: function () {
          console.log('Forward 50 steps');
          swarm.forward({ speed: 50, steps: 50 });
        }
      }, 
      {
        delay: 5000,
        task: function () {
          console.log('Finishing patrol');
          swarm.counterClockwise({ speed: 50, steps: 40 });
        }
      }                   
    ]);
};


swarm.assemble();


swarm.on('assembled', function () {
  console.log('Paired with the swarm')
    
  pubnub.subscribe({
  channel  : process.env.PUB_NUB_CHANNEL,
  callback : function(message) {
    console.log('Received: ', message);
    
    switch(message.command) {
      case "FLY":
          console.log("Swarm is taking off");
          swarm.takeOff();
      break;
      case "FORWARD":
          console.log("Swarm is flying straight");
          swarm.forward();
      break;
      case "BACK":
          console.log("Swarm is flying back");
          swarm.backward();
      break;
      case "RIGHT":
          console.log("Swarm is flying right");
          swarm.right();
      break;
      case "LEFT":
          console.log("Swarm is flying left");
          swarm.left();

      break;
      case "UP":
          console.log("Swarm is flying up");
          swarm.up();
      break;
      case "DOWN":
          console.log("Swarm is flying down");
          swarm.down();
      break;
      case "turn left":
          console.log("Swarm is turning left");
          swarm.turnLeft();
      break;
      case "turn right":
          console.log("Swarm is turning right");
          swarm.turnRight();
      break;
      case "flip":
          console.log("Swarm is front-flipping...");
          swarm.frontFlip();
      break;
      case "patrol":
          console.log("Swarm patroling....");
          swarm.patrol();
      break;
      case "LAND":
          console.log('Swarm is landing');
          temporal.clear();
          swarm.land();
      break;
      default:
          console.log('Invalid Command');
      break;
      }
    }
  });
});