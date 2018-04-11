const parseMovement = require('./parseMovement');
const coordinateUtil = require('./coordinateUtil');

function moveRoomba(roombaObject) {
  roombaObject.numCleanedDirtPatches = 0;

  roombaObject.navigate
    .split('')
    .forEach(movementDirection => {
      const coordinateToIncrement = parseMovement(movementDirection);
      const newCoordinate = coordinateUtil.sumCoordinates(roombaObject.roombaPosition, coordinateToIncrement);
      roombaObject.roombaPosition =
      coordinateUtil.areCoordinatesWithinBounds(newCoordinate, roombaObject.roomDimensions)
        ? newCoordinate
        : roombaObject.roombaPosition;

      if (coordinateUtil.arrayIncludesCoordinate(roombaObject.roombaPosition, roombaObject.dirtPatches)) {
        roombaObject.numCleanedDirtPatches++;
      }
    });
  return roombaObject;
}

module.exports = moveRoomba;
