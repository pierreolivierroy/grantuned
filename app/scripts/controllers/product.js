'use strict';

/**
 * @ngdoc function
 * @name grantunedApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the grantunedApp
 */
angular.module('grantunedApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
