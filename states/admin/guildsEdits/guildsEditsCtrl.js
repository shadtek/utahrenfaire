var app = angular.module('utahrenfaire');

app.controller('guildsEditsCtrl', function($scope, guildsRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.guilds = guildsRef;

  $scope.addGuilds = function(item){
    $scope.guilds.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateGuilds = function(item){
    $scope.guilds.$save(item);
    console.log("Updated")
  };

  $scope.toggleGuildsHide = function(item){
    item.hide = !item.hide;
    $scope.guilds.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeGuilds = function(item){
    $scope.guilds.$remove(item);
    console.log("Deleted")
  }

});