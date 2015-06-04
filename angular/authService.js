var app = angular.module('utahrenfaire');

app.service('authService', function($firebaseAuth){
  //Just a reference to the firebase endpoint
  var firebaseUrl = 'https://utahrenfaire.firebaseio.com/'

  var fbRef = new Firebase(firebaseUrl);
  var authObj = $firebaseAuth(fbRef);

  this.login = function(user, cb){
    authObj.$authWithPassword({
      email : user.email,
      password : user.password
    }).then(function(authData){
      console.log("Logged In! User ID: " + authData.uid);
      cb(authData);
    }).then(function(err){
      switch (err.code) {
        case "INVALID_EMAIL":
          case "INVALID_PASSWORD":
          default:
      }
    });
  };
});