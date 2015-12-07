"use strict";
var Matchup = require('./matchup.server.model');
var request = require('request');


exports.getMatchups = function(req, res, next) {
  // temp();
  Matchup.find({})
    .exec(function(err, friends) {
      if (err) res.status(500).send(err);
      else res.json(friends);
    });
};


exports.getOneMatchup = function(req, res, next) {
  http.get
  Matchup.findById(req.params.id)
    .exec(function(err, friend) {
      if (err) res.status(500).send(err);
      else res.json(friend);
    });
};


exports.postMatchup = function(req, res, next) {

  var friend = new Matchup(req.body);
  friend.save(function(err) {

    if (err) res.send(err);
    else res.json(friend);
  });
};


exports.putMatchup = function(req, res, next) {

  Matchup.findById(req.params.id)
    .exec(function(err, friend) {

      if (err) res.status(500).send(err);
      else {
        friend.name = req.body.name;
        friend.age = req.body.age;
        friend.save();
        res.json(friend);
      }
    });
};


exports.deleteMatchup = function(req, res, next) {

  Matchup.findById(req.params.id)
    .remove(function(err) {

      if (err) res.status(500).send(err);
      else res.status(204).send('Removed');
    });
};

function temp() {
  request("https://www.kimonolabs.com/api/50yzhwz2?apikey=Vj1A7atUmZq8lM7vE0pBvqE4Dnw40G9R", function(err, response, body) {
    var parsed = JSON.parse(body)
    var teams = parsed.results.collection1;
    console.log(teams);
  });
}
