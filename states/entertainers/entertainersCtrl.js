var app = angular.module('utahrenfaire');

app.controller('entertainersCtrl', function($scope, mainService) {
	
	$scope.entertainers = mainService.entertainers;

	$scope.entertainers.$loaded().then(function(data) {
		console.log($scope.entertainers);
	})

})