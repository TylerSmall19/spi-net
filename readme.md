# Rolling Spider Network Initiative (SpiNet)
#### Voice Controlled Drone Interface
-----------------------------
### Set Up (Prerequisites)
The SpiNet Initiative does require a few technical skills to get it properly running on your machine.

1. Ensure you have [node.js](https://nodejs.org/en/download/package-manager/)
2. Follow the [noble](https://github.com/sandeepmistry/noble#prerequisites) prereqs for your OS. Once the pre-reqs are installed, clone down this repo.
3. Once the above lines are complete, clone down this repo and cd into it: `git clone https://github.com/TylerSmall19/spi-net.git && cd spi-net`
4. Run `npm install` and follow any prompts that may appear. If you receive issues with the install process, it could be a depenency issue within the third-party node modules. Refer to the documentation for the error received or email the author listed in the `package.json` found at `spi-net/package.json`.
5. Create a new .env file: `touch .env`
6. Open the created file with your default text editor `open .env`
7. Input your PubNub subscription, channel name, and publishing keys in the newly created file:
```
# spi-net/.env
PUB_NUB_SUB=[YOUR_SUBSCRIPTION_KEY]
PUB_NUB_PUB=[YOUR_PUBLISHING_KEY]
PUB_NUB_CHANNEL=[YOUR_CHANNEL_NAME]
```
8. run `npm start` to begin searching for drones.
9. If you're using our accompanying Alexa App, configure those files with the instructions [here](https://github.com/TylerSmall19/spi-net-skill).
