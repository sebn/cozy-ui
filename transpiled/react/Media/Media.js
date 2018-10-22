'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Bd = exports.Img = exports.Media = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'media': 'styles__media___cSJMp',
  'media--top': 'styles__media--top___K9w0I',
  'media--bottom': 'styles__media--bottom___21YWJ',
  'bd': 'styles__bd___1Uv-F',
  'img': 'styles__img___3SHpG'
};


/**
 * Useful to align image/icon and content.
 */
var Media = function Media(_ref) {
  var children = _ref.children,
      className = _ref.className,
      align = _ref.align,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'align']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(styles.media, className, align ? styles['media--' + align] : null)
    }, rest),
    children
  );
};

exports.Media = Media;
var Img = function Img(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      style = _ref2.style,
      rest = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'className', 'style']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(styles.img, className), style: style }, rest),
    children
  );
};

exports.Img = Img;
var Bd = function Bd(_ref3) {
  var children = _ref3.children,
      className = _ref3.className,
      style = _ref3.style,
      rest = (0, _objectWithoutProperties3.default)(_ref3, ['children', 'className', 'style']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(styles.bd, className), style: style }, rest),
    children
  );
};
exports.Bd = Bd;