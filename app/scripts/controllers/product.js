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
    $scope.chartConfig = {

      options: {
        //This is the Main Highcharts chart config. Any Highchart options are valid here.
        //will be overriden by values specified below.
        chart: {
          type: 'column',
          options3d: {
            enabled: true,
            alpha: 15,
            beta: 15,
            viewDistance: 25,
            depth: 40
          },
          marginTop: 80,
          marginRight: 40
        },
        tooltip: {
          style: {
            padding: 10,
            fontWeight: 'bold'
          },
          //headerFormat: '<b>{point.key}</b><br>',
          //pointFormat: '<span style="color:{series.color}">\u25CF</span> {point.y} / {point.stackTotal}'
        }
        ,
        plotOptions: {
          column: {
            stacking: 'normal',
            depth: 40
          }
        }
      },
      //The below properties are watched separately for changes.

      //Series object (optional) - a list of series using normal highcharts series options.
      series: [{
        name: 'Avant',
        data: [4690, 521, 6282],
        color: '#DBDBDB'
      }, {
        name: 'Après',
        data: [630, 444, 3845],
        color: '#a4cd33'
      }],
      //Title configuration (optional)
      title: {
        text: 'ÉCONOMIES'
      },
      //Boolean to control showng loading status on chart (optional)
      //Could be a string if you want to show specific loading text.
      loading: false,
      //Configuration for the xAxis (optional). Currently only one x axis can be dynamically controlled.
      //properties currentMin and currentMax provied 2-way binding to the chart's maximimum and minimum
      xAxis: {
        categories: ['Coût d\'énergie (88%)', 'Coût d\entretien (54%)', 'Coût annuel équivalent (38%)']
      },

      yAxis: {
        allowDecimals: false,
        min: 0,
        title: {
          text: 'Dollars ($)'
        }
      },
      //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
      useHighStocks: false,
      //size (optional) if left out the chart will default to size of the div or something sensible.
      //size: {
      //  width: 400,
      //  height: 300
      //},
      //function (optional)
      func: function (chart) {
        //setup some logic for the chart
      }
    };
  });
