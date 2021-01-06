# Discord Rich Presence Client in Node.js
One of the only RP Clients with clickable buttons (you cant click buttons on your own profile) using the NPM package `@discordjs/discord-rpc`
# Setting up
- Install [nodejs](nodejs.org), idk why but ONLY node v12 works 
- Clone this repo on your local machine
- open rpc.js in a code editor/notepad
- edit the things u want
- Go to [discord dev portal](https://discord.com/developers/applications) and create a new app, named anything u want (this will be visible on your profile as `Playing name`)
- copy the client ID and paste it in rpc.js
- open a new terminal/command prompt window, and do `cd path/to/folder`
- then do `npm install` to install the npm packages from package.json
- then do `node rpc.js` to run the RPC, (u can also use pm2, forever, nodemon)<br/>
Tested on KDE neon, Manjaro, Ubuntu, Windows 10/7 (should work on mac too)
Thanks to AliTheKing#9129 for helping