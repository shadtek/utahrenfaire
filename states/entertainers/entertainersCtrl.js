var app = angular.module('utahrenfaire');

app.controller('entertainersCtrl', function($scope, mainService) {
	window.scrollTo(0, 0)
	
	$scope.entertainers = mainService.entertainers;

	$scope.entertainers.$loaded().then(function(data) {
		console.log($scope.entertainers);
	})

})