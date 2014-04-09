'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {
      
      $scope.car = {make: 'Honda',
                    model: 'Civic',
                    year: 2014,
                    price: 24000
                   }
  }])
  .controller('MyCtrl2', ['$scope', function($scope) {

      $scope.cars = [{make: 'HondaA',
                    model: 'Civic',
                    year: 2014,
                    price: 24000
                   },
                     {make: 'HondaB',
                    model: 'Civic',
                    year: 2014,
                    price: 24000
                     },
                     {make: 'HondaC',
                    model: 'Civic',
                    year: 2014,
                    price: 24000
                   },
                     {make: 'HondaD',
                    model: 'Civic',
                    year: 2014,
                    price: 24000
                   }]
  }]);