var app = angular.module('utahrenfaire');

app.controller('faireFeaturesCtrl', function($scope, firebaseService, entertainersRef) {
	
	$scope.entertainers = entertainersRef;

	$scope.$parent.userIsAdmin = "child sees admin";

})