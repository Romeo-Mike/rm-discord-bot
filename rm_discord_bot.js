const Discord = require('discord.js')
const client = new Discord.Client()
var sourceFile = require('./tokens_and_other_sensitive_crap.js');

console.log(sourceFile.discord_bot_api_key);

client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"
bot_secret_token = "XXXXXXXXXXX"

//client.login(bot_secret_token)