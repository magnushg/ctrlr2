'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.chartConfigService
 * @description
 * # chartConfigService
 * Factory in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .factory('chartConfigService', function () {
    // Service logic
    // ...

    var createEnvironmentChartConfig = function(name, chartType, tempLog, color, yAxis) {
            return {
                options: {
                    chart: {
                        zoomType: 'x'
                    }                   
                },
                series: [{
                    name: name,
                    data: _.map(tempLog, function (logItem) {
                        return {x: logItem.timestamp, y: parseFloat(logItem.value)};
                    }),
                    pointStart: _.first(tempLog).timestamp,
                    type: chartType,
                    color: color,
                    marker: {
                        enabled: false
                    },
                    turboThreshold: 0
                }],
                title: {
                    text: ''
                },
                xAxis: {
                    type: 'datetime'               
                },
                yAxis : {
                    title : {
                        text : yAxis || ''
                    }
                },                
                loading: false,
                credits: {
            enabled: false
          }
        }                
    };

    var createThermometerConfig = function(temperature) {
              return { 
                options : {
                
                chart: {
              type: 'gauge',
              plotBackgroundColor: null,
              plotBackgroundImage: null,
              plotBorderWidth: 0,
              plotShadow: false
            },
              pane: {
                startAngle: -150,
                endAngle: 150
            },
            legend: {
              margin: 0
            }
          },
          title: {
              text: '',
              margin: 0
          },         
          // the value axis
          yAxis: {
              min: -30,
              max: 50,
              
              minorTickInterval: 'auto',
              minorTickWidth: 1,
              minorTickLength: 10,
              minorTickPosition: 'inside',
              minorTickColor: '#000',
      
              tickPixelInterval: 30,
              tickWidth: 2,
              tickPosition: 'inside',
              tickLength: 10,
              tickColor: '#000',
              labels: {
                  step: 2,
                  rotation: 'auto'
              },
              title: {
                  text: '°C'
              },
              plotBands: [{
                  from: -30,
                  to: 0,
                  color: '#257ef2' // blue
              }, {
                  from: 0,
                  to: 50,
                  color: '#a50c26' // red
              }]        
          },
      
          series: [{
              name: 'temperature',
              data: [parseFloat(temperature.value)],
              tooltip: {
                  valueSuffix: '°C'
              }
          }],
          credits: {
          enabled: false
        },  
    }
    }
    // Public API here
    return {
      createEnvironmentChartConfig: createEnvironmentChartConfig,
      createThermometerConfig: createThermometerConfig
    };
  });
