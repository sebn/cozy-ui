'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-actionbtn': 'styles__c-actionbtn___162t6',
  'spin': 'styles__spin___1WjkR',
  'u-visuallyhidden': 'styles__u-visuallyhidden___1ohp6',
  'u-hide': 'styles__u-hide___1h00f',
  'c-actionbtn--compact': 'styles__c-actionbtn--compact___37yb2',
  'u-hide--mob': 'styles__u-hide--mob___2Z9hH',
  'u-hide--tablet': 'styles__u-hide--tablet___35TI9',
  'u-hide--desk': 'styles__u-hide--desk___LO0S5',
  'u-error': 'styles__u-error___2j-vB',
  'u-error--warning': 'styles__u-error--warning___2YuP0',
  'u-valid': 'styles__u-valid___21dX0',
  'u-warn': 'styles__u-warn___28i3_',
  'u-black': 'styles__u-black___2qggd',
  'u-white': 'styles__u-white___w6CXa',
  'u-paleGrey': 'styles__u-paleGrey___1FvpW',
  'u-silver': 'styles__u-silver___1lEaS',
  'u-coolGrey': 'styles__u-coolGrey___1GuhE',
  'u-slateGrey': 'styles__u-slateGrey___QEp1L',
  'u-charcoalGrey': 'styles__u-charcoalGrey___2tOpW',
  'u-zircon': 'styles__u-zircon___16rT-',
  'u-frenchPass': 'styles__u-frenchPass___3cfUB',
  'u-dodgerBlue': 'styles__u-dodgerBlue___2L_K4',
  'u-scienceBlue': 'styles__u-scienceBlue___35YyX',
  'u-puertoRico': 'styles__u-puertoRico___VKO_a',
  'u-emerald': 'styles__u-emerald___SM4Aw',
  'u-malachite': 'styles__u-malachite___23EIO',
  'u-texasRose': 'styles__u-texasRose___1kHWU',
  'u-chablis': 'styles__u-chablis___1NsPi',
  'u-yourPink': 'styles__u-yourPink___2t_Ue',
  'u-pomegranate': 'styles__u-pomegranate___ib5X-',
  'u-monza': 'styles__u-monza___1mQjo',
  'u-portage': 'styles__u-portage___3RH_P',
  'u-azure': 'styles__u-azure___3C_NX',
  'u-melon': 'styles__u-melon___2G-7u',
  'u-blazeOrange': 'styles__u-blazeOrange___3-BYz',
  'u-mango': 'styles__u-mango___13DXo',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___b-63s',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___3jbYx',
  'u-purpley': 'styles__u-purpley___38P-h',
  'u-lightishPurple': 'styles__u-lightishPurple___1xuwq',
  'u-barney': 'styles__u-barney___1PqN9',
  'u-weirdGreen': 'styles__u-weirdGreen___sXZcB',
  'u-ellipsis': 'styles__u-ellipsis___1KLm1',
  'c-actionbtn-label': 'styles__c-actionbtn-label___3nDeu',
  'u-midellipsis': 'styles__u-midellipsis___2xfA4',
  'c-actionbtn--normal': 'styles__c-actionbtn--normal___1HGLQ',
  'c-actionbtn--error': 'styles__c-actionbtn--error___2pt97',
  'c-actionbtn--new': 'styles__c-actionbtn--new___1_BNn',
  'c-actionbtn-icon': 'styles__c-actionbtn-icon___2Od_-'
};


var ButtonAction = function ButtonAction(props) {
  var _cx;

  var type = props.type,
      disabled = props.disabled,
      children = props.children,
      label = props.label,
      leftIcon = props.leftIcon,
      rightIcon = props.rightIcon,
      compact = props.compact,
      className = props.className,
      onClick = props.onClick,
      restProps = (0, _objectWithoutProperties3.default)(props, ['type', 'disabled', 'children', 'label', 'leftIcon', 'rightIcon', 'compact', 'className', 'onClick']);

  return _react2.default.createElement(
    'button',
    (0, _extends3.default)({
      disabled: disabled,
      type: 'button',
      role: 'button',
      className: (0, _classnames2.default)(styles['c-actionbtn'], (_cx = {}, (0, _defineProperty3.default)(_cx, styles['c-actionbtn--' + type], type), (0, _defineProperty3.default)(_cx, styles['c-actionbtn--compact'], compact), _cx), className),
      onClick: onClick,
      title: compact ? label : undefined
    }, restProps),
    _react2.default.createElement(
      'span',
      null,
      _Icon2.default.isProperIcon(leftIcon) ? _react2.default.createElement(_Icon2.default, { icon: leftIcon }) : leftIcon,
      label && _react2.default.createElement(
        'span',
        { 'data-action': 'label', className: styles['c-actionbtn-label'] },
        label
      ),
      rightIcon && _react2.default.createElement(
        'span',
        { 'data-action': 'icon', className: styles['c-actionbtn-icon'] },
        _Icon2.default.isProperIcon(rightIcon) ? _react2.default.createElement(_Icon2.default, { icon: rightIcon }) : rightIcon
      ),
      children
    )
  );
};

ButtonAction.propTypes = {
  type: _propTypes2.default.oneOf(['new', 'normal', 'error']).isRequired,
  label: _propTypes2.default.node,
  leftIcon: _propTypes2.default.node,
  rightIcon: _propTypes2.default.node,
  disabled: _propTypes2.default.bool,
  compact: _propTypes2.default.bool
};

ButtonAction.defaultProps = {
  type: 'normal',
  disabled: false,
  compact: false
};

exports.default = ButtonAction;