const path = require('path');

const getPath = pathName => {
  return path.join('../../pub-dir', (pathName));
};
module.exports = {
  getPath
};
