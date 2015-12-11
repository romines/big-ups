"use strict";
const
  request = require('request'),
  konfig = require('./kimono-config'),
  mgmt = require('./data-mgmt-service');

// method hits relevant Kimono API, calls data-mgmt-service helper on response
// and passes to supplied callback
//
exports.getKimoData = function (callback, league, kReq) {
  request(konfig.baseUrl + konfig.kID[league][kReq] + konfig.apiKey,
  function(err, response, body) {
    // transform ugly response into something ready to be displayed on frontend
    var cleaned = mgmt[kReq](body);
    if (err) console.log(err);
    callback(cleaned);
  });
}

exports.getTeamsRaw = function (callback, league) {
  request(konfig.baseUrl + konfig.kID[league]['pr'] + konfig.apiKey,
  function(err, response, body) {
    if (err) console.log(err);
    callback(body);
  });
}
