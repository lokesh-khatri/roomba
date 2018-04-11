const readFile = require('./readFile');
const path = require('path');
const parseFileInput = require('./parseFileInput');
const hoover = require('./hoover');
const printHooverResult = require('./printHooverResults');

const filePath = 'test_assets/input.txt';

readFile(path.resolve(__dirname, filePath), 'utf-8')
  .then(parseFileInput)
  .then(hoover)
  .then(printHooverResult);
