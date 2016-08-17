var app = angular.module('utahrenfaire');

app.controller('entertainersCtrl', function($scope, entertainersRef, firebaseService){

  $scope.entertainers = entertainersRef;
  $scope.item = {};

  $scope.addEntertainer = function(item){
    $scope.entertainers.$add(item);
    console.log("Added and form cleared");
    $scope.item = {};
  };

  $scope.updateEntertainer = function(item){
  	if (item.rank2){
      item.rank = item.rank2;
      delete item.rank2;
    }
    $scope.entertainers.$save(item);
    console.log("Updated")
  };

  $scope.toggleEntertainerHide = function(item){
    item.hide = !item.hide;
    $scope.entertainers.$save(item);
    console.log("Hide toggled")
  };

  $scope.removeEntertainer = function(item){
    $scope.entertainers.$remove(item);
    console.log("Deleted")
  }

});