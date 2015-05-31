'use strict';

/**
 * @ngdoc function
 * @name grantunedApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the grantunedApp
 */
angular.module('grantunedApp')
  .controller('ProductCtrl', function ($scope, headerService) {
    $scope.content = {
      title: "ecotuned",
      subtitle: "Bacon ipsum dolor amet boudin porchetta turducken biltong andouille frankfurter cow ball tip t-bone. Bacon kevin andouille capicola drumstick leberkas prosciutto tri-tip fatback cow. Bacon short loin picanha rump pig shoulder."
    };

    $scope.specs = [
      {
        title: 'Aerodynamics', items: [ { name: 'Active rear wings' }, { name: 'Active independant front flaps' }, { name: 'Frontal area: 1.873 m' } ]
      },
      {
        title: 'Dimensions', items: [ { name: 'Total length: 4293 mm' }, { name: 'Total width: 2050 mm' } ]
      },
      {
        title: 'Chassis', items: [ { name: 'Carbon fiber with aluminium honeycomb' } ]
      },
      {
        title: 'Engine', items: [ { name: 'Koenigsegg twin turbo aluminum 5,0L V8' } ]
      }
    ];

    $scope.images = [
      {
        'url': 'images/camion1.png',
        'caption': 'Optional caption',
        'thumbUrl': 'images/camion1.png' // used only for this example
      },
      {
        'url': 'images/camion2.png',
        'thumbUrl': 'images/camion2.png'
      },
      {
        'url': 'images/camion3.png',
        'thumbUrl': 'images/camion3.png'
      },
      {
        'url': 'images/camion4.png',
        'thumbUrl': 'images/camion4.png'
      }
    ];

    //$scope.openLightboxModal = function (index) {
    //  Lightbox.openModal($scope.images, index);
    //};

  });
