const UPN = require('../lib/upn');

let upn;

describe('UPN', () => {
  beforeEach(() => {
    upn = new UPN();
  });

  it('should be able to validate given strings', () => {
    expect(upn.validate('')).toEqual(false);
    expect(upn.validate('an-invalid-string')).toEqual(false);

    expect(upn.validate('Z213282605052')).toEqual(true);
  });
});
