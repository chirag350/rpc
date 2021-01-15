const Discord = require('discord.js');
const db = require('quick.db')
const config = require('../config.js')
module.exports = {
    name: "help",
    description: "help u",


    async execute(client, message, args) {
        message.channel.send("Commands:\nsetlowertext\nsetuppertext")
    }
};