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
  'u-visuallyhidden': 'styles__u-visuallyhidden___29iuJ',
  'u-hide': 'styles__u-hide___1VIM0',
  'u-hide--mob': 'styles__u-hide--mob___1vwpd',
  'u-hide--tablet': 'styles__u-hide--tablet___l4rVL',
  'u-hide--desk': 'styles__u-hide--desk___iKjoO',
  'u-error': 'styles__u-error___177n_',
  'u-error--warning': 'styles__u-error--warning___1MfR-',
  'u-valid': 'styles__u-valid___2PpZN',
  'u-warn': 'styles__u-warn___31rfz',
  'u-black': 'styles__u-black___1hXYd',
  'u-white': 'styles__u-white___2oNn8',
  'u-paleGrey': 'styles__u-paleGrey___39GTl',
  'u-silver': 'styles__u-silver___iqRGg',
  'u-coolGrey': 'styles__u-coolGrey___vjzZ9',
  'u-slateGrey': 'styles__u-slateGrey___31cT6',
  'u-charcoalGrey': 'styles__u-charcoalGrey___1NdXZ',
  'u-zircon': 'styles__u-zircon___U4-8D',
  'u-frenchPass': 'styles__u-frenchPass___3iCn6',
  'u-dodgerBlue': 'styles__u-dodgerBlue___2ESk8',
  'u-scienceBlue': 'styles__u-scienceBlue___3QHa-',
  'u-puertoRico': 'styles__u-puertoRico___2y-Uw',
  'u-emerald': 'styles__u-emerald___27IUv',
  'u-malachite': 'styles__u-malachite___1eCEO',
  'u-texasRose': 'styles__u-texasRose___DyPuh',
  'u-chablis': 'styles__u-chablis___3cM3L',
  'u-yourPink': 'styles__u-yourPink___3Qizv',
  'u-pomegranate': 'styles__u-pomegranate___1G8SC',
  'u-monza': 'styles__u-monza___3DFI3',
  'u-portage': 'styles__u-portage___3pX-v',
  'u-azure': 'styles__u-azure___3qXsj',
  'u-melon': 'styles__u-melon___3VsYF',
  'u-blazeOrange': 'styles__u-blazeOrange___3pARi',
  'u-mango': 'styles__u-mango___U6I5n',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___1sk95',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___2wpkg',
  'u-purpley': 'styles__u-purpley___1bu1L',
  'u-lightishPurple': 'styles__u-lightishPurple___gb28g',
  'u-barney': 'styles__u-barney___1CVZS',
  'u-weirdGreen': 'styles__u-weirdGreen___3Q4uE',
  'u-ellipsis': 'styles__u-ellipsis___3AC_N',
  'u-midellipsis': 'styles__u-midellipsis___3XvEE',
  'c-input-text': 'styles__c-input-text___3TAv1',
  'is-error': 'styles__is-error___3lsCJ',
  'c-input-text--tiny': 'styles__c-input-text--tiny___MzMoD',
  'c-input-text--medium': 'styles__c-input-text--medium___28jPV',
  'c-input-text--fullwidth': 'styles__c-input-text--fullwidth___33o_f',
  'spin': 'styles__spin___1UBe7'
};


var Input = function Input(props) {
  var _cx;

  var type = props.type,
      id = props.id,
      className = props.className,
      value = props.value,
      placeholder = props.placeholder,
      error = props.error,
      size = props.size,
      fullwidth = props.fullwidth,
      restProps = (0, _objectWithoutProperties3.default)(props, ['type', 'id', 'className', 'value', 'placeholder', 'error', 'size', 'fullwidth']);

  return _react2.default.createElement('input', (0, _extends3.default)({
    type: type,
    id: id,
    className: (0, _classnames2.default)(styles['c-input-text'], (_cx = {}, (0, _defineProperty3.default)(_cx, styles['is-error'], error), (0, _defineProperty3.default)(_cx, styles['c-input-text--' + size], size), (0, _defineProperty3.default)(_cx, styles['c-input-text--fullwidth'], fullwidth), _cx), className),
    placeholder: placeholder,
    value: value
  }, restProps));
};

Input.propTypes = {
  type: _propTypes2.default.oneOf(['text', 'password', 'email', 'url']),
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['tiny', 'medium']),
  fullwidth: _propTypes2.default.bool
};

Input.defaultProps = {
  type: 'text',
  error: false,
  fullwidth: false
};

exports.default = Input;