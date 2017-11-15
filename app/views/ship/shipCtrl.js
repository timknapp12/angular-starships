angular.module('starships').controller('shipCtrl', function($scope, $stateParams, shipSrvc) {
    shipSrvc.getShip($stateParams.id).then(ship => {
        $scope.ship = ship;
    } );
})