const hoover = require('./hoover');

const getSampleData = () => {
  return {
    roomDimensions: {
      x: 5,
      y: 5
    },
    roombaPosition: {
      x: 1,
      y: 2
    },
    dirtPatches: [
      { x: 2, y: 3 },
      { x: 3, y: 4 }
    ],
    navigate: 'ENENW'
  };
};

describe('hoover', () => {
  it('should return object with final roomba position', () => {
    const sampleData = getSampleData();
    sampleData.navigate = 'NNNEES';


    const result = hoover(sampleData);

    expect(result.roombaPosition).toEqual({
      x: 3,
      y: 4
    });
  });

  it('should return object with no movement of roomba if on edge', () => {
    const sampleData = getSampleData();
    sampleData.navigate = 'NNNWWN';
    sampleData.roombaPosition = {
      x: 0,
      y: 5
    };

    const result = hoover(sampleData);

    expect(result.roombaPosition).toEqual({
      x: 0,
      y: 5
    });
  });

  it('should return object with number of patches of dirt cleaned', () => {
    const result = hoover(getSampleData());

    expect(result.numCleanedDirtPatches).toEqual(2);
  });
});
