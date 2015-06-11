var app = angular.module('utahrenfaire');

app.controller('homeCtrl', function($scope, mainService, mainInfoRef) {
	$scope.mainInfo = mainInfoRef;

})