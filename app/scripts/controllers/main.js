'use strict';

/**
 * @ngdoc function
 * @name grantunedApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the grantunedApp
 */
angular.module('grantunedApp')
  .controller('MainCtrl', function ($scope, headerService) {

    $scope.sections = [
      {
        id: "two",
        imagePath: "images/photo-1423439793616-f2aa4356b37e.jpeg",
        float: "vertical-align",
        textAlign: "text-left",
        title: "Short ribs sirloin venison spare ribs pork cupim",
        content: "Ribeye tri-tip fatback jerky tail filet mignon turducken prosciutto beef, picanha flank ground round."
      },
      {
        id: "three",
        imagePath: "images/photo-1415871989540-61fe9268d3c8.jpeg",
        float: "vertical-align pull-right",
        textAlign: "text-right",
        title: "Short ribs sirloin venison spare ribs pork cupim",
        content: "Ribeye tri-tip fatback jerky tail filet mignon turducken prosciutto beef, picanha flank ground round."
      }
    ];
  });
