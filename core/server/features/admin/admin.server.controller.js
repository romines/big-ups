exports.dataMethods = function(req, res, next) {
  var league = req.param('league');
  var action = req.param('action');
  res.status(200).send(league + ', ' + action)
}
