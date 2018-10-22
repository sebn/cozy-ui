'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntentHeader = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'intentHeader': 'styles__intentHeader___m5Qjh',
  'intentHeader-title': 'styles__intentHeader-title___1r4ex',
  'intentHeader-icon': 'styles__intentHeader-icon___3s30C'
};
var IntentHeader = exports.IntentHeader = function IntentHeader(_ref) {
  var appName = _ref.appName,
      appEditor = _ref.appEditor,
      appIcon = _ref.appIcon,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['intentHeader'], className) },
    _react2.default.createElement(
      'h1',
      { className: styles['intentHeader-title'] },
      _react2.default.createElement('img', { className: styles['intentHeader-icon'], src: appIcon }),
      appEditor && _react2.default.createElement(
        'span',
        null,
        appEditor,
        '\xA0'
      ),
      appName
    )
  );
};

IntentHeader.propTypes = {
  appIcon: _propTypes2.default.string,
  appEditor: _propTypes2.default.string,
  appName: _propTypes2.default.string.isRequired
};

IntentHeader.defaultProps = {
  appIcon: '',
  appEditor: '',
  appName: ''
};

exports.default = IntentHeader;