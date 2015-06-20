var app = angular.module('utahrenfaire');

app.controller('entertainersCtrl', function($scope, firebaseService, entertainersRef) {
	window.scrollTo(0, 0)
	
	$scope.entertainers = entertainersRef;

})