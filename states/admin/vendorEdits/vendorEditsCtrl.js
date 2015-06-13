var app = angular.module('utahrenfaire');

app.controller('vendorEditsCtrl', function($scope, vendorsRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.vendors = vendorsRef;

  $scope.addVendor = function(item){
    $scope.vendors.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateVendor = function(item){
    $scope.vendors.$save(item);
    console.log("Updated")
  };

  $scope.toggleVendorHide = function(item){
    item.hide = !item.hide;
    $scope.vendors.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeVendor = function(item){
    $scope.vendors.$remove(item);
    console.log("Deleted")
  }

});