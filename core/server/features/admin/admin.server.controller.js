var kimonode = require('../../services/kimono-services');

exports.dataMethods = function(req, res, next) {
  var league = req.param('league');
  var action = req.param('action');
  kimonode.getData(function (data) {
    // var count = data.count;
    res.status(200).send(data);
  });
}
