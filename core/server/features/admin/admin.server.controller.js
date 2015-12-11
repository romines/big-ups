var kimoService = require('../../services/kimono-service');
var build = require('../../services/build-team.js');

// Handles request to uri like '/api/data?league=nba&kimo=pr'
// Given two params, league and 'kimo' (power rankings or schedule APIs)
//
exports.getFromKimo = function(req, res, next) {
  var league = req.query.league;
  var kReq = req.query.kimo;
  var task = req.query.task;

  // Parses incoming request from client, passes to kimoService, gets
  // response that complies with
  kimoService.getKimoData(function (data) {
    res.status(200).send(data);
  }, league, kReq);

}

exports.createTeams = function (req, res, next) {
  var league = req.query.league;
  kimoService.getTeamsRaw(function (data) {
    data = JSON.parse(data);
    var teams = build(data.results.rankings);
    res.status(200).send(teams)
  }, league)

}
