# Rolling Spider Network Initiative (SpiNet)
#### Voice Controlled Drone Interface

[[demo of what the drone]](https://www.youtube.com/watch?v=kMM47NrGHT4)
-----------------------------
## Get it Working
### Set Up (Prerequisites)
The SpiNet Initiative does require a few technical skills to get it properly running on your machine.

1. Ensure you have [node.js](https://nodejs.org/en/download/package-manager/)
2. Follow the [noble](https://github.com/sandeepmistry/noble#prerequisites) prereqs for your OS.
3. Create a new [PubNub](https://admin.pubnub.com/#/register?pi_visitorid=219166828&psc=WC-Tracking&pt=wc-tracking) account and channel. (You'll need this if you plan on using our [Spi Net Alexa skill](https://github.com/TylerSmall19/spi-net-skill))

### Getting Spi-Net Configured
1. Once the above lines are complete, clone this repo and cd into it: `git clone https://github.com/TylerSmall19/spi-net.git && cd spi-net`
2. Run `npm install` and follow any prompts that may appear. If you receive issues with the install process, it could be a depenency issue within the third-party node modules. Refer to the documentation for the error received or email the author listed in the `package.json` found at `spi-net/package.json`.
3. Create a new .env file in the root directory: `touch ./.env && open ./.env`
4. Declare your PubNub subscription, channel name, and publishing key variables:
```
# spi-net/.env
PUB_NUB_SUB=[YOUR_SUBSCRIPTION_KEY]
PUB_NUB_PUB=[YOUR_PUBLISHING_KEY]
PUB_NUB_CHANNEL=[YOUR_CHANNEL_NAME]
```

### Running the Client
1. run `npm start` to begin searching for drones. The console will alert you when 'flight ready'.
2. If you're using our accompanying Alexa Skill, configure those files with the instructions [here](https://github.com/TylerSmall19/spi-net-skill).

If you run into issues with these commands and instructions, please open an issue or search the closed issues for similar ones.

------------------------------

## Contributing
We are currently not accepting contributions until after 1.20.2017.
