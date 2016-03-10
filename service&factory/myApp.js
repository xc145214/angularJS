/**
 * Created by Administrator on 2015/4/3.
 */

function testFactory() {
    return {
        sayHello: function (text) {
            return "Factory says \"Hello " + text + "\"";
        },
        sayGoodbye: function (text) {
            return "Factory says \"Goodbye " + text + "\"";
        }
    }
}

function testService() {
    this.sayHello = function (text) {
        return "Service says \"Hello " + text + "\"";
    };
    this.sayGoodbye = function (text) {
        return "Service says \"Goodbye " + text + "\"";
    };
}

function HelloCtrl($scope, testService, testFactory) {
    $scope.fromService = testService.sayHello("World");
    $scope.fromFactory = testFactory.sayHello("World");
}

function GoodbyeCtrl($scope, testService, testFactory) {
    $scope.fromService = testService.sayGoodbye("World");
    $scope.fromFactory = testFactory.sayGoodbye("World");
}

angular
    .module("myApp", [])
    .service("testService",testService)             //×¢Èëservice
    .service("testFactory",testFactory)             //×¢Èëfactory
    .controller("HelloCtrl", HelloCtrl)
    .controller("GoodbyeCtrl", GoodbyeCtrl);