'use strict';

/**
 * @ngdoc filter
 * @name yoAngularApp.filter:userFriendlyBrightness
 * @function
 * @description
 * # userFriendlyBrightness
 * Filter in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .filter('userFriendlyBrightness', function () {
    return function (input) {      
        switch (true) {
        	case (input <= 15):
        		return 'dark';
        	case (input <= 200):
        		return 'dim';
        	case (input <= 500):
        		return 'light';
        	case (input <= 800):
        		return 'bright';
        	case (input > 800):
        		return 'very bright';
        	default:
        		return 'No value';
        }
    };
  });
