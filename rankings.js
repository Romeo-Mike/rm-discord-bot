const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

module.exports = {
    addPoints: function (user, points) {
        users = db.get("users").find({ 'name': user }).value();
        console.log(users)
        if (users != null) {
            console.log(user + " found, updating score");
            db.get("users")
                .find({ 'name': user })
                .update('score', n => n + points)
                .write()
        } else {
            console.log(user + " not found, creating entry");
            db.get('users')
                .push({ name: user, score: points })
                .write()
        }

    },
    resetPoints: function (user) {
        users = db.get("users").find({ 'name': user }).value();
        console.log(users)
        if (users != null) {
            console.log(user + " found, clearing score");
            db.get("users")
                .find({ 'name': user })
                .update('score', n => n = 0)
                .write()
        } else {
            console.log(user + " not found");
        }
    },
    getScore: function (user) {
        users = db.get("users").find({ 'name': user }).value();
        console.log(users)
        if (users != null) {
            return db.get("users")
                .find({ 'name': user }).get("score").value();
        } else {
            console.log(user + " not found");
        }
    },
    getLeaderboard: function (count) {
            return db.get("users")
                .sortBy("score")
                .take(count)
                .value();
    }
}

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [] })
    .write()



