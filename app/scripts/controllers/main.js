'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MainCtrl', function ($scope, configService, automatrService, chartConfigService) {
    $scope.temperature = automatrService.getTemperature();
    $scope.brightness = automatrService.getBrightness();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.temperature.$on('loaded', function (data) {
    	$scope.thermometerChartConfig = chartConfigService.createThermometerConfig(data);
    });
});
