function stringContainsOnlyTwoNumbersAndASpace(_) {
  return /^[\d]+\s[\d]+/.test(_);
}

function extractCoordinatesFromString(_) {
  if (stringContainsOnlyTwoNumbersAndASpace(_)) {
    const _arr = _.split(' ');

    return {
      x: Number(_arr[0]),
      y: Number(_arr[1])
    };
  }
}

module.exports = {
  stringContainsOnlyTwoNumbersAndASpace,
  extractCoordinatesFromString
};
