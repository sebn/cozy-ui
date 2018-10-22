'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-menu__inner': 'styles__c-menu__inner___2g_mC',
  'c-menu': 'styles__c-menu___2YTiU',
  'c-menu--left': 'styles__c-menu--left___3wamY',
  'c-menu--right': 'styles__c-menu--right___3wxbb',
  'c-menu__inner--opened': 'styles__c-menu__inner--opened___sJHKG',
  'c-menu__btn': 'styles__c-menu__btn___18qF8',
  'c-menu__item': 'styles__c-menu__item___1sXjs',
  'c-menu__item-icon': 'styles__c-menu__item-icon___kzdkW',
  'c-menu__item--disabled': 'styles__c-menu__item--disabled___OHDks'
};

var Button = function Button(_ref) {
  var buttonClassName = _ref.buttonClassName,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      text = _ref.text;

  return _react2.default.createElement(
    'button',
    {
      role: 'button',
      className: (0, _classnames2.default)('c-btn', styles['c-menu__btn'], buttonClassName),
      disabled: disabled,
      onClick: onClick
    },
    text
  );
};

exports.default = Button;