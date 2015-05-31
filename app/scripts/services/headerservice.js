'use strict';

/**
 * @ngdoc service
 * @name grantunedApp.headerservice
 * @description
 * # headerservice
 * Service in the grantunedApp.
 */
angular.module('grantunedApp')
  .service('headerService', function headerService($rootScope, $location) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    $rootScope.isMainPage = function(viewLocation) {
      console.log(viewLocation, $location.path());
      return viewLocation !== $location.path();
    };
  });
