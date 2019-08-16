module.exports = {
    name: 'showme',
    description: 'Vanity FTW!',
    execute(message, args) {
        var embed = new Discord.RichEmbed()
            .setTitle(message.author.username)
            .setImage('https://cdn.discordapp.com/avatars/' + message.author.id + '/' + message.author.avatar + '.png?size=64')
        message.channel.send(embed);
    }
}