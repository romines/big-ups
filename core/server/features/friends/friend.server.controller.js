var Matchup = require('./friend.server.model');


exports.getMatchups = function(req, res, next) {

  Matchup.find({})
    .exec(function(err, friends) {

      if (err) res.status(500).send(err);
      else res.json(friends);
    });
};


exports.getOneMatchup = function(req, res, next) {

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
