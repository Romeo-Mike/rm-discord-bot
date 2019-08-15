const Discord = require('discord.js')
const client = new Discord.Client()
var important_stuff = require('./tokens_and_other_sensitive_crap.js');

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
        // List all channels
        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    })
})



client.login(important_stuff.discord_bot_api_key)