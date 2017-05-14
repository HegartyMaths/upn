function upn() {
  //
}

const multipliers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
  'N', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'];

upn.prototype.validate = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError('Validate must be passed a string.');
  }

  const total = input.split('').reduce((accumulator, part, index) => {
    const number = parseInt(part, 10);

    if (isNaN(number)) {
      return 0;
    }

    return accumulator + (number * multipliers[index]);
  }, 0);

  return input[0] === letters[total % 23];
};

module.exports = upn;
