var build = require('../../services/build-team.js');
var Team = require('./team.server.model.js');
// /home/adam/Source/000_projects/bigUps/core/server/services/build-team.js

exports.getTeams = function (req, res, next) {
  // console.log(build);
  var str = build();
  res.status(200).send(str);
};

var saveTeams = function (teams, callback) {
  Team.create(teams).then(callback)
}

exports.postTeam = function (req, res, next) {
  saveTeams(req.body, function (err) {
    if (err) res.status(500).send(err)
    console.log(req.body.length, ' teams saved');
  })
  // res.send(req.body)
};
