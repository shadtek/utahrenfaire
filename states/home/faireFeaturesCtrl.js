var app = angular.module('utahrenfaire');

app.controller('faireFeaturesCtrl', function($scope, firebaseService, entertainersRef) {
	window.scrollTo(0, 0)
	
	$scope.entertainers = entertainersRef;

})