var app = angular.module('utahrenfaire', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    // state
    .state('home', {
      url: "/",
      templateUrl: "states/home/home.html",
      controller: 'homeCtrl',
      views: {
        "": {
          templateUrl: "states/home/home.html",
          controller: 'homeCtrl'
        },
        // view
        "carousel@home": {
          // templateUrl: "states/home/carousel.html",
          template:"<owl-directive></owl-directive>",
          controller: 'carouselCtrl',
          resolve: {
            carouselRef: function(firebaseService){
              return firebaseService.getCarousel();
            }
          }
        },
        // view;
        // view
        "faire-features@home": {
          templateUrl: "states/home/faire-features.html",
          controller: 'faireFeaturesCtrl',
          resolve: {
            featuresRef: function(firebaseService){
              return firebaseService.getFeatures();
            }
          }
        },
        // view;
        // view
        "tickets@home": {
          templateUrl: "states/home/tickets.html",
          controller: 'ticketsCtrl',
          resolve: {
            entertainersRef: function(firebaseService){
              return firebaseService.getEntertainers();
            }
          }
        },
        // view;
        // view
        "map@home": {
          templateUrl: "states/home/map.html",
          controller: 'mapCtrl',
          resolve: {
            entertainersRef: function(firebaseService){
              return firebaseService.getEntertainers();
            }
          }
        },
        // view;
        // view
        "forms@home": {
          templateUrl: "states/home/forms.html",
          controller: 'formsCtrl',
          resolve: {
            entertainersRef: function(firebaseService){
              return firebaseService.getEntertainers();
            }
          }
        },
        // view;
        // view
        "gallery@home": {
          templateUrl: "states/home/gallery.html",
          controller: 'galleryCtrl',
          resolve: {
            entertainersRef: function(firebaseService){
              return firebaseService.getEntertainers();
            }
          }
        },
        // view;
        // view
        "about@home": {
          templateUrl: "states/home/about.html",
          controller: 'aboutCtrl',
          resolve: {
            entertainersRef: function(firebaseService){
              return firebaseService.getEntertainers();
            }
          }
        },
        // view;
        // view
        "admin@home": {
          templateUrl: "states/home/admin.html",
          controller: 'adminCtrl'
        },
        // view;
      },
      resolve: {
        mainInfoRef: function(firebaseService){
          return firebaseService.getMainInfo();
        }
      }
    })
    // state;
    // state
      // admin will go here
    // state
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
