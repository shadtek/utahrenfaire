var app = angular.module('utahrenfaire', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

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
          template:"<owl-directive></owl-directive>",
          controller:'carouselCtrl',
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
        "entertainers@home": {
          templateUrl: "states/home/entertainers.html",
          controller: 'entertainersCtrl',
          resolve: {
            entertainersRef: function(firebaseService){
              return firebaseService.getEntertainers();
            }
          }
        },
        // view;
        // view
        "vendors@home": {
          templateUrl: "states/home/vendors.html",
          controller: 'vendorsCtrl',
          resolve: {
            vendorsRef: function(firebaseService){
              return firebaseService.getVendors();
            }
          }
        },
        // view;
        // view
        "schedule@home": {
          templateUrl: "states/home/schedule.html"
        },
        // view;
        // view
        "tickets@home": {
          templateUrl: "states/home/tickets.html",
          controller: 'ticketsCtrl'
        },
        // view;
        // view
        "map@home": {
          templateUrl: "states/home/map.html",
          controller: 'mapCtrl'
        },
        // view;
        // view
        "forms@home": {
          templateUrl: "states/home/forms.html",
          controller: 'formsCtrl'
        },
        // view;
        // view
        "gallery@home": {
          templateUrl: "states/home/gallery.html",
          controller: 'galleryCtrl'
        },
        // view;
        // view
        "about@home": {
          templateUrl: "states/home/about.html",
          controller: 'aboutCtrl'
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
