/**
 * Created by Administrator on 2015/4/3.
 */
function router($routerProvider){
    $routerProvider
        .when('/inbox',{
            templateUrl: 'views/inbox.html',
            controller:'InboxCtrl',
            controllerAs:'inbox'
        })
        .when('/inbox/email/:id', {
            templateUrl: 'views/email.html',
            controller: 'EmailCtrl',
            controllerAs: 'email'
        })
        .otherwise({
            redirectTo: '/inbox'
        });
}

angular
    .module('myApp', ['ngRoute'])
    .config(router);