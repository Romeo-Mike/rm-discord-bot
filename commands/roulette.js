const rankings = require('../rankings.js');
module.exports = {
    name: 'roulette',
    description: 'Plays a round of Russian Roulette',
    execute(message,args){
        var theone = Math.floor(Math.random() * 6)
        if (theone <= 1) {
            message.channel.send("Bang. You\'re dead! No points for you...")
            rankings.resetPoints(message.author)
        }
        else {
            message.channel.send("Click! " + message.author.username + " survived! +10 points!")
            rankings.addPoints(message.author, 10);
        }
    }
}