var app = angular.module('app');

app.service('dataService', ['$q', '$http', dataService]);

function dataService($q, $http) {
  this.getData = function () {
    return $http.get('/api/data')
      .then(function (response) {
        return response;
      })
  }
}
