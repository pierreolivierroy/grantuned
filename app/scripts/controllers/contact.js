'use strict';

/**
 * @ngdoc function
 * @name grantunedApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the grantunedApp
 */
angular.module('grantunedApp')
  .controller('ContactCtrl', function ($scope, uiGmapGoogleMapApi, headerService) {
    $scope.content = {
      title: 'Contactez-nous',
      subtitle: 'Bacon ipsum dolor amet boudin porchetta turducken biltong andouille frankfurter cow ball tip t-bone. Bacon kevin andouille capicola drumstick leberkas prosciutto tri-tip fatback cow. Bacon short loin picanha rump pig shoulder.',
      infoTitle: 'Nos coordonnées',
      email: 'info@grantuned.com',
      address: '400 rue Monfort',
      city: 'Montréal',
      province: 'QC',
      postalCode: 'H3C 4A8',
      phone: '514-123-4567'
    };

    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The 'then' callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps) {

      $scope.marker = {
        id: 0,
        coords: {
          latitude: 45.496459,
          longitude: -73.561677
        },
        options: { draggable: false }
      };

      $scope.map = { center: { latitude: 45.496459, longitude: -73.561677 }, zoom: 16 };
    });
  });

