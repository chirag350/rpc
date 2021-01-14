const RPC = require('discord-rpc')
const client = new RPC.Client({ transport: 'ipc' });
const config = require('./config.js')
client.on('ready', () => {

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: config.LOWER_TEXT,
            state: config.LOWER_TEXT,
            buttons: [
                { label: config.BUTTON_1_TEXT, url: config.BUTTON_1_URL },
                { label: config.BUTTON_2_TEXT, url: config.BUTTON_2_URL }
            ]
        }
    })

    console.log('RPC has started!')
})

client.login(config.CLIENT_ID);
