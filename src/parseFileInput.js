const coordinateUtil = require('./coordinateUtil');
const extractDirtPatchArray = require('./extractDirtPatchArray');

function parseFileInput(fileInput) {
  if (fileInput === undefined) {
    return undefined;
  }
  const fileInputSplitByLine = fileInput.split('\n');
  const roomDimensions = coordinateUtil.extractCoordinatesFromString(fileInputSplitByLine[0]);
  const roombaPosition = coordinateUtil.extractCoordinatesFromString(fileInputSplitByLine[1]);
  const dirtPatches = extractDirtPatchArray(fileInputSplitByLine);
  const navigate = fileInputSplitByLine[fileInputSplitByLine.length - 1];

  return {
    roomDimensions,
    roombaPosition,
    dirtPatches,
    navigate
  };
}

module.exports = parseFileInput;
