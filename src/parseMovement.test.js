const parseMovement = require('./parseMovement');

describe('parseMovement', () => {
  it('should return object for moving north', () => {
    const result = parseMovement('N');

    expect(result).toEqual({
      x: 0,
      y: 1
    });
  });

  it('should return object for moving south', () => {
    const result = parseMovement('S');

    expect(result).toEqual({
      x: 0,
      y: -1
    });
  });

  it('should return object for moving west', () => {
    const result = parseMovement('W');

    expect(result).toEqual({
      x: -1,
      y: 0
    });
  });

  it('should return object for moving east', () => {
    const result = parseMovement('E');

    expect(result).toEqual({
      x: 1,
      y: 0
    });
  });

  it('should return default object for no argument', () => {
    const result = parseMovement();

    expect(result).toEqual({
      x: 0,
      y: 0
    });
  });

  it('should return object for invalid argument', () => {
    const result = parseMovement('x');

    expect(result).toEqual({
      x: 0,
      y: 0
    });
  });
});
