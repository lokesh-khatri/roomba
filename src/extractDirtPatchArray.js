const coordinateUtil = require('./coordinateUtil');

function extractDirtPatchArray(_) {
  _.splice(0, 2);
  return _
    .filter(coordinateUtil.stringContainsOnlyTwoNumbersAndASpace)
    .map(coordinateUtil.extractCoordinatesFromString);
}

module.exports = extractDirtPatchArray;

