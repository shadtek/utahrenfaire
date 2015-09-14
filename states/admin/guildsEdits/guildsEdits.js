var app = angular.module('utahrenfaire');

app.controller('guildsEditsCtrl', function($scope, guildssRef, firebaseService){
  window.scrollTo(0, 0)

  $scope.guildss = guildssRef;

  $scope.addGuilds = function(item){
    $scope.guildss.$add(item);
    console.log("Added")
    $scope.item = ""
  }

  $scope.updateGuilds = function(item){
    $scope.guildss.$save(item);
    console.log("Updated")
  };

  $scope.toggleGuildsHide = function(item){
    item.hide = !item.hide;
    $scope.guildss.$save(item);
    console.log("Hide Toggled")
  };

  $scope.removeGuilds = function(item){
    $scope.guildss.$remove(item);
    console.log("Deleted")
  }

});