/**
 * Created by cwklausing on 5/25/16.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/person1', {
            templateUrl: 'views/person1.html',
            controller: 'Person1Controller'
        })
        .when('/person2', {
            templateUrl: 'views/person2.html',
            controller: 'Person2Controller'
        })
        .when('/person3', {
            templateUrl: '/views/person3.html',
            controller: 'Person3Controller'
        })
        .otherwise({
            redirectTo: 'person1'
        });
}]);