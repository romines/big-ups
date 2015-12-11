var kimoService = require('../../services/kimono-service');
var build = require('../../services/build-team.js');
var teamCtrl = require('../teams/team.server.controller.js')

// Handles request to uri like '/api/data?league=nba&kimo=pr'
// Given two params, league and 'kimo' (full team data, power
// rankings or schedule APIs)
//
exports.getFromKimo = function(req, res, next) {
  var league = req.query.league;
  var kReq = req.query.kimo;
  var task = req.query.task;
  // Build teams from Kimono response and send back to client
  if (kReq === 'teams') {
    kimoService.getTeamsRaw(function (data) {
      data = JSON.parse(data);
      var teams = build(data.results.rankings);
      res.status(200).send(teams)
    }, league);
  } else {
    // Just power ranking or schedule data
    kimoService.getKimoData(function (data) {
      res.status(200).send(data);
    }, league, kReq);
  }
}
