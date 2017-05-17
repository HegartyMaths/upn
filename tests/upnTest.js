const assert = require('assert');
const UPN = require('../lib/upn');

let upn;

describe('Validating UPNs', () => {
  beforeEach(() => {
    upn = new UPN();
  });

  it('should be able to validate given strings', () => {
    assert.equal(false, upn.validate(''));
    assert.equal(false, upn.validate('an-invalid-string'));
    assert.equal(false, upn.validate('A123456789123'));

    assert.equal(true, upn.validate('Z213282605052'));
  });

  it('should only be passed a string to validate', () => {
    assert.throws(() => upn.validate(), TypeError, 'Validate must be passed a string.');
    assert.throws(() => upn.validate([]), TypeError, 'Validate must be passed a string.');
    assert.throws(() => upn.validate({}), TypeError, 'Validate must be passed a string.');
  });
});

describe('Generating UPNs', () => {
  beforeEach(() => {
    upn = new UPN();
  });

  it('should generate valid UPNs', () => {
    const generatedUPN = upn.generate();

    assert.equal(true, upn.validate(generatedUPN));
  });
});
