var app = angular.module('utahrenfaire');

app.controller('vendorsCtrl', function($scope, mainService) {
	
	$scope.vendors = mainService.vendors;

	$scope.vendors.$loaded().then(function(data) {
		console.log($scope.vendors);
	})

})