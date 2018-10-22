'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonLink = exports.Button = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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
  'c-btn': 'styles__c-btn___-2Vnj',
  'c-btn--regular': 'styles__c-btn--regular___2HUly',
  'c-btn--secondary': 'styles__c-btn--secondary___3Br_N',
  'c-btn--danger-outline': 'styles__c-btn--danger-outline___1mO1B',
  'c-btn--subtle': 'styles__c-btn--subtle___OknKf',
  'c-btn--danger': 'styles__c-btn--danger___17T_C',
  'c-btn--highlight': 'styles__c-btn--highlight___2jRfu',
  'spin': 'styles__spin___alZ_V',
  'u-visuallyhidden': 'styles__u-visuallyhidden___TtNL_',
  'u-hide': 'styles__u-hide___1U5B1',
  'u-hide--mob': 'styles__u-hide--mob___2rt8O',
  'u-hide--tablet': 'styles__u-hide--tablet___gtWBP',
  'u-hide--desk': 'styles__u-hide--desk___3QSbv',
  'u-error': 'styles__u-error___1MFJU',
  'u-error--warning': 'styles__u-error--warning___1ni48',
  'u-valid': 'styles__u-valid___phrFL',
  'u-warn': 'styles__u-warn___3dh8-',
  'u-black': 'styles__u-black___V6Vds',
  'u-white': 'styles__u-white___3h21i',
  'u-paleGrey': 'styles__u-paleGrey___2_cnG',
  'u-silver': 'styles__u-silver___1Wov9',
  'u-coolGrey': 'styles__u-coolGrey___1je7n',
  'u-slateGrey': 'styles__u-slateGrey___3U9sA',
  'u-charcoalGrey': 'styles__u-charcoalGrey___3mfZe',
  'u-zircon': 'styles__u-zircon___-_Be_',
  'u-frenchPass': 'styles__u-frenchPass___CL_VF',
  'u-dodgerBlue': 'styles__u-dodgerBlue___2R4h1',
  'u-scienceBlue': 'styles__u-scienceBlue___2veHn',
  'u-puertoRico': 'styles__u-puertoRico___24fLJ',
  'u-emerald': 'styles__u-emerald___35wUl',
  'u-malachite': 'styles__u-malachite___112H-',
  'u-texasRose': 'styles__u-texasRose___16sF8',
  'u-chablis': 'styles__u-chablis___S2wp3',
  'u-yourPink': 'styles__u-yourPink___2Fu6E',
  'u-pomegranate': 'styles__u-pomegranate___1YMiO',
  'u-monza': 'styles__u-monza___1Ydp5',
  'u-portage': 'styles__u-portage___h44u-',
  'u-azure': 'styles__u-azure___6liav',
  'u-melon': 'styles__u-melon___2DPAW',
  'u-blazeOrange': 'styles__u-blazeOrange___3mX3D',
  'u-mango': 'styles__u-mango___2F35l',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___3ZVp-',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___1t4uH',
  'u-purpley': 'styles__u-purpley___2Vwgo',
  'u-lightishPurple': 'styles__u-lightishPurple___2s7y5',
  'u-barney': 'styles__u-barney___TDhmf',
  'u-weirdGreen': 'styles__u-weirdGreen___25MtR',
  'u-ellipsis': 'styles__u-ellipsis___3t6Hu',
  'u-midellipsis': 'styles__u-midellipsis___3Gxo_',
  'c-btn--alpha': 'styles__c-btn--alpha___2ECZi',
  'c-btn--action': 'styles__c-btn--action___36KFm',
  'c-btn--close': 'styles__c-btn--close___3f0AP',
  'c-btn--tiny': 'styles__c-btn--tiny___1pFv6',
  'c-btn--small': 'styles__c-btn--small___3ArkI',
  'c-btn--large': 'styles__c-btn--large___2gatN',
  'c-btn--full': 'styles__c-btn--full___2VmR1',
  'c-btn--narrow': 'styles__c-btn--narrow___27FHD',
  'c-btn--round': 'styles__c-btn--round___1Lkyl'
};


