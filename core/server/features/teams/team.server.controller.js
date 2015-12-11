var Team = require('./team.server.model.js');

exports.getTeams = function (req, res, next) {
  // console.log(build);
  var str = build();
  res.status(200).send(str);
};

exports.saveTeams = function (teams, callback) {
  Team.create(teams).then(callback)
}

exports.postTeams = function (req, res, next) {
  saveTeams(req.body, function (err) {
    if (err) res.status(500).send(err)
    console.log(req.body.length, ' teams saved');
  })
  // res.send(req.body)
};
