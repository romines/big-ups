var Ctrl = require('./admin.server.controller');

module.exports = function(app) {
  // Endpoint that provides access to Kimono Data
  app.route('/api/data')
    .get(Ctrl.getFromKimo);

  // app.route('/api/methods')
  //   .get(Ctrl.adminMethods);
};
