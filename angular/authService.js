var app = angular.module('utahrenfaire');

app.service('authService', function($firebaseAuth, $q){

  var firebaseUrl = 'https://utahrenfaire.firebaseio.com/'

  var fbRef = new Firebase(firebaseUrl);

  var authObj = $firebaseAuth(fbRef);

  var admin = false;

  this.login = function(user, cb){
    fbRef.authWithPassword({
      email : user.email,
      password : user.password
    }, function(err, authData){
      if(authData){
        cb(authData)
        console.log('You are logged in', authData);
      } else {
        console.log('You made a mistake', err)
      }
    })
  };

  this.logout = function(){
    return fbRef.unauth();
  }

});