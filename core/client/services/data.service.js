var app = angular.module('app');

app.service('dataService', ['$q', '$http', dataService]);

function dataService($q, $http) {
  this.getKimoData = function (league, kReq) {
    return $http.get('/api/data?league=' + league + '&kimo=' + kReq )
      .then(function (response) {
        return response;
      });
  }
  this.rankingsToMongo = function () {
    return $http.get('/api/data?task=teams-from-pr')
      .then(function (response) {
        return response;
      })
  }

}
