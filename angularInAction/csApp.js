/**
 * Created by Administrator on 2015/4/3.
 */
function MainCtrl1($scope) {
    $scope.title = "some title"
}

function MainCtrl2() {
    this.title = "no use $scope"
}

function MainCtrl() {
    this.title = "main "
}

function AnotherCtrl() {
    this.title = "another "
}

function YetAnotherCtrl() {
    this.title = "yet "
}

angular
    .module("CSApp", [])
    .controller("MainCtrl1", MainCtrl1)
    .controller("MainCtrl2", MainCtrl2)
    .controller("MainCtrl", MainCtrl)
    .controller("AnotherCtrl", AnotherCtrl)
    .controller("YetAnotherCtrl", YetAnotherCtrl)
;