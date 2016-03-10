/**
 * Created by Administrator on 2015/3/27.
 */
var app = angular.module("myModule",[]);

app.directive("hello",function(){
    return {
        restrict:'E',
        template:'<div>hello everyone</div>',
        replace:true
    }
});

app.directive('world',function(){
    return {
        restrict:'E',
        template:'<div>world is fun!</div>',
        replace:true
    }
});



