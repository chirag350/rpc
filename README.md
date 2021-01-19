# Discord Rich Presence Client in Node.js
One of the only Rich Presence Clients with clickable buttons and changeable text using discord itself(you can't click buttons on your own profile) using the NPM package `@discordjs/discord-rpc`
NOTE: You have to host this on your pc, won't work if you host it on a vps as discord needs to be open and logged in if you use this.
NOTE: THIS IS NOT A SELF BOT.
# Setting up
- Install [nodejs](nodejs.org), this script is only compatible with Node.js v12.20.0
- Clone this repo on your local machine
- Open config.js
- Enter your config information
- Go to [discord dev portal](https://discord.com/developers/applications) and create a new app, named anything u want (this will be visible on your profile as `Playing name`)
- Then, in the app go to rich presence and click on art assets
- Then scroll down and copy the image name, then paste it in config.js in `LARGE_IMAGE_NAME` thanks to [@BearTS](https://github.com/BearTS) for helping with this
- Then go back to dev portal, click on general info
- Copy the client ID and paste it in config.js
- Then go to bot in dev portal and click on add bot, and paste the bot token in config.js
- Open discord, and copy your own user id. see https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID
- Choose a good prefix
- Invite your bot to a server using https://discordapi.com/permissions.html
- Open a new terminal/command prompt window, and do `cd path/to/folder`
- Then do `npm install` to install the npm packages from package.json
- Then do `node rpc.js` to run the RPC, (you can also use pm2, forever, nodemon)<br/>
Tested on KDE neon, Manjaro, Ubuntu, Windows 10/7 (should work on mac too)
