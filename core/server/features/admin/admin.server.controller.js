var kimonode = require('./kimonode');

exports.dataMethods = function(req, res, next) {
  var league = req.param('league');
  var action = req.param('action');
  kimonode.getData(function (data) {
    res.status(200).send(data)
  });
}
