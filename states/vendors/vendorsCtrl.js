var app = angular.module('utahrenfaire');

app.controller('vendorsCtrl', function($scope, firebaseService, vendorsRef) {
	window.scrollTo(0, 0)
	
	$scope.vendors = vendorsRef;

})