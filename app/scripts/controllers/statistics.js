'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * # StatisticsCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('StatisticsCtrl', function ($scope, configService, automatrService, chartConfigService) {
  	$scope.environmentLog = automatrService.environmentLog();

  	$scope.temperatureChartConfig = { loading: true };
    $scope.brightnessChartConfig = { loading: true };

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
