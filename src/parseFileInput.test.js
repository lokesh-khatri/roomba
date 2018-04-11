const parseFileInput = require('./parseFileInput');

const getSampleData = () => '5 5\n4 4\n1 2\n2 3\nNSWENS';

describe('parseFileInput', () => {
  it('should return undefined if no argument provided', () => {
    const result = parseFileInput();

    expect(result).toBeFalsy();
  });

  it('should return object containing room dimensions object', () => {
    const result = parseFileInput(getSampleData());

    expect(result.roomDimensions).toEqual({
      x: 5,
      y: 5
    });
  });

  it('should return object containing intial roomba position', () => {
    const result = parseFileInput(getSampleData());

    expect(result.roombaPosition).toEqual({
      x: 4,
      y: 4
    });
  });

  it('should return object containing array of patches of dirt', () => {
    const result = parseFileInput(getSampleData());

    expect(result.dirtPatches).toEqual([
      { x: 1, y: 2 }, { x: 2, y: 3 }
    ]);
  });

  it('should return object containing navigation instructions', () => {
    const result = parseFileInput(getSampleData());

    expect(result.navigate).toEqual('NSWENS');
  });
});
