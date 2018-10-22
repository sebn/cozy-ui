'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Caption = exports.Bold = exports.SubTitle = exports.Title = exports.MainTitle = exports.Text = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-title-h1': 'styles__u-title-h1___fimho',
  'u-title-h2': 'styles__u-title-h2___2cES6',
  'u-title-h3': 'styles__u-title-h3___1ZGqN',
  'u-title-h4': 'styles__u-title-h4___1lGMy',
  'u-text': 'styles__u-text___2UfQa',
  'u-caption': 'styles__u-caption___1VRxy'
};


var BaseText = function BaseText(props) {
  var className = props.className,
      children = props.children,
      tag = props.tag,
      ellipsis = props.ellipsis,
      restProps = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'tag', 'ellipsis']);

  var Tag = tag;
  return _react2.default.createElement(
    Tag,
    (0, _extends3.default)({
      className: (0, _classnames2.default)((0, _defineProperty3.default)({}, 'u-ellipsis', ellipsis), className)
    }, restProps),
    children
  );
};

var Text = function Text(_ref) {
  var className = _ref.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref, ['className']);
  return _react2.default.createElement(BaseText, (0, _extends3.default)({ className: (0, _classnames2.default)(className, styles['u-text']) }, restProps));
};
exports.Text = Text;
var MainTitle = function MainTitle(_ref2) {
  var className = _ref2.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref2, ['className']);
  return _react2.default.createElement(BaseText, (0, _extends3.default)({ className: (0, _classnames2.default)(className, styles['u-title-h1']) }, restProps));
};
exports.MainTitle = MainTitle;
var Title = function Title(_ref3) {
  var className = _ref3.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref3, ['className']);
  return _react2.default.createElement(BaseText, (0, _extends3.default)({ className: (0, _classnames2.default)(className, styles['u-title-h2']) }, restProps));
};
exports.Title = Title;
var SubTitle = function SubTitle(_ref4) {
  var className = _ref4.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref4, ['className']);
  return _react2.default.createElement(BaseText, (0, _extends3.default)({ className: (0, _classnames2.default)(className, styles['u-title-h3']) }, restProps));
};
exports.SubTitle = SubTitle;
var Bold = function Bold(_ref5) {
  var className = _ref5.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref5, ['className']);
  return _react2.default.createElement(BaseText, (0, _extends3.default)({ className: (0, _classnames2.default)(className, styles['u-title-h4']) }, restProps));
};
exports.Bold = Bold;
var Caption = function Caption(_ref6) {
  var className = _ref6.className,
      restProps = (0, _objectWithoutProperties3.default)(_ref6, ['className']);
  return _react2.default.createElement(BaseText, (0, _extends3.default)({ className: (0, _classnames2.default)(className, styles['u-caption']) }, restProps));
};

// Props
exports.Caption = Caption;
var commonProps = {
  children: _propTypes2.default.node.isRequired,
  className: _propTypes2.default.string,
  tag: _propTypes2.default.string,
  ellipsis: _propTypes2.default.bool
};

Text.propTypes = Object.assign({}, commonProps);
MainTitle.propTypes = Object.assign({}, commonProps);
Title.propTypes = Object.assign({}, commonProps);
SubTitle.propTypes = Object.assign({}, commonProps);
Bold.propTypes = Object.assign({}, commonProps);
Caption.propTypes = Object.assign({}, commonProps);

// Default Props
var commonDefaultProps = {
  tag: 'div',
  ellipsis: false
};

Text.defaultProps = Object.assign({}, commonDefaultProps);
MainTitle.defaultProps = Object.assign({}, commonDefaultProps);
Title.defaultProps = Object.assign({}, commonDefaultProps);
SubTitle.defaultProps = Object.assign({}, commonDefaultProps);
Bold.defaultProps = Object.assign({}, commonDefaultProps);
Caption.defaultProps = Object.assign({}, commonDefaultProps);

exports.default = Text;