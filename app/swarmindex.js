'use strict';

var pubnub = require("pubnub")({
    ssl           : true,  // <- enable TLS Tunneling over TCP
    publish_key   : process.env.PUB_NUB_PUB,
    subscribe_key : process.env.PUB_NUB_SUB
});


var Swarm = require('rolling-spider').Swarm;
var temporal = require('temporal');

var swarm = new Swarm({membership: process.env.SWARM_INDEX});

Swarm.prototype.patrol = function(){
    temporal.queue([
      {
        delay: 5000,
        task: function () {
          swarm.forward({ speed: 50, steps: 50 });
          console.log('Starting patrol...Forward 50 steps');
          
        }
      },
      {
        delay: 5000,
        task: function () {
          swarm.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
          
        }
      },
      {
        delay: 5000,
        task: function(){
          swarm.forward({ speed: 50, steps: 50 });
          console.log('Forward 50 steps');
          
        }
      },
      {
        delay: 5000,
        task: function () {
          swarm.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
          
        }
      },      
      {
        delay: 5000,
        task: function () {
          swarm.forward({ speed: 50, steps: 50 });
          console.log('Forward 50 steps');
          
        }
      },
      {
        delay: 5000,
        task: function () {
          swarm.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
          
        }
      },
      {
        delay: 5000,
        task: function () {
          swarm.forward({ speed: 50, steps: 50 });
          console.log('Forward 50 steps');
          
        }
      },  
      {
        delay: 5000,
        task: function () {
          swarm.counterClockwise({ speed: 50, steps: 40 });
          console.log('Turn Left 50 steps');
          
        }
      }, 
      {
        delay: 5000,
        task: function () {
          swarm.forward({ speed: 50, steps: 50 });
          console.log('Forward 50 steps');
          
        }
      }, 
      {
        delay: 5000,
        task: function () {
          swarm.counterClockwise({ speed: 50, steps: 40 });
          console.log('Finishing patrol');
          
        }
      }                   
    ]);
};

swarm.assemble();

swarm.on('assembled', function () {
    console.log('Connected...')
    console.log(process.env.SWARM_INDEX)
    pubnub.subscribe({
    channel  : process.env.PUB_NUB_CHANNEL,
    callback : function(message) {
            console.log( " > ", message );
            console.log(message.command);
            console.log(swarm.status)
            switch(message.command) {
              case "FLY":
                  console.log("take Off");
                  // swarm.flatTrim();
                  console.log(swarm.connected);
                  swarm.takeOff();
              break;
              case "straight":
                  console.log("flying straight");
                  swarm.forward();
              break;
              case "back":
                  console.log("flying back");
                  swarm.backward();
              break;
              case "RIGHT":
                  console.log("flying right");
                  swarm.right();
              break;
              case "LEFT":
                  console.log("flying left");
                  swarm.left();

              break;
              case "UP":
                  console.log("flying up");
                  swarm.up();
              break;
              case "DOWN":
                  console.log("flying down");
                  swarm.down();
              break;
              case "turn left":
                  console.log("turning left");
                  swarm.turnLeft();
              break;
              case "turn right":
                  console.log("turning right");
                  swarm.turnRight();
              break;
              case "flip":
                  console.log("flipping...");
                  swarm.frontFlip();
              break;
              case "patrol":
                  console.log("patroling....");
                  swarm.patrol();
              break;
              case "LAND":
                  console.log('Stopping');
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