const extractDirtPatchArray = require('./extractDirtPatchArray');

describe('extractDirtPatchArray', () => {
  it('should return array with coordinate object', () => {
    const sampleData = [
      '5 5',
      '4 3',
      '3 2',
      '1 3',
      '1 4'
    ];
    const result = extractDirtPatchArray(sampleData);

    expect(result).toEqual([
      { x: 3, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 }
    ]);
  });

  it('should return empty array if no dirt patches available', () => {
    const sampleData = [
      '5 5',
      '4 3'
    ];
    const result = extractDirtPatchArray(sampleData);

    expect(result).toEqual([]);
  });
});
