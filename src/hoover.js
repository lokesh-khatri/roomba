const parseMovement = require('./parseMovement');
const coordinateUtil = require('./coordinateUtil');

function moveRoomba(movementDirection, roombaObject) {
  const coordinateToIncrement = parseMovement(movementDirection);
  const newCoordinate = coordinateUtil.sumCoordinates(roombaObject.roombaPosition, coordinateToIncrement);

  if (coordinateUtil.areCoordinatesWithinBounds(newCoordinate, roombaObject.roomDimensions)) {
    roombaObject.roombaPosition = newCoordinate;
  }

  if (coordinateUtil.arrayIncludesCoordinate(roombaObject.roombaPosition, roombaObject.dirtPatches)) {
    roombaObject.numCleanedDirtPatches++;
    roombaObject.dirtPatches =
      coordinateUtil.removeCoordinateFromArray(roombaObject.roombaPosition, roombaObject.dirtPatches);
  }
}

function hoover(roombaObject) {
  roombaObject.numCleanedDirtPatches = 0;

  roombaObject.navigate
    .split('')
    .forEach(movementDirection => moveRoomba(movementDirection, roombaObject));

  return roombaObject;
}

module.exports = hoover;
