'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MainCtrl', function ($scope, automatrService, chartConfigService) {
    $scope.temperature = automatrService.getTemperature();
    $scope.brightness = automatrService.getBrightness();
   
    $scope.lightswitchToggle = automatrService.lightswitch();
    $scope.lightswitchToggle.$bind($scope, 'lightToggle');

    $scope.temperature.$on('loaded', function (data) {
    	$scope.thermometerChartConfig = chartConfigService.createThermometerConfig(data);
    });
});
