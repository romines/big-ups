var app = angular.module('app');

app.directive('matchup', function () {
    return {
        restrict: 'E',

        templateUrl: 'directives/matchup/matchup.template.html',

        scope: '@',

        controller: function ($scope) {

          

          $scope.toggleRiv = false;
          $scope.togglePlayoffs = false;
          $scope.toggleFav = false;
        }
    };
});
