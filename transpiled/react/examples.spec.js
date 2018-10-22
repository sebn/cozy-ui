'use strict';

var _testFromStyleguidist = require('./testFromStyleguidist');

var _testFromStyleguidist2 = _interopRequireDefault(_testFromStyleguidist);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeRequire = function makeRequire(subpath) {
  return function (m) {
    if (m.indexOf('.') === 0) {
      return require('./' + _path2.default.join(subpath, m));
    } else {
      return require(m);
    }
  };
};

var testComponent = function testComponent(ComponentName) {
  (0, _testFromStyleguidist2.default)(ComponentName, _path2.default.join(__dirname, ComponentName, 'Readme.md'), makeRequire(ComponentName));
};

testComponent('ActionMenu');
testComponent('Avatar');
testComponent('Badge');
testComponent('Button');
testComponent('ButtonAction');
testComponent('Checkbox');
testComponent('Field');
testComponent('Hero');
testComponent('Icon');
testComponent('Label');
testComponent('ListItemText');
testComponent('Menu');
testComponent('Radio');
testComponent('SelectBox');
testComponent('Sidebar');
testComponent('Spinner');
testComponent('Text');
testComponent('Textarea');
testComponent('Toggle');