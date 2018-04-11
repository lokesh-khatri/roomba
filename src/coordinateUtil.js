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

function sumCoordinates(currentCoordinates, coordinatesToSum) {
  return {
    x: currentCoordinates.x + coordinatesToSum.x,
    y: currentCoordinates.y + coordinatesToSum.y
  };
}

function arrayIncludesCoordinate(coordinate, coordinateArray) {
  return coordinateArray.filter(({ x, y }) => x === coordinate.x && y === coordinate.y).length > 0;
}

function areCoordinatesWithinBounds(coordinates, bounds) {
  return areCoordinatesWithinMaxBounds(coordinates, bounds) &&
         areCoordinatesWithinMinBounds(coordinates);
}

function areCoordinatesWithinMaxBounds(coordinates = {}, bounds = {}) {
  return coordinates.x <= bounds.x && coordinates.y <= bounds.y;
}

function areCoordinatesWithinMinBounds({ x, y } = {}) {
  return x >= 0 && y >= 0;
}

module.exports = {
  stringContainsOnlyTwoNumbersAndASpace,
  extractCoordinatesFromString,
  areCoordinatesWithinBounds,
  sumCoordinates,
  arrayIncludesCoordinate
};
