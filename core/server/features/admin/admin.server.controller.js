var kimonode = require('../../services/kimono-service');

exports.dataMethods = function(req, res, next) {
  var league = req.query.league;
  var kReq = req.query.kimo;
  // console.log(league, kReq)
  kimonode.getKimoData(function (data) {

    res.status(200).send(data);
  }, league, kReq);
}
