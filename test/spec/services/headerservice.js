'use strict';

describe('Service: headerservice', function () {

  // load the service's module
  beforeEach(module('grantunedApp'));

  // instantiate service
  var headerservice;
  beforeEach(inject(function (_headerservice_) {
    headerservice = _headerservice_;
  }));

  it('should do something', function () {
    expect(!!headerservice).toBe(true);
  });

});
