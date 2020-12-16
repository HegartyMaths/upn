function upn() {}

const multipliers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
  'N', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'];

function calculateScore(input) {
  const total = input.split('').reduce((accumulator, part, index) => {
    return accumulator + (parseInt(part) * multipliers[index]);
  }, 0);

  return total % letters.length;
}

upn.prototype.validate = (input) => {
  if (typeof input !== 'string') {
    throw new TypeError('Validate must be passed a string.');
  }

  const index = calculateScore(input.substring(1));

  return input[0] === letters[index];
};

upn.prototype.generate = () => {
  const number = `${Math.round(Math.random() * 1000000000000)}`
  return `${letters[calculateScore(number)]}${number}`;
};

module.exports = upn;
