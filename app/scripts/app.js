'use strict';

/**
 * @ngdoc overview
 * @name grantunedApp
 * @description
 * # grantunedApp
 *
 * Main module of the application.
 */
angular
  .module('grantunedApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/company', {
        templateUrl: 'views/company.html',
        controller: 'CompanyCtrl'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/team', {
        templateUrl: 'views/team.html',
        controller: 'TeamCtrl'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html',
        controller: 'PartnersCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyBTRdNTKWzPRVc7B66bMu2BdJDIFsYBUP8',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
      });
  });
