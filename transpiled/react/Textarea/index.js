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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___Ly4KV',
  'u-hide': 'styles__u-hide___1-OrE',
  'u-hide--mob': 'styles__u-hide--mob___2fka8',
  'u-hide--tablet': 'styles__u-hide--tablet___3zZqq',
  'u-hide--desk': 'styles__u-hide--desk___1jGyl',
  'u-error': 'styles__u-error___2WofM',
  'u-error--warning': 'styles__u-error--warning___2uYbZ',
  'u-valid': 'styles__u-valid___mMEg5',
  'u-warn': 'styles__u-warn___1MGp7',
  'u-black': 'styles__u-black___1u-eK',
  'u-white': 'styles__u-white___3bGm4',
  'u-paleGrey': 'styles__u-paleGrey___39f-I',
  'u-silver': 'styles__u-silver___1LE0E',
  'u-coolGrey': 'styles__u-coolGrey___znOc8',
  'u-slateGrey': 'styles__u-slateGrey___3YWOs',
  'u-charcoalGrey': 'styles__u-charcoalGrey___3QQbk',
  'u-zircon': 'styles__u-zircon___3k9LO',
  'u-frenchPass': 'styles__u-frenchPass___2TiBb',
  'u-dodgerBlue': 'styles__u-dodgerBlue___2psn6',
  'u-scienceBlue': 'styles__u-scienceBlue___3-eVu',
  'u-puertoRico': 'styles__u-puertoRico___1b5by',
  'u-emerald': 'styles__u-emerald___1PAeH',
  'u-malachite': 'styles__u-malachite___2RFt2',
  'u-texasRose': 'styles__u-texasRose___ky8rc',
  'u-chablis': 'styles__u-chablis___8ZSzb',
  'u-yourPink': 'styles__u-yourPink___3brLR',
  'u-pomegranate': 'styles__u-pomegranate___3964w',
  'u-monza': 'styles__u-monza___1ZQNg',
  'u-portage': 'styles__u-portage___2h-Nm',
  'u-azure': 'styles__u-azure___1uvYo',
  'u-melon': 'styles__u-melon___34xeZ',
  'u-blazeOrange': 'styles__u-blazeOrange___KRrMb',
  'u-mango': 'styles__u-mango___28Ghx',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___1ho3A',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___3jiXh',
  'u-purpley': 'styles__u-purpley___3PtmE',
  'u-lightishPurple': 'styles__u-lightishPurple___uSdY9',
  'u-barney': 'styles__u-barney___3ijcw',
  'u-weirdGreen': 'styles__u-weirdGreen___O8AuJ',
  'u-ellipsis': 'styles__u-ellipsis___KKbuk',
  'u-midellipsis': 'styles__u-midellipsis___3zZT1',
  'c-textarea': 'styles__c-textarea___D7EEH',
  'is-error': 'styles__is-error___1kGLj',
  'c-textarea--tiny': 'styles__c-textarea--tiny___3fmPW',
  'c-textarea--medium': 'styles__c-textarea--medium___T8f3b',
  'c-textarea--fullwidth': 'styles__c-textarea--fullwidth___Ih_mg',
  'spin': 'styles__spin___hGoYA'
};


var Textarea = function Textarea(props) {
  var _cx;

  var className = props.className,
      placeholder = props.placeholder,
      children = props.children,
      error = props.error,
      size = props.size,
      fullwidth = props.fullwidth,
      restProps = (0, _objectWithoutProperties3.default)(props, ['className', 'placeholder', 'children', 'error', 'size', 'fullwidth']);

  return _react2.default.createElement(
    'textarea',
    (0, _extends3.default)({
      placeholder: placeholder,
      className: (0, _classnames2.default)(styles['c-textarea'], (_cx = {}, (0, _defineProperty3.default)(_cx, styles['is-error'], error), (0, _defineProperty3.default)(_cx, styles['c-textarea--' + size], size), (0, _defineProperty3.default)(_cx, styles['c-textarea--fullwidth'], fullwidth), _cx), className)
    }, restProps),
    children
  );
};

Textarea.propTypes = {
  children: _propTypes2.default.node,
  placeholder: _propTypes2.default.string,
  className: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['tiny', 'medium']),
  fullwidth: _propTypes2.default.bool
};

Textarea.defaultProps = {
  placeholder: '',
  error: false,
  fullwidth: false
};

exports.default = Textarea;