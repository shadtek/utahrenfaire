var app = angular.module('utahrenfaire');

app.controller('homeCtrl', function($scope, firebaseService, mainInfoRef, authService) {
	window.scrollTo(0, 0)
	// $scope.userIsAdmin = "This is a test";
	$scope.mainInfo = mainInfoRef;
	authService.checkAuth().then(function(response){
		$scope.userIsAdmin = true;
	})
})