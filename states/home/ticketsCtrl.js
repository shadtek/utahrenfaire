var app = angular.module('utahrenfaire');

app.controller('ticketsCtrl', function($scope, firebaseService, entertainersRef) {
	
	$scope.entertainers = entertainersRef;

})