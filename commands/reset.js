const rankings = require('../rankings.js');

module.exports = {
    name: 'reset',
    description: 'Resets a user\'s rank',
    execute(message,args){
        rankings.resetPoints(message.author)
        message.channel.send(message.author.username + " got reset! Total Points: " + rankings.getScore(message.author));
    }
}