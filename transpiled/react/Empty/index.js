'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Text = require('../Text');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-empty': 'styles__c-empty___3w5oV',
  'c-empty-img': 'styles__c-empty-img___2GC4d',
  'c-empty-title': 'styles__c-empty-title___2HduE',
  'c-empty-text': 'styles__c-empty-text___3HnvR'
};
var Empty = exports.Empty = function Empty(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      text = _ref.text,
      children = _ref.children,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['c-empty'], className) },
    _react2.default.createElement(_Icon2.default, {
      className: styles['c-empty-img'],
      icon: icon,
      width: '100%',
      height: '100%'
    }),
    title && _react2.default.createElement(
      _Text.MainTitle,
      { tag: 'h2', className: styles['c-empty-title'] },
      title
    ),
    text && _react2.default.createElement(
      _Text.Text,
      { tag: 'p', className: styles['c-empty-text'] },
      text
    ),
    _react2.default.createElement(
      'div',
      { className: styles['c-empty-text'] },
      children
    )
  );
};

Empty.propTypes = {
  icon: _propTypes2.default.object.isRequired,
  title: _propTypes2.default.node.isRequired,
  text: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = Empty;