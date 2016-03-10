/**
 * Created by Administrator on 2015/4/3.
 */

var app = angular.module("formApp", ['ui.router']);


app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('main', {
        url: '/',
        templateUrl: "/partials/main",
        controller: "MainController"
    });

}]);