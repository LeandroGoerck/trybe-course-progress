
function describeNumbers(number) {
  if (typeof number !== 'number') return 'the given value is not a number';
  if (number > 0) return 'positive';
  if (number < 0) return 'negative';
  if (number == 0) return 'neutral';

}

module.exports = describeNumbers;