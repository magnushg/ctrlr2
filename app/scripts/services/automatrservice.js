'use strict';

/**
 * @ngdoc service
 * @name yoAngularApp.automatrService
 * @description
 * # automatrService
 * Factory in the yoAngularApp.
 */
angular.module('yoAngularApp')
  .factory('automatrService', function ($firebase, configService) {
    var firebaseName = configService.firebaseEnvironment();

    var lightswitchRef = new Firebase("https://{0}.firebaseio.com/lightswitch".format(firebaseName));
    var coffeeRef = new Firebase("https://{0}.firebaseio.com/coffee".format(firebaseName));
    var temperatureRef = new Firebase("https://{0}.firebaseio.com/temperature".format(firebaseName));
    var proximityRef = new Firebase("https://{0}.firebaseio.com/proximity".format(firebaseName));
    var brightnessRef = new Firebase("https://{0}.firebaseio.com/brightness".format(firebaseName));
    var logRef = new Firebase("https://{0}.firebaseio.com/environmentLog".format(firebaseName));

    // Public API here
    return {
      getTemperature: function () {
        return $firebase(temperatureRef);
      },
      getBrightness: function () {
        return $firebase(brightnessRef);
      },
      getProximity: function () {
        return $firebase(proximityRef);
      },
      lightswitch: function () {
        return $firebase(lightswitchRef);
      },
      coffeeToggle: function () {
        return $firebase(coffeeRef);
      },
      environmentLog: function () {
        return $firebase(logRef);
      }
    };
  });

 (function () {
    if (!String.prototype.format) {
        var regexes = {};
        String.prototype.format = function (parameters) {
            for (var formatMessage = this, args = arguments, i = args.length; --i >= 0;)
                formatMessage = formatMessage.replace(regexes[i] || (regexes[i] = RegExp("\\{" + (i) + "\\}", "gm")), args[i]);
            return formatMessage;
        };
        if (!String.format) {
            String.format = function (formatMessage, params) {
                for (var args = arguments, i = args.length; --i;)
                    formatMessage = formatMessage.replace(regexes[i - 1] || (regexes[i - 1] = RegExp("\\{" + (i - 1) + "\\}", "gm")), args[i]);
                return formatMessage;
            };
        }
    }
})();