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
  'u-visuallyhidden': 'styles__u-visuallyhidden___2f_VX',
  'u-hide': 'styles__u-hide___3qNH1',
  'u-hide--mob': 'styles__u-hide--mob___3nlp1',
  'u-hide--tablet': 'styles__u-hide--tablet___33S8p',
  'u-hide--desk': 'styles__u-hide--desk___3NYwG',
  'u-error': 'styles__u-error___3HzD_',
  'u-error--warning': 'styles__u-error--warning___39QiK',
  'u-valid': 'styles__u-valid___2nCh5',
  'u-warn': 'styles__u-warn___28agU',
  'u-black': 'styles__u-black___1RxQ8',
  'u-white': 'styles__u-white___sZse1',
  'u-paleGrey': 'styles__u-paleGrey___16IBh',
  'u-silver': 'styles__u-silver___16-S-',
  'u-coolGrey': 'styles__u-coolGrey___mg7gF',
  'u-slateGrey': 'styles__u-slateGrey___3HyEI',
  'u-charcoalGrey': 'styles__u-charcoalGrey___1BDc7',
  'u-zircon': 'styles__u-zircon___lFzcE',
  'u-frenchPass': 'styles__u-frenchPass___vxVbS',
  'u-dodgerBlue': 'styles__u-dodgerBlue___30oA6',
  'u-scienceBlue': 'styles__u-scienceBlue___3OP5q',
  'u-puertoRico': 'styles__u-puertoRico___2l4Gu',
  'u-emerald': 'styles__u-emerald___2WiOc',
  'u-malachite': 'styles__u-malachite___1BGfs',
  'u-texasRose': 'styles__u-texasRose___1-ypX',
  'u-chablis': 'styles__u-chablis___2MIZL',
  'u-yourPink': 'styles__u-yourPink___1YfDE',
  'u-pomegranate': 'styles__u-pomegranate___1JBJp',
  'u-monza': 'styles__u-monza___2N0IX',
  'u-portage': 'styles__u-portage___nzhfh',
  'u-azure': 'styles__u-azure___2QjaI',
  'u-melon': 'styles__u-melon___2ZlTL',
  'u-blazeOrange': 'styles__u-blazeOrange___24mbu',
  'u-mango': 'styles__u-mango___3uvdE',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___20a7a',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___23KND',
  'u-purpley': 'styles__u-purpley___330us',
  'u-lightishPurple': 'styles__u-lightishPurple___L1UFv',
  'u-barney': 'styles__u-barney___2ldOP',
  'u-weirdGreen': 'styles__u-weirdGreen___DN2j8',
  'u-ellipsis': 'styles__u-ellipsis___1XUV-',
  'u-midellipsis': 'styles__u-midellipsis___2ml6Q',
  'c-input-checkbox': 'styles__c-input-checkbox___2CzvY',
  'is-error': 'styles__is-error___3UPnf',
  'spin': 'styles__spin___3NpSD'
};


var Checkbox = function Checkbox(props) {
  var className = props.className,
      value = props.value,
      name = props.name,
      label = props.label,
      error = props.error,
      mixed = props.mixed,
      restProps = (0, _objectWithoutProperties3.default)(props, ['className', 'value', 'name', 'label', 'error', 'mixed']);

  return _react2.default.createElement(
    'label',
    {
      className: (0, _classnames2.default)(styles['c-input-checkbox'], (0, _defineProperty3.default)({}, styles['is-error'], error), className),
      'aria-checked': mixed ? 'mixed' : ''
    },
    _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox', value: value, name: name }, restProps)),
    _react2.default.createElement(
      'span',
      null,
      label
    )
  );
};

Checkbox.propTypes = {
  className: _propTypes2.default.string,
  value: _propTypes2.default.string,
  name: _propTypes2.default.string,
  error: _propTypes2.default.bool,
  mixed: _propTypes2.default.bool,
  label: _propTypes2.default.string
};

Checkbox.defaultProps = {
  className: '',
  value: '',
  name: '',
  error: false,
  mixed: false,
  label: ''
};

exports.default = Checkbox;