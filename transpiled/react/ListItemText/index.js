'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = require('../Text');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-list-text': 'styles__c-list-text___3kc3E',
  'u-caption': 'styles__u-caption___2WxM5'
};


var ListItemText = function ListItemText(props) {
  var primaryText = props.primaryText,
      secondaryText = props.secondaryText,
      className = props.className,
      ellipsis = props.ellipsis,
      children = props.children,
      rest = (0, _objectWithoutProperties3.default)(props, ['primaryText', 'secondaryText', 'className', 'ellipsis', 'children']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: (0, _classnames2.default)(styles['c-list-text'], className) }, rest),
    primaryText && _react2.default.createElement(
      _Text.Text,
      { ellipsis: ellipsis },
      primaryText
    ),
    secondaryText && _react2.default.createElement(
      _Text.Caption,
      { ellipsis: ellipsis },
      secondaryText
    ),
    children
  );
};

ListItemText.propTypes = {
  children: _propTypes2.default.node,
  primaryText: _propTypes2.default.string,
  secondaryText: _propTypes2.default.string,
  className: _propTypes2.default.string,
  ellipsis: _propTypes2.default.bool
};

ListItemText.defaultProps = {
  ellipsis: true
};

exports.default = ListItemText;