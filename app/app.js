angular.module('starships', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/',
        template: 'This is the home state'
    }).state('ships', {
        url: '/ships',
        templateUrl: 'app/views/ships/ships.html',
        controller: 'shipsCtrl'
    }).state('ship', {
        url: '/ships/:id',
        templateUrl: 'app/views/ship/ship.html',
        controller: 'shipCtrl'
    })

    $urlRouterProvider.otherwise('/');
})