'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _palette = require('../palette');

var _palette2 = _interopRequireDefault(_palette);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-avatar': 'styles__c-avatar___PpDI-',
  'c-avatar--small': 'styles__c-avatar--small___1Y_Pv',
  'c-avatar--medium': 'styles__c-avatar--medium___hjYh_',
  'c-avatar-initials': 'styles__c-avatar-initials___310qC',
  'c-avatar-image': 'styles__c-avatar-image___3yJnb'
};


var nameToColor = function nameToColor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  var colors = [_palette2.default['azure'], _palette2.default['melon'], _palette2.default['blazeOrange'], _palette2.default['pomegranate'], _palette2.default['mango'], _palette2.default['pumpkinOrange'], _palette2.default['darkPeriwinkle'], _palette2.default['purpley'], _palette2.default['lightishPurple'], _palette2.default['weirdGreen'], _palette2.default['puertoRico'], _palette2.default['emerald']];
  var key = Array.from(name.toUpperCase()).map(function (letter) {
    return letter.charCodeAt(0);
  }).reduce(function (sum, number) {
    return sum + number;
  }, 0) % colors.length;
  return colors[key];
};

var Avatar = exports.Avatar = function Avatar(_ref) {
  var text = _ref.text,
      textId = _ref.textId,
      image = _ref.image,
      size = _ref.size,
      className = _ref.className,
      style = _ref.style;

  var colored = {
    backgroundColor: '' + nameToColor(textId || text),
    color: 'white'
  };

  if (style) {
    Object.assign(colored, style);
  }

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(styles['c-avatar'], (0, _defineProperty3.default)({}, styles['c-avatar--' + size], size), className),
      style: text ? colored : style
    },
    image && _react2.default.createElement('img', { src: image, className: styles['c-avatar-image'], alt: '' }),
    !image && text && _react2.default.createElement(
      'span',
      { className: styles['c-avatar-initials'] },
      text
    ),
    !image && !text && _react2.default.createElement(_Icon2.default, { icon: 'people' })
  );
};

Avatar.propTypes = {
  text: _propTypes2.default.string,
  image: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['small', 'medium']),
  className: _propTypes2.default.string
};

Avatar.defaultProps = {
  text: '',
  image: '',
  size: 'medium',
  className: ''
};

exports.default = Avatar;