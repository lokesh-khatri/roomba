const coordinateUtil = require('./coordinateUtil');

describe('coordinateUtil', () => {
  describe('stringContainsLetters', () => {
    it('should return false if no arguments provided', () => {
      const result = coordinateUtil.stringContainsOnlyTwoNumbersAndASpace();

      expect(result).toBeFalsy();
    });

    it('should return true if argument two numbers and a space', () => {
      const result = coordinateUtil.stringContainsOnlyTwoNumbersAndASpace('5 5');

      expect(result).toBeTruthy();
    });

    it('should return false if argument two numbers and no space', () => {
      const result = coordinateUtil.stringContainsOnlyTwoNumbersAndASpace('55');

      expect(result).toBeFalsy();
    });

    it('should return false if only 1 number provided and a space', () => {
      const result = coordinateUtil.stringContainsOnlyTwoNumbersAndASpace('5 ');

      expect(result).toBeFalsy();
    });
  });

  describe('extractCoordinatesFromString', () => {
    it('should return undefined if invalid input provided', () => {
      const result = coordinateUtil.extractCoordinatesFromString('5 ');

      expect(result).toBeUndefined();
    });

    it('should return object containg x and y coordinates', () => {
      const result = coordinateUtil.extractCoordinatesFromString('5 5');

      expect(result).toEqual({
        x: 5,
        y: 5
      });
    });
  });

  describe('arrayIncludesCoordinates', () => {
    it('should return true array contains coordinates', () => {
      const coordinate = {
        x: 1,
        y: 2
      };

      const coordinateArr = [
        { x: 2, y: 3 },
        { x: 1, y: 2 }
      ];

      const result = coordinateUtil.arrayIncludesCoordinate(coordinate, coordinateArr);

      expect(result).toBeTruthy();
    });

    it('should return false array contains coordinates', () => {
      const coordinate = {
        x: 1,
        y: 2
      };

      const coordinateArr = [
        { x: 2, y: 3 },
        { x: 0, y: 0 }
      ];

      const result = coordinateUtil.arrayIncludesCoordinate(coordinate, coordinateArr);

      expect(result).toBeFalsy();
    });
  });

  describe('removeCoordinateFromArray', () => {
    it('should remove coordinate from given array', () => {
      const coordinate = {
        x: 1,
        y: 2
      };

      const coordinateArr = [
        { x: 2, y: 3 },
        { x: 1, y: 2 }
      ];

      const result = coordinateUtil.removeCoordinateFromArray(coordinate, coordinateArr);

      expect(
        coordinateUtil.arrayIncludesCoordinate(coordinate, result)
      ).toBeFalsy();
    });
  });

  describe('areCoordinatesBounds', () => {
    it('should return true if coordinates are within bounds', () => {
      const bounds = {
        x: 2,
        y: 2
      };

      const coordinates = {
        x: 1,
        y: 0
      };

      const result = coordinateUtil.areCoordinatesWithinBounds(coordinates, bounds);
      expect(result).toBeTruthy();
    });

    it('should return false if coordinates are not within bounds', () => {
      const bounds = {
        x: 2,
        y: 2
      };

      const coordinates = {
        x: 3,
        y: 4
      };

      const result = coordinateUtil.areCoordinatesWithinBounds(coordinates, bounds);
      expect(result).toBeFalsy();
    });

    it('should return false if any of the coordinates are not provided', () => {
      const coordinates = {
        x: 3,
        y: 4
      };

      const result = coordinateUtil.areCoordinatesWithinBounds(coordinates);
      expect(result).toBeFalsy();
    });

    it('should return true if coordinates are within mininimum bounds', () => {
      const coordinates = {
        x: 1,
        y: 0
      };

      const bounds = {
        x: 3,
        y: 4
      };

      const result = coordinateUtil.areCoordinatesWithinBounds(coordinates, bounds);
      expect(result).toBeTruthy();
    });

    it('should return false if coordinates are not within mininimum bounds', () => {
      const coordinates = {
        x: -1,
        y: 0
      };

      const bounds = {
        x: 3,
        y: 4
      };

      const result = coordinateUtil.areCoordinatesWithinBounds(coordinates, bounds);
      expect(result).toBeFalsy();
    });
  });
});
