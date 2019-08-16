const rankings = require('../rankings.js');
const Discord = require('discord.js');

module.exports = {
    name: 'leaderboard',
    description: 'Prints a pretty leaderboard',
    execute(message, args) {
        let leaders = rankings.getLeaderboard(5);
        let top_dawg = leaders[0];
        let top_dawg_avatar = 'https://cdn.discordapp.com/avatars/' + top_dawg.id + '/' + top_dawg.avatar + '.png?size=64'
        var embed = new Discord.RichEmbed()
            .setTitle("Leaderboard")
            .setThumbnail(top_dawg_avatar)
        leaders.forEach(leader => {
            embed.fields.push(
                {
                    'name': (leaders.indexOf(leader) + 1) + ". " + leader.name,
                    'value': leader.score + " points."
                }
            );
        });
        message.channel.send(embed);
    }
}