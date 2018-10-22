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

var styles = {
  'o-sidebar': 'styles__o-sidebar___1295j'
};


var Sidebar = function Sidebar(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'aside',
    { className: (0, _classnames2.default)(styles['o-sidebar'], className) },
    children
  );
};

Sidebar.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string
};

exports.default = Sidebar;