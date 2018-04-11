function printHooverResult(roombaObject) {
  console.log(`Final roomba position: x: ${roombaObject.roombaPosition.x}, y: ${roombaObject.roombaPosition.y}`);
  console.log(`Number of dirt patches cleaned: ${roombaObject.numCleanedDirtPatches}`);
}

module.exports = printHooverResult;
