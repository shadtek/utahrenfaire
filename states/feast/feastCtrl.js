var app = angular.module('utahrenfaire');

app.controller('feastCtrl', function($scope, firebaseService, feastInfoRef) {
	window.scrollTo(0, 0)

	$scope.feastInfo = feastInfoRef;

})