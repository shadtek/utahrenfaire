var app = angular.module('utahrenfaire');

app.controller('mapCtrl', function($scope, firebaseService, entertainersRef) {
	
	$scope.entertainers = entertainersRef;

})