'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = exports.CTA = exports.Paragraph = exports.Sections = exports.Section = exports.Subtitle = exports.Title = exports.Hero = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'Hero': 'styles__Hero___14z7_',
  'Hero-title': 'styles__Hero-title___256Uz',
  'Hero-subtitle': 'styles__Hero-subtitle___1E_WG',
  'Hero-sections': 'styles__Hero-sections___ETV6e',
  'Hero-section': 'styles__Hero-section___1BcNz',
  'Hero-cta': 'styles__Hero-cta___2KhwU'
};


// Cannot use mkComponent since it is not picked up by styleguidist
var Hero = function Hero(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties3.default)(_ref, ['children']);
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, props, { className: styles.Hero }),
    children
  );
};

exports.Hero = Hero;
exports.default = Hero;
var Title = exports.Title = (0, _utils.mkComponent)('h2', { className: styles['Hero-title'] });
var Subtitle = exports.Subtitle = (0, _utils.mkComponent)('h3', {
  className: styles['Hero-subtitle']
});
var Section = exports.Section = (0, _utils.mkComponent)('div', { className: styles['Hero-section'] });
var Sections = exports.Sections = (0, _utils.mkComponent)('div', {
  className: styles['Hero-sections']
});
var Paragraph = exports.Paragraph = (0, _utils.mkComponent)('p', {});
var CTA = exports.CTA = (0, _utils.mkComponent)('p', { className: styles['Hero-cta'] });
var Icon = exports.Icon = function Icon(_ref2) {
  var color = _ref2.color,
      icon = _ref2.icon;
  return _react2.default.createElement(_Icon2.default, { width: 80, height: 80, style: { color: color }, icon: icon });
};

Hero.Title = Title;
Hero.Icon = Icon;
Hero.Subtitle = Subtitle;
Hero.Section = Section;
Hero.Sections = Sections;
Hero.Paragraph = Paragraph;
Hero.CTA = CTA;