var btnClass = function btnClass(options) {
  var _cx;

  var className = options.className,
      extension = options.extension,
      size = options.size,
      theme = options.theme,
      variant = options.variant,
      round = options.round;

  return (0, _classnames2.default)(className, styles['c-btn'], (_cx = {}, (0, _defineProperty3.default)(_cx, styles['c-btn--' + theme], theme), (0, _defineProperty3.default)(_cx, styles['c-btn--' + size], size), (0, _defineProperty3.default)(_cx, styles['c-btn--' + variant], variant), (0, _defineProperty3.default)(_cx, styles['c-btn--' + extension], extension), (0, _defineProperty3.default)(_cx, styles['c-btn--round'], round), _cx));
};

var transformToAria = function transformToAria(tag) {
  return function (props) {
    var busy = props.busy,
        disabled = props.disabled,
        newProps = (0, _objectWithoutProperties3.default)(props, ['busy', 'disabled']);


    if (busy) {
      newProps['aria-busy'] = true;
    }
    if (disabled) {
      newProps['aria-disabled'] = true;
    }
    if (tag === 'button' && disabled) {
      newProps['disabled'] = true;
    }

    return newProps;
  };
};

var tagToTransformProps = {
  button: transformToAria('button'),
  a: transformToAria('a')
};

var identity = function identity(x) {
  return x;
};

var BaseButton = function BaseButton(props) {
  var children = props.children,
      icon = props.icon,
      iconOnly = props.iconOnly,
      label = props.label,
      subtle = props.subtle,
      className = props.className,
      extension = props.extension,
      round = props.round,
      size = props.size,
      theme = props.theme,
      Tag = props.tag,
      restProps = (0, _objectWithoutProperties3.default)(props, ['children', 'icon', 'iconOnly', 'label', 'subtle', 'className', 'extension', 'round', 'size', 'theme', 'tag']);


  var transformProps = tagToTransformProps[Tag] || identity;
  var tooltip = iconOnly ? label : null;
  var iconOnlyClass = iconOnly ? 'u-visuallyhidden' : null;

  return _react2.default.createElement(
    Tag,
    (0, _extends3.default)({}, transformProps(restProps), {
      className: btnClass({
        extension: extension,
        round: round,
        size: size,
        theme: theme,
        className: className,
        variant: subtle && 'subtle'
      }),
      title: tooltip
    }),
    _react2.default.createElement(
      'span',
      null,
      _Icon2.default.isProperIcon(icon) ? _react2.default.createElement(_Icon2.default, { icon: icon, 'aria-hidden': true, focusable: 'false' }) : icon,
      label && _react2.default.createElement(
        'span',
        { className: iconOnlyClass },
        label
      ),
      children
    )
  );
};

var Button = function Button(props) {
  return _react2.default.createElement(BaseButton, props);
};
var ButtonLink = function ButtonLink(props) {
  return _react2.default.createElement(BaseButton, props);
};

exports.Button = Button;
exports.ButtonLink = ButtonLink;


var DefaultButton = function DefaultButton(props) {
  if (!props.tag) {
    return _react2.default.createElement(Button, props);
  } else {
    return _react2.default.createElement(BaseButton, props);
  }
};

exports.default = DefaultButton;

// Proptypes (unfortunately, Styleguidist does not pick
// proptypes coming from a spread so we have to keep both
// proptypes in sync)

Button.propTypes = {
  /** DEPRECATED: please use label and icon */
  children: _propTypes2.default.node,
  /** Label of the button */
  label: _propTypes2.default.node.isRequired,
  /** Icon of the button */
  icon: _propTypes2.default.node,
  /** Displays only the icon, not the label */
  iconOnly: _propTypes2.default.bool,
  theme: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['tiny', 'small', 'large']),
  /** Spacing of the button */
  extension: _propTypes2.default.oneOf(['narrow', 'full']),
  /** Will make the button round */
  round: _propTypes2.default.bool,
  /** Extra class */
  className: _propTypes2.default.string,
  /** What to do on click */
  onClick: _propTypes2.default.func,

  // Only for Button
  /** Will display a spinner if true */
  busy: _propTypes2.default.bool,
  /** Disables the button */
  disabled: _propTypes2.default.bool,
  /** Type of the underlying `<button />` */
  type: _propTypes2.default.oneOf(['button', 'reset', 'submit']),
  /** Use the `subtle` alternative look for the Button  */
  subtle: _propTypes2.default.bool
};

Button.defaultProps = {
  type: 'submit',
  tag: 'button'
};

ButtonLink.defaultProps = {
  tag: 'a'
};