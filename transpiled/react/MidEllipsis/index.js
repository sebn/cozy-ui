'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MidEllipsis = function MidEllipsis(props) {
  var text = props.text,
      className = props.className;

  var partLength = Math.round(text.length / 2);
  var firstPart = text.substr(0, partLength);
  var lastPart = text.substr(partLength, text.length);

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)('u-midellipsis', className) },
    _react2.default.createElement(
      'span',
      null,
      firstPart
    ),
    _react2.default.createElement(
      'span',
      null,
      lastPart
    )
  );
};

MidEllipsis.propTypes = {
  text: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string
};

exports.default = MidEllipsis;