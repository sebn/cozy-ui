'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mkComponent = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mkComponent = function mkComponent(Tag) {
  var extra = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className']);
    var extraClassName = extra.className,
        restExtra = (0, _objectWithoutProperties3.default)(extra, ['className']);


    return _react2.default.createElement(
      Tag,
      (0, _extends3.default)({}, restExtra, props, {
        className: (className || '') + ' ' + (extraClassName || '')
      }),
      children
    );
  };
};

exports.mkComponent = mkComponent;