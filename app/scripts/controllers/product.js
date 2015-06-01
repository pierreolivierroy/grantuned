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
        title: 'Aerodynamics',
        items: [ { name: 'Active rear wings' }, { name: 'Active independant front flaps' },
          { name: 'Frontal area: 1.873 m^2' }, { name: 'Total down force at 250 km/h 485kg' } ]
      },
      {
        title: 'Engine',
        items: [ { name: 'Koenigsegg twin turbo aluminum 5,0L V8, 4 valves per cylinder, double overhead camshafts, dry sump lubrification' },
          { name: 'Compression: 9.3:1' }, { name: 'Bore: 92 mm' }, { name: 'Stroke: 95.25 mm' },
          { name: 'Sequential, multipoint fuel injection with dual knock sensors and back pressure' } ]
      },
      {
        title: 'Dimensions',
        items: [ { name: 'Total length: 4293 mm' }, { name: 'Total width: 2050 mm' }, { name: 'Total height: 1120 mm' },
          { name: 'Low speed ground clearance: 105 mm' }, { name: 'Track mode ground clearance: 85 mm' },
          { name: 'Front lifting system activated: 150 mm' }, { name: 'Wheelbase: 2662 mm' }, { name: 'Fuel capacity: 150 litres' },
          { name: 'Luggage compartment: 150 litres' }, { name: 'Dry weight: 1295 kg (Curb weight: 1395 kg)' } ]
      },
      {
        title: 'Chassis',
        items: [ { name: 'Carbon fiber with aluminium honeycomb' }, { name: 'Carbon fiber with aluminum honeycomb and integrated fuel tanks' },
          { name: 'Monocoque torsional rigidity: 65,000 Nm/degree' }, { name: 'Weight: 70 kg (including tanks)' },
          { name: 'Front and rear suspension - double wishbones, carbon fiber rear upper wish-bones, two-way electronically adjustable gas-hydraulic shock absorbers, and pushrod operated Triplex damper in the rear' },
          { name: 'Electronically adjustable ride height, fully independent per wheel' } ]
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
