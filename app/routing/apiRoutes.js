// A GET route with the url / api / friends.This will be used to display a JSON of all possible friends.
// A POST routes / api / friends.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.
var friendsArray = require('../data/friends');

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });


    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        var matchFriend = friendsArray[Math.floor(Math.random() * friendsArray.length)];
        console.log(matchFriend)
        res.json(matchFriend);
        friendsArray.push(req.body)
    });


};
