const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.js')
module.exports = {
    name: "setlowertext",
    description: "Set the lower text or state section of your rpc.",


    async execute(client, message, args) {
        if (!args[0]) return message.channel.send("Please enter a text\n Usage: `setlowertext your text here`")
        let text = args.join(" ")
        if (text.length <= 2) return message.channel.send('Invalid length, make sure its above 2 charecters') 
        db.set(`state_${message.author.id}`, text)
        let details = await db.fetch(`detail_${message.author.id}`)
        if (!details || details === 'null') details = config.UPPER_TEXT
        let state = await db.fetch(`state_${message.author.id}`)
        if (!state || state === 'null') state = config.LOWER_TEXT
        message.channel.send(`Done!\nNote: only use this command once every 30s`)
        client.request('SET_ACTIVITY', {
            pid: process.pid,
            activity: {
                details: details,
                state: state,
                assets: {
                    large_image: config.LARGE_IMAGE_NAME,
                    large_text: config.LARGE_IMAGE_TEXT
                },
                buttons: [
                    { label: config.BUTTON_1_TEXT, url: config.BUTTON_1_URL },
                    { label: config.BUTTON_2_TEXT, url: config.BUTTON_2_URL }
                ]
            }
        })
    }
};

