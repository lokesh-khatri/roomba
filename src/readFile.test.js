const readFile = require('./readFile');
const path = require('path');

describe('readFile', () => {
  it('should read text file', () => {
    const testFilePath = 'test_assets/test.txt';

    const result = readFile(path.resolve(__dirname, testFilePath), 'utf-8');

    return expect(result).resolves.toEqual('Hello World!');
  });

  it('should reject if file does not exist', () => {
    const testFilePath = 'test_assets/nonExistentFile.txt';

    const result = readFile(path.resolve(__dirname, testFilePath), 'utf-8');

    return expect(result).rejects.toThrowError();
  });
});
