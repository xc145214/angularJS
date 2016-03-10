/**
 * Created by Administrator on 2015/4/3.
 */
//定义控制器
function MainCtrl($scope) {
    //初始化变量
    $scope.someValue = 'Hello';

}


function FirstCtrl($scope) {
    $scope.items = [{
        name: 'Scuba Diving Kit',
        id: 7297510
    }, {
        name: 'Snorkel',
        id: 0278916
    }, {
        name: 'Wet Suit',
        id: 2389017
    }, {
        name: 'Beach Towel',
        id: 1000983
    }];
}


function SecondCtrl($scope) {
    $scope.items = [{
        name: 'Scuba Diving Kit',
        id: 7297510
    }, {
        name: 'Snorkel',
        id: 0278916
    }, {
        name: 'Wet Suit',
        id: 2389017
    }, {
        name: 'Beach Towel',
        id: 1000983
    }];
}

//定义service
function UserService() {
    this.sayHello = function (name) {
        return 'Hello there\t' + name;
    }
}

//这个服务
function ThirdCtrl($scope, UserService) {


    $scope.name = UserService.sayHello("service");
    console.log($scope.name);
}

//通过Factory 定义service
function UserService1() {
    var UserService1 = {};

    function greeting(name) {
        return "hello there \t" + name;
    }

    UserService1.sayHello = function (name) {
        return greeting(name);
    };
    return UserService1;
}

//这个服务
function FourCtrl($scope, UserService) {

    $scope.name = UserService.sayHello("factory");
    console.log($scope.name);
}


//when in the view we use controller as
//we can define Controller like this  without $scope
function FiveCtrl() {
    this.items = [{
        name: 'Scuba Diving Kit',
        id: 7297510
    }, {
        name: 'Snorkel',
        id: 0278916
    }, {
        name: 'Wet Suit',
        id: 2389017
    }, {
        name: 'Beach Towel',
        id: 1000983
    }]

    this.removeFromStock = function(item,index){
        this.items.splice(index,1)
    }
}


function SixCtrl() {
    var vm = this;
    vm.items = [{
        name: 'Scuba Diving Kit',
        id: 7297510
    }, {
        name: 'Snorkel',
        id: 0278916
    }, {
        name: 'Wet Suit',
        id: 2389017
    }, {
        name: 'Beach Towel',
        id: 1000983
    }]

    vm.removeFromStock = function(item,index){
        this.items.splice(index,1)
    }
}

angular
    .module('app', [])
    .factory('UserService1', UserService1)
    .controller('MainCtrl', MainCtrl)
    .controller('FirstCtrl', FirstCtrl)
    .controller("SecondCtrl", SecondCtrl)
    .service("UserService", UserService)
    .controller("ThirdCtrl", ThirdCtrl)
    .controller("FourCtrl", FourCtrl)
    .controller("FiveCtrl", FiveCtrl)
    .controller("SixCtrl", SixCtrl);