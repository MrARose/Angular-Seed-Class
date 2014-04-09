'use strict';
describe('controllers', function(){
    
    describe('MyCtrl1', function() {
        var scope = {}, ctrl;
        
        beforeEach(module('myApp'));
        
        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('MyCtrl1', {$scope: scope});
        }));
        
        it('ctrl should exist', inject(function () {
            
            expect(ctrl).not.toBe(undefined);
        }));
        
        it('car should exist', inject(function () {
            expect(scope.car).not.toBe(undefined);
        }));
        
        it('make should exist', inject(function () {
            expect(scope.car.make).not.toBe(undefined);
        }));
        
        it('model should exist', inject(function () {
            expect(scope.car.model).not.toBe(undefined);
        }));
        
        it('year should exist', inject(function () {
            expect(scope.car.year).not.toBe(undefined);
        }));
        
        it('price should exist', inject(function () {
            expect(scope.car.price).not.toBe(undefined);
        }));
        
        it('make should be Honda', inject(function () {
            expect(scope.car.make).toBe('Honda');
        }));
        
        it('model should be Civic', inject(function () {
            expect(scope.car.model).toBe('Civic');
            
        }));
        
    });

    describe('MyCtrl2', function() {
        var scope = {}, ctrl;
        
        beforeEach(module('myApp'));
        
        beforeEach(inject(function($controller) {
            scope = {};
            ctrl = $controller('MyCtrl2', {$scope: scope});
        }));

        it('ctrl2 should exist', inject(function () {
            
            expect(ctrl).not.toBe(undefined);
        }));
        
        it('car should exist', inject(function () {
            expect(scope.cars).not.toBe(undefined);
        }));
        
        it('should have 6 cars', inject(function () {
            expect(scope.cars.length).toBe(4);
        }));
        
        it('should have a new car (5 total)', inject(function () {
            scope.cars.push({make: 'HondaX',
                    model: 'X Car',
                    year: 2015,
                    price: 99000
                     });
        
            expect(scope.cars.length).toBe(5);
        }));

        it('car 2 should be HondaB', inject(function () {
            expect(scope.cars[1].make).toBe('HondaB');
        }));

    });
        
});