/**
 * Created by Administrator on 2015/3/30.
 */
angular.module("myAPP",[])
    .directive('myDirective',function(){
        return{
            restrict: 'AEC', //E‘™Àÿ A Ù–‘ C¿‡
            template: '<a href="http://baidu.com">Click me to go to baidu</a>',

        };
    })
    .controller('SomeController',function($scope){
        $scope.someModel ={
            someValue: 'hello computer'
        };
        $scope.someAction = function(){
            $scope.someModel.someValue = 'hello human, from parent';
        };

    })
    .controller('ChildController',function($scope){
        $scope.childAction = function(){
            $scope.someModel.someValue = 'hello human, from child';
        }
    })
    .controller('EquationController',function($scope){
        $scope.equation = {};
        $scope.change = function(){
            $scope.equation.output =
                parseInt($scope.equation.x) +2;
        }
    })
    .controller('FormController',function($scope){
        $scope.fields = [
            {placeholder:'userName',isRequired:true},
            {placeholder:'Password',isRequired:true},
            {placeholder:'Email(option)',isRequired:false}
        ];
    })
    .controller('SomeController1',function($scope){

    })
    .controller('SecondController',function($scope){

    })
    .controller('MainController', function($scope) {
    })
    .directive('myDirective1', function() {
        return {
            restrict: 'A',
            scope: {},
            priority: 100,
            template: '<div>Inside myDirective {{ myProperty }}</div>'
        };
    })
    .directive('myDirective2', function() {
        return {
            restrict: 'A',
            template: 'Inside myDirective, isolate scope: {{ myProperty }}',
            scope: {}
        };
    })
    .directive('myInheritScopeDirective', function() {
        return {
            restrict: 'A',
            template: 'Inside myDirective, isolate scope: {{ myProperty }}',
            scope: true
        };
    })
    .directive('myDirective3', function() {
        return {
            restrict: 'A',
            template: '<h4>{{ myController.msg }}</h4>',
            controllerAs: 'myController',
            controller: function() {
                this.msg = "Hello World"
            }
        };
    });