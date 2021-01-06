const RPC = require('discord-rpc')
const clientId = 'put client id here'; // replace with yours
const client = new RPC.Client({ transport: 'ipc' });

client.on('ready', () => {

    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `Upper Text`,
            state: 'Lower Text',
            assets : {
                large_image : "image_key",
                large_text : "Custom text" // this is shown when hovered over the image
            },
            buttons: [
                { label: 'Button 1', url: 'URL 1' },
                { label: 'Button 2', url: 'URL 2' }
            ]
        }
    })

    console.log('RPC has started!')
})

client.login({ clientId });
