function parseFileInput(fileInput) {
  if (fileInput === undefined) {
    return undefined;
  }
  const fileInputSplitByLine = fileInput.split('\n');
  const roomDimensions = extractCoordinatesFromString(fileInputSplitByLine[0]);
  const roombaPosition = extractCoordinatesFromString(fileInputSplitByLine[1]);
  const dirtPatches = extractDirtPatchArray(fileInputSplitByLine);
  const navigate = fileInputSplitByLine[fileInputSplitByLine.length - 1];

  return {
    roomDimensions,
    roombaPosition,
    dirtPatches,
    navigate
  };
}

function stringContainsOnlyTwoNumbersAndASpace(_) {
  return /^[\d]+\s[\d]+/.test(_);
}

function extractCoordinatesFromString(_) {
  const _arr = _.split(' ');

  return {
    x: Number(_arr[0]),
    y: Number(_arr[1])
  };
}

function extractDirtPatchArray(_) {
  _.splice(0, 2);
  return _
    .filter(stringContainsOnlyTwoNumbersAndASpace)
    .map(extractCoordinatesFromString);
}


module.exports = parseFileInput;
