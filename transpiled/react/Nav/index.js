'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavIcon = exports.genNavLink = exports.NavLink = exports.NavText = exports.NavItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-nav': 'styles__c-nav___33dZy',
  'c-nav-item': 'styles__c-nav-item___3XOLK',
  'c-nav-icon': 'styles__c-nav-icon___hrJUe',
  'is-active': 'styles__is-active___2D0jN',
  'c-nav-text': 'styles__c-nav-text___1J3yU',
  'c-nav-link': 'styles__c-nav-link___3mK6W',
  'active': 'styles__active___1yH42'
};
var NavItem = exports.NavItem = function NavItem(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    'li',
    { className: styles['c-nav-item'] },
    children
  );
};

var NavText = exports.NavText = function NavText(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'span',
    { className: styles['c-nav-text'] },
    children
  );
};

var NavLink = exports.NavLink = {
  className: styles['c-nav-link'],
  activeClassName: styles['is-active']
};

var genNavLink = exports.genNavLink = function genNavLink(RRNavLink) {
  return function (_ref3) {
    var to = _ref3.to,
        children = _ref3.children;
    return _react2.default.createElement(
      RRNavLink,
      {
        to: to,
        className: NavLink.className,
        activeClassName: NavLink.activeClassName
      },
      children
    );
  };
};

var NavIcon = exports.NavIcon = function NavIcon(_ref4) {
  var icon = _ref4.icon;
  return _react2.default.createElement(
    'span',
    { className: (0, _classnames2.default)(styles['c-nav-icon']) },
    _react2.default.createElement(_Icon2.default, { icon: icon })
  );
};

var Nav = function Nav(_ref5) {
  var children = _ref5.children;

  return _react2.default.createElement(
    'nav',
    { role: 'navigation' },
    _react2.default.createElement(
      'ul',
      { className: styles['c-nav'] },
      children
    )
  );
};

exports.default = Nav;

Nav.NavItem = NavItem;