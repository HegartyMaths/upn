const UPN = require('../lib/upn');

let upn;

describe('Validating UPNs', () => {
  beforeEach(() => {
    upn = new UPN();
  });

  it('should be able to validate given strings', () => {
    expect(upn.validate('')).toEqual(false);
    expect(upn.validate('an-invalid-string')).toEqual(false);
    expect(upn.validate('A123456789123')).toEqual(false);

    expect(upn.validate('Z213282605052')).toEqual(true);
  });

  it('should only be passed a string to validate', () => {
    expect(() => upn.validate()).toThrowError(TypeError);
    expect(() => upn.validate([])).toThrowError(TypeError);
    expect(() => upn.validate({})).toThrowError(TypeError);
  });
});

describe('Generating UPNs', () => {
  beforeEach(() => {
    upn = new UPN();
  });

  it('should generate valid UPNs', () => {
    const generatedUPN = upn.generate();

    expect(upn.validate(generatedUPN)).toEqual(true);
  });
});
