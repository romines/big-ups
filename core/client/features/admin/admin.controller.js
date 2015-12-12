angular.module('app').controller('adminController', ['$scope', 'dataService', adminController]);

function adminController($scope, dataService) {
  $scope.responseData = '';
  $scope.getKimoData = function (league, kReq) {

    dataService.getKimoData(league, kReq)
      .then(function (response) {
        // if (kReq === 'matchups') {
        //   $scope.response = response.data;
        // } else {
          $scope.teams = response.data;
          $scope.tHeaders = Object.keys($scope.teams[0]);
        // }

      });
  }

  $scope.league = 'nba';
  $scope.kReq = 'pr';

  $scope.postTeams = function (teams) {
    dataService.postTeams(teams)
      .then(function (response) {
        $scope.teams = response.data;
      })
  }
  $scope.getMatchups = function () {
    dataService.getTeams()
      .then(function (response) {
        $scope.teams = response.data;
      })
  }

}
