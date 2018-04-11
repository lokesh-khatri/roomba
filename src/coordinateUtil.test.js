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
});
