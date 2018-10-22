'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require('../Button');

var _Text = require('../Text');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _palette = require('../palette');

var _palette2 = _interopRequireDefault(_palette);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'context-header': 'styles__context-header___QuTup',
  'context-header-content': 'styles__context-header-content___1NQh0',
  'context-header-icon': 'styles__context-header-icon___1G3bH'
};


var ContextHeader = function ContextHeader(_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      text = _ref.text,
      onClose = _ref.onClose,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['context-header'], className) },
    icon && _react2.default.createElement(_Icon2.default, { className: styles['context-header-icon'], icon: icon }),
    _react2.default.createElement(
      'div',
      { className: styles['context-header-content'] },
      _react2.default.createElement(
        _Text.Title,
        { ellipsis: true },
        title
      ),
      text && _react2.default.createElement(
        _Text.Text,
        { ellipsis: true },
        text
      )
    ),
    onClose && _react2.default.createElement(
      _Button.Button,
      {
        theme: 'close',
        className: styles['c-modal-close'],
        onClick: onClose,
        extension: 'narrow',
        type: 'button'
      },
      _react2.default.createElement(_Icon2.default, {
        icon: 'cross',
        width: '14',
        height: '14',
        color: _palette2.default['coolGrey']
      })
    )
  );
};

ContextHeader.propTypes = {
  icon: _propTypes2.default.node,
  title: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  className: _propTypes2.default.string
};

exports.default = ContextHeader;