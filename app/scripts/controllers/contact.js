'use strict';

/**
 * @ngdoc function
 * @name grantunedApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the grantunedApp
 */
angular.module('grantunedApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.content = {
      title: "Contactez-nous",
      subtitle: "Vous désirez faire affaire avec nous ou bien tout simplement discuter avec nous, contactez-nous!",
      infoTitle: "Nos coordonnées",
      email: "info@grantuned.com",
      address: "400 rue Monfort",
      city: "Montréal",
      province: "QC",
      postalCode: "H3C 4A8",
      phone: "514-123-4567",
      location: { x: 0, y: 0, scale: 0 }
    };
  });
