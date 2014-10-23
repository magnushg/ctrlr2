'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.configService
 * @description
 * # configService
 * Factory in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .factory('configService', function () {
    // Service logic
    // ...

    var baseConfig = {
      firebaseEnvironment: 'automatr-test'
    };

    // Public API here
    return {
      firebaseEnvironment: function () {
        return baseConfig.firebaseEnvironment;
      }
    };
  });

