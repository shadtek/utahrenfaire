var app = angular.module('utahrenfaire', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "states/home/home.html",
      controller: 'homeCtrl',
      views: {
        "": {
          templateUrl: "states/home/home.html",
          controller: 'homeCtrl'
        },
        "faire-features@home": {
          templateUrl: "states/home/faire-features.html",
          controller: 'faireFeaturesCtrl',
          resolve: {
            entertainersRef: function(firebaseService){
              return firebaseService.getEntertainers();
            }
          }
        },
      },
      resolve: {
        mainInfoRef: function(firebaseService){
          return firebaseService.getMainInfo();
        }
      }
    })
     .state('otherwise', {
    url: '*path',
    resolve: {
      redirect: function($location) {
        $location.path("/").replace()
        console.log("redirecting...")
      }
    }
    });

    $locationProvider.html5Mode(true);

})
.run(function($rootScope, $state){
  //If the route change failed due to authentication error, redirect them out
  $rootScope.$on('$stateChangeError', function(current, previous, rejection){
    console.log('You need to be logged in to see this page.');
    
      $state.go('about.admin.login');
  })
})
