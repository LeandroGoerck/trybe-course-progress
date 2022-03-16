
function describeNumbers(number) {
  if (number > 0) return 'positive';
  if (number < 0) return 'negative';
  if (number == 0) return 'neutral';

}

module.exports = describeNumbers;