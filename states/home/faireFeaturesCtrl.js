var app = angular.module('utahrenfaire');

app.controller('faireFeaturesCtrl', function($scope, firebaseService, entertainersRef) {
	
	$scope.entertainers = entertainersRef;

})