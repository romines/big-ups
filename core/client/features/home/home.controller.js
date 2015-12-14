var app = angular.module('app');


app.controller('homeController', ['$scope', '$filter', 'matchupService', homeController]);


function homeController($scope, $filter, matchupService) {

  $scope.filter = '';
  getMatchups();

  function getMatchups() {
    matchupService.getMatchups()
      .then(function(data) {

        $scope.matchUps = data;
      });
  }

  $scope.updateFilter = function(filter) {
    $scope.userFilter = filter;
  }
}
