# Rolling Spider Network Initiative (SpiNet)
#### Voice Controlled Drone Interface
-----------------------------
## Get it Working
### Set Up (Prerequisites)
The SpiNet Initiative does require a few technical skills to get it properly running on your machine.
1. Ensure you have [node.js](https://nodejs.org/en/download/package-manager/)
2. Follow the [noble](https://github.com/sandeepmistry/noble#prerequisites) prereqs for your OS.

### Getting Spi-Net Configured
1. Once the above lines are complete, clone this repo and cd into it: `git clone https://github.com/TylerSmall19/spi-net.git && cd spi-net`
2. Run `npm install` and follow any prompts that may appear. If you receive issues with the install process, it could be a depenency issue within the third-party node modules. Refer to the documentation for the error received or email the author listed in the `package.json` found at `spi-net/package.json`.
3. Create a new .env file in the root directory: `touch ./.env && open ./.env`
4. Input your PubNub subscription, channel name, and publishing keys in the newly created file:
```
# spi-net/.env
PUB_NUB_SUB=[YOUR_SUBSCRIPTION_KEY]
PUB_NUB_PUB=[YOUR_PUBLISHING_KEY]
PUB_NUB_CHANNEL=[YOUR_CHANNEL_NAME]
```

### Running the Client
1. run `npm start` to begin searching for drones. The console will alert you when 'flight ready'.
2. If you're using our accompanying Alexa App, configure those files with the instructions [here](https://github.com/TylerSmall19/spi-net-skill).

If you run into issues with these commands and instructions, please open an issue or search the closed issues for similar bugs.

------------------------------
## Contributing
We are currently not accepting contributions until after 1.20.2017.
