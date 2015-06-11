var app = angular.module('utahrenfaire', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  // For any unmatched url, redirect to /

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "states/home/home.html",
      controller: 'homeCtrl',
      resolve: {
        mainInfoRef: function(mainService){
          return mainService.getMainInfo();
        }
      }
    })
    .state('about', {
      url: "",
      templateUrl: "states/about.html",
      abstract: true
    })
    .state('about.feast', {
      url: "/feast",
      templateUrl: "states/feast/feast.html",
      controller: 'feastCtrl'
    })
    .state('about.feast.friday', {
      url: "/friday",
      templateUrl: "states/feast/friday.html"
    })
    .state('about.feast.saturday', {
      url: "/saturday",
      templateUrl: "states/feast/saturday.html"
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
      controller: 'vendorsCtrl'
    })
    .state('about.entertainers', {
      url: "/entertainers",
      templateUrl: "states/entertainers/entertainers.html",
      controller: 'entertainersCtrl'
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

});
