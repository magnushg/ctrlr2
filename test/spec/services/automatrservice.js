'use strict';

describe('Service: automatrService', function () {

  // load the service's module
  beforeEach(module('yoAngularApp'));

  // instantiate service
  var automatrService;
  beforeEach(inject(function (_automatrService_) {
    automatrService = _automatrService_;
  }));

  it('should do something', function () {
    expect(!!automatrService).toBe(true);
  });

});
