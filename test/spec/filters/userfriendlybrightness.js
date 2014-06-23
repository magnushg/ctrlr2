'use strict';

describe('Filter: userFriendlyBrightness', function () {

  // load the filter's module
  beforeEach(module('yoAngularApp'));

  // initialize a new instance of the filter before each test
  var userFriendlyBrightness;
  beforeEach(inject(function ($filter) {
    userFriendlyBrightness = $filter('userFriendlyBrightness');
  }));

  it('should return the input prefixed with "userFriendlyBrightness filter:"', function () {
    var text = 'angularjs';
    expect(userFriendlyBrightness(text)).toBe('userFriendlyBrightness filter: ' + text);
  });

});
