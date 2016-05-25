var app = angular.module('utahrenfaire');

app.controller('adminCtrl', function($scope, authService, $rootScope, $location) {

	var loginCallback = function(user){
    $rootScope.loggedIn = true;
    $rootScope.user = user;
    user.uid = user.uid.replace('simplelogin:', '');
    $scope.$apply();
  };

  $scope.login = function () {
    return authService.login($scope.details, loginCallback);
  };

  $scope.logout = function(){
    authService.logout();
  }

})