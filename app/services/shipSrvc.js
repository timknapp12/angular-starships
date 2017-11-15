angular.module('starships').service('shipSrvc', function($http) {
    this.ships = ['Millenial Falcon', 'Death Star', 'X-figher']

    this.getShips = function() {
       return $http.get('https://swapi.co/api/starships/').then(res => {
           console.log(res);
           return res.data.results.map(ship => {
            //the code below is to get pull off the id from the swapi api url result
            let split = ship.url.split('/')
            ship.id = split[split.length - 2]
            return ship
           })
       })
    }

    this.getShip = function(id) {
        return $http.get('https://swapi.co/api/starships/'+id).then(res => {
            console.log(res);
            return res.data;
        })
    }
})