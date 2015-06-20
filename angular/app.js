var app = angular.module('utahrenfaire', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "states/home/home.html",
      controller: 'homeCtrl',
      resolve: {
        mainInfoRef: function(firebaseService){
          return firebaseService.getMainInfo();
        }
      }
    })
    .state('about', {
      url: "",
      templateUrl: "states/about.html",
      abstract: true
    })
    .state('about.feast', {
      url: '/feast',
      views: {
        "": {
          templateUrl: "states/feast/feast.html",
          controller: 'feastCtrl'
        },
        "friday@about.feast": {
          templateUrl: "states/feast/friday.html"
        },
        "saturday@about.feast": {
          templateUrl: "states/feast/saturday.html"
        }
      },
      resolve: {
        feastInfoRef: function(firebaseService){
          return firebaseService.getFeastInfo();
        }
      }
    })
    .state('about.tickets', {
      url: "/tickets",
      templateUrl: "states/tickets/tickets.html",
      controller: 'ticketsCtrl'
    })
    .state('about.schedule', {
      url: "/schedule",
      templateUrl: "states/schedule/schedule.html",
      controller: 'scheduleCtrl'
    })
    .state('about.gallery', {
      url: "/gallery",
      templateUrl: "states/gallery/gallery.html",
      controller: 'galleryCtrl'
    })
    .state('about.vendors', {
      url: "/vendors",
      templateUrl: "states/vendors/vendors.html",
      controller: 'vendorsCtrl',
      resolve: {
        vendorsRef: function(firebaseService){
          return firebaseService.getVendors();
        }
      }
    })
    .state('about.entertainers', {
      url: "/entertainers",
      templateUrl: "states/entertainers/entertainers.html",
      controller: 'entertainersCtrl',
      resolve: {
        entertainersRef: function(firebaseService){
          return firebaseService.getEntertainers();
        }
      }
    })
    .state('about.map', {
      url: "/map",
      templateUrl: "states/map/map.html",
      controller: 'mapCtrl'
    })
    .state('about.registration', {
      url: "/registration",
      templateUrl: "states/registration/registration.html",
      controller: 'registrationCtrl'
    })
    .state('about.contact', {
      url: "/contact",
      templateUrl: "states/contact/contact.html",
      controller: 'contactCtrl'
    })
    .state('about.admin', {
      url: "",
      templateUrl: "states/admin/admin.html",
      abstract: true
    })
    .state('about.admin.login', {
      url: "/login",
      templateUrl: "states/admin/login/login.html",
      controller: 'loginCtrl'
    })
    .state('about.admin.edits', {
      url: "",
      templateUrl: "states/admin/edits.html",
      controller: 'logoutCtrl',
      abstract: true
    })
    .state('about.admin.edits.homeEdits', {
      url: "/home-edits",
      templateUrl: "states/admin/homeEdits/homeEdits.html",
      controller: 'homeEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        mainInfoRef: function(firebaseService, $state){
          return firebaseService.getMainInfo();
        }
      }
    })
    .state('about.admin.edits.vendorEdits', {
      url: "/vendor-edits",
      templateUrl: "states/admin/vendorEdits/vendorEdits.html",
      controller: 'vendorEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        vendorsRef: function(firebaseService, $state){
        return firebaseService.getVendors();
        }
      }
    })
    .state('about.admin.edits.entertainerEdits', {
      url: "/entertainer-edits",
      templateUrl: "states/admin/entertainerEdits/entertainerEdits.html",
      controller: 'entertainerEditsCtrl',
      resolve: {
        loggedIn: function(authService){
          return authService.checkAuth();
        },
        entertainersRef: function(firebaseService, $state){
        return firebaseService.getEntertainers();
        }
      }
    })
    // For any unmatched url, redirect to "/"
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
