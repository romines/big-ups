angular.module('app').controller('adminController', ['$scope', 'dataService', adminController]);

function adminController($scope, dataService) {
  $scope.responseData = '';
  $scope.getKimoData = function (league, kReq) {

    dataService.getKimoData(league, kReq)
      .then(function (response) {
        // if (kReq === 'matchups') {
        //   $scope.response = response.data;
        // } else {
          $scope.data = response.data;
          $scope.tHeaders = Object.keys($scope.data[0]);
        // }

      });
  }

  $scope.league = 'nba';
  $scope.kReq = 'pr';

  var postNewMatchups = function (matchups) {
    dataService.postNewMatchups()
      .then(function (response) {
        $scope.data = response.data;
      });
  }
  var postTeams = function (teams) {
    dataService.postTeams(teams)
      .then(function (response) {
        $scope.data = response.data;
      });
  }

  $scope.post = function (data, resource) {
    if (resource === 'matchups') {
      postNewMatchups(data);
    } else if (resource === 'teams') {
      postTeams(data);
    } else {
      $scope.response = 'Sorry, you can only post teams or matchups'
    }
  }

  $scope.getNewMatchups = function () {
    dataService.getTeams()
      .then(function (response) {
        $scope.data = response.data;
      });
  }

}
