'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iconsSprite = require('./icons-sprite');

var _iconsSprite2 = _interopRequireDefault(_iconsSprite);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var displayNone = { display: 'none' };

var IconSprite = function IconSprite() {
  return _react2.default.createElement('div', {
    style: displayNone,
    dangerouslySetInnerHTML: { __html: _iconsSprite2.default }
  });
};

exports.default = IconSprite;