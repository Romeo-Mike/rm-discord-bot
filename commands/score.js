const rankings = require('../rankings.js');

module.exports = {
    name: 'score',
    description: 'Returns a user\'s score',
    execute(message,args){
        message.channel.send(message.author.username + " has " + rankings.getScore(message.author) + " points.");
    }
}