var Team = require('./team.server.model.js');

exports.getTeams = function (req, res, next) {
  var str = build();
  res.status(200).send(str);
};
// split out so a new team could be created on the fly someday
var saveTeams = function (teams, callback) {
  Team.create(teams, callback);
}

exports.postTeams = function (req, res, next) {
  saveTeams(req.body, function (err, result) {
    if (err) res.status(500).send(err);
    console.log(req.body.length, ' teams saved');
    res.send(result);
  })
};

exports.saveTeams = saveTeams;
