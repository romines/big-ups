angular.module('app').controller('adminController', ['$scope', 'dataService', adminController]);

function adminController($scope, dataService) {
  $scope.responseData = '';
  $scope.getKimoData = function (league, kReq) {

    dataService.getKimoData(league, kReq)
      .then(function (response) {
        $scope.teams = response.data;
        $scope.tHeaders = Object.keys($scope.teams[0]);
      });
  }

  $scope.league = 'cfb';
  $scope.kReq = 'pr';

  $scope.teamsToMongo = function(league) {
    console.log('tTM fired');
    dataService.teamsToMongo(league)
      .then(function (response) {
        $scope.teams = response.data;
        $scope.tHeaders = Object.keys($scope.teams[0]);
      })
  }

}
