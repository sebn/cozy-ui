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
  'u-visuallyhidden': 'styles__u-visuallyhidden___2n08v',
  'u-hide': 'styles__u-hide___3NLme',
  'u-hide--mob': 'styles__u-hide--mob___3Bnb1',
  'u-hide--tablet': 'styles__u-hide--tablet___2CyeJ',
  'u-hide--desk': 'styles__u-hide--desk___2RylE',
  'u-error': 'styles__u-error___180la',
  'u-error--warning': 'styles__u-error--warning___YjlF_',
  'u-valid': 'styles__u-valid___3I6RE',
  'u-warn': 'styles__u-warn___34RYv',
  'u-black': 'styles__u-black___2zsH1',
  'u-white': 'styles__u-white___284ie',
  'u-paleGrey': 'styles__u-paleGrey___vGN-2',
  'u-silver': 'styles__u-silver___3v8Hp',
  'u-coolGrey': 'styles__u-coolGrey___2jysu',
  'u-slateGrey': 'styles__u-slateGrey___300jb',
  'u-charcoalGrey': 'styles__u-charcoalGrey___uWTPi',
  'u-zircon': 'styles__u-zircon___1PwSB',
  'u-frenchPass': 'styles__u-frenchPass___1GXf6',
  'u-dodgerBlue': 'styles__u-dodgerBlue___rdgDp',
  'u-scienceBlue': 'styles__u-scienceBlue___3UzAD',
  'u-puertoRico': 'styles__u-puertoRico___3I64r',
  'u-emerald': 'styles__u-emerald___2BMLz',
  'u-malachite': 'styles__u-malachite___1eNDE',
  'u-texasRose': 'styles__u-texasRose___O75CY',
  'u-chablis': 'styles__u-chablis___5ZvCK',
  'u-yourPink': 'styles__u-yourPink____KuIZ',
  'u-pomegranate': 'styles__u-pomegranate___359VA',
  'u-monza': 'styles__u-monza___16pRm',
  'u-portage': 'styles__u-portage___5xHum',
  'u-azure': 'styles__u-azure____az5Z',
  'u-melon': 'styles__u-melon___KHd1g',
  'u-blazeOrange': 'styles__u-blazeOrange___1g0gM',
  'u-mango': 'styles__u-mango___Ud6JP',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___1DlGF',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___33OVE',
  'u-purpley': 'styles__u-purpley___1Bu5w',
  'u-lightishPurple': 'styles__u-lightishPurple___1GCEv',
  'u-barney': 'styles__u-barney___3tb-P',
  'u-weirdGreen': 'styles__u-weirdGreen___IZA9p',
  'u-ellipsis': 'styles__u-ellipsis___1Pljj',
  'u-midellipsis': 'styles__u-midellipsis___DyVmp',
  'c-input-radio': 'styles__c-input-radio___XJQt1',
  'is-error': 'styles__is-error___2-12P',
  'spin': 'styles__spin___2iWsM'
};


var Radio = function Radio(props) {
  var className = props.className,
      value = props.value,
      name = props.name,
      label = props.label,
      error = props.error,
      restProps = (0, _objectWithoutProperties3.default)(props, ['className', 'value', 'name', 'label', 'error']);

  return _react2.default.createElement(
    'label',
    {
      className: (0, _classnames2.default)(styles['c-input-radio'], (0, _defineProperty3.default)({}, styles['is-error'], error), className)
    },
    _react2.default.createElement('input', (0, _extends3.default)({ type: 'radio', value: value, name: name }, restProps)),
    _react2.default.createElement(
      'span',
      null,
      label
    )
  );
};

Radio.propTypes = {
  className: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  error: _propTypes2.default.bool,
  label: _propTypes2.default.string.isRequired
};

Radio.defaultProps = {
  error: false
};

exports.default = Radio;