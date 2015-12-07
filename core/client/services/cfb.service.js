var app = angular.module('app');

app.service('cfbService', ['$q', '$http', cfbService]);

function cfbService($q, $http) {
  this.test = function () {
    return $http.get('/api/cfb')
      .then(function (response) {
        return response.data;
      })
  }
}
