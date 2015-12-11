var app = angular.module('app');

app.service('dataService', ['$q', '$http', dataService]);

function dataService($q, $http) {
  this.getKimoData = function (league, kReq) {
    return $http.get('/api/data?league=' + league + '&kimo=' + kReq )
      .then(function (response) {
        return response;
      });
  }
  this.teamsToMongo = function (league) {
    return $http.get('/api/data/create-teams?league=' + league)
      .then(function (response) {
        return response;
      })
  }

}
