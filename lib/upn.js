function upn() {
  //
}

const multipliers = [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
  'N', 'P', 'Q', 'R', 'T', 'U', 'V', 'W', 'Y', 'X', 'Z'];

upn.prototype.validate = (string) => {
  const total = string.split('').reduce((accumulator, part, index) => {
    if (parseInt(part, 10) !== parseInt(part, 10)) {
      return 0;
    }

    return accumulator + (parseInt(part, 10) * multipliers[index]);
  }, 0);

  return string[0] === letters[total % 23];
};

module.exports = upn;