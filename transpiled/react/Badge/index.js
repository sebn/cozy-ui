'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Badge = undefined;

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
  'c-badge-root': 'styles__c-badge-root___3Xore',
  'c-badge': 'styles__c-badge___2qZ9Y',
  'c-badge--new': 'styles__c-badge--new___21-Dw',
  'c-badge--normal': 'styles__c-badge--normal___1pXKI',
  'c-badge--error': 'styles__c-badge--error___3lgSC'
};
var Badge = function Badge(_ref) {
  var children = _ref.children,
      content = _ref.content,
      type = _ref.type,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'content', 'type']);

  return _react2.default.createElement(
    'span',
    (0, _extends3.default)({ className: styles['c-badge-root'] }, props),
    children,
    _react2.default.createElement(
      'span',
      {
        className: (0, _classnames2.default)(styles['c-badge'], (0, _defineProperty3.default)({}, styles['c-badge--' + type], type))
      },
      content
    )
  );
};

exports.Badge = Badge;
Badge.propTypes = {
  /** The content of the badge */
  content: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  /** The type of the badge */
  type: _propTypes2.default.oneOf(['normal', 'new', 'error'])
};

Badge.defaultProps = {
  content: '',
  type: 'normal'
};

exports.default = Badge;