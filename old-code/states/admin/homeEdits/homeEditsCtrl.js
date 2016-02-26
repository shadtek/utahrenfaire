var app = angular.module('utahrenfaire');

app.controller('homeEditsCtrl', function($scope, mainInfoRef, firebaseService){
	//userReference
  window.scrollTo(0, 0)

  $scope.mainInfo = mainInfoRef;

  $scope.updateMainInfo= function(){
    $scope.mainInfo.$save();
  };

});