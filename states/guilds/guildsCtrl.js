var app = angular.module('utahrenfaire');

app.controller('guildsCtrl', function($scope, firebaseService, guildsRef) {
	window.scrollTo(0, 0)
	
	$scope.guilds = guildsRef;

	$scope.toggleImgHide = function(item){
    item.hide = !item.hide;
    console.log("Hide Toggled")
  };

})