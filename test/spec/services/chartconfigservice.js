'use strict';

describe('Service: chartConfigService', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var chartConfigService;
  beforeEach(inject(function (_chartConfigService_) {
    chartConfigService = _chartConfigService_;
  }));

  it('should do something', function () {
    expect(!!chartConfigService).toBe(true);
  });

});
