var app = angular.module('utahrenfaire');

app.controller('homeCtrl', function($scope, mainService, mainInfoRef) {
	$scope.mainInfo = mainInfoRef;

	// $scope.fbMaininfo = mainService.mainInfo;
	// $scope.fbMaininfo.$loaded().then(function(data) {
	// 	$scope.eventPlace = data.eventPlace;
	// 	$scope.eventDays = data.eventDays;
	// 	$scope.eventDate = data.eventDate;
	// })

})