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
    var generalChannel = client.channels.get("611495158776594449")
    generalChannel.send("To the Gulag!") 
})

client.on('message', (receivedMessage) => {
    // Prevent bot from responding to its own messages
    if (receivedMessage.author == client.user) {
        return
    }
    
    // Check if the bot's user was tagged in the message
    if (receivedMessage.content.includes(client.user.toString())) {
        // Send acknowledgement message
        receivedMessage.channel.send("Message received from " +
            receivedMessage.author.toString() + ": " + receivedMessage.content)
    }
})


client.login(important_stuff.discord_bot_api_key)