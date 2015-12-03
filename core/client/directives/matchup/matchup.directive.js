var app = angular.module('app');

app.directive('matchup', function () {
    return {
        restrict: 'E',

        templateUrl: 'directives/matchup/matchup.template.html',

        scope: '=matchup'
    };
});
