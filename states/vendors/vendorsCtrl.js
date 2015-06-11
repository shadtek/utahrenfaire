var app = angular.module('utahrenfaire');

app.controller('vendorsCtrl', function($scope, mainService) {
	window.scrollTo(0, 0)
	
	$scope.vendors = mainService.vendors;

	$scope.vendors.$loaded().then(function(data) {
		console.log($scope.vendors);
	})

})