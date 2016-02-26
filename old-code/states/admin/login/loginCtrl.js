var app = angular.module('utahrenfaire');

app.controller('loginCtrl', function($scope, authService, $rootScope, $location) {
	window.scrollTo(0, 0)

	var loginCallback = function(user){
    $rootScope.loggedIn = true;
    $rootScope.user = user;
    user.uid = user.uid.replace('simplelogin:', '');
    $location.path('/home-edits');
    $scope.$apply();
  };

  $scope.login = function () {
    return authService.login($scope.details, loginCallback);
  };

})