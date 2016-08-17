var app = angular.module('utahrenfaire');

app.controller('vendorsCtrl', function($scope, vendorsRef, firebaseService){

  $scope.vendors = vendorsRef;
  $scope.item = {};

  $scope.addVendor = function(item){
    $scope.vendors.$add(item);
    console.log("Added and form cleared");
    $scope.item = {};
  };

  $scope.updateVendor = function(item){
  	if (item.rank2){
      item.rank = item.rank2;
      delete item.rank2;
    }
    $scope.vendors.$save(item);
    console.log("Updated")
  };

  $scope.toggleVendorHide = function(item){
    item.hide = !item.hide;
    $scope.vendors.$save(item);
    console.log("Hide toggled")
  };

  $scope.removeVendor = function(item){
    $scope.vendors.$remove(item);
    console.log("Deleted")
  }

});