angular.module('comrade', ['ionic', 'ngMaterial', 'comrade.controllers', 'comrade.services', 'comrade.models'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'login'
    });

  $urlRouterProvider.otherwise('login');

  $mdThemingProvider.theme('default').primaryPalette('teal');
});
