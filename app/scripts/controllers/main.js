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
    $scope.config = configService.firebaseEnvironment();
    $scope.temperature = automatrService.getTemperature();
    $scope.brightness = automatrService.getBrightness();
    $scope.environmentLog = automatrService.environmentLog();
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.temperatureChartConfig = { loading: true };
    $scope.brightnessChartConfig = { loading: true };

    $scope.temperature.$on('loaded', function (data) {
    	$scope.thermometerChartConfig = chartConfigService.createThermometerConfig(data);
    });

    $scope.environmentLog.$on('loaded', function (data) {
            $scope.tempLog = _.chain(data)
                .filter(function (item) {
                    return item.temperature !== undefined;
                })
                .map(function (item) {
                return item.temperature;
            }).value();
            $scope.brightnessLog = _.chain(data)
                .filter(function (item) {
                    return item.brightness !== undefined 
                })
                .map(function (item) {
                return item.brightness;
            }).value();
            $scope.temperatureChartConfig = chartConfigService.createEnvironmentChartConfig('Temperature', 'spline', $scope.tempLog, '#910000', "°C");
            $scope.brightnessChartConfig = chartConfigService.createEnvironmentChartConfig('Brightness', 'spline', $scope.brightnessLog, '#2f7ed8');
        });
   });
