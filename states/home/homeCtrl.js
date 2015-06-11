var app = angular.module('utahrenfaire');

app.controller('homeCtrl', function($scope, mainService, mainInfoRef) {
	window.scrollTo(0, 0)
	
	$scope.mainInfo = mainInfoRef;

})