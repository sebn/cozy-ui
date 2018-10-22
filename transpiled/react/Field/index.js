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

var _Label = require('../Label');

var _Label2 = _interopRequireDefault(_Label);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Textarea = require('../Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___1huRr',
  'u-hide': 'styles__u-hide___3vAQh',
  'u-hide--mob': 'styles__u-hide--mob___3Z3G8',
  'u-hide--tablet': 'styles__u-hide--tablet___3JrDq',
  'u-hide--desk': 'styles__u-hide--desk___2O_Jm',
  'u-error': 'styles__u-error___3dRxG',
  'u-error--warning': 'styles__u-error--warning___1rTIj',
  'u-valid': 'styles__u-valid___3TCtk',
  'u-warn': 'styles__u-warn___IrGQ5',
  'u-black': 'styles__u-black___2mWfm',
  'u-white': 'styles__u-white___333Ks',
  'u-paleGrey': 'styles__u-paleGrey___2KzEl',
  'u-silver': 'styles__u-silver___35Oxf',
  'u-coolGrey': 'styles__u-coolGrey___1-TT1',
  'u-slateGrey': 'styles__u-slateGrey___2wrpw',
  'u-charcoalGrey': 'styles__u-charcoalGrey___39UOM',
  'u-zircon': 'styles__u-zircon___uDtTw',
  'u-frenchPass': 'styles__u-frenchPass___1nY0S',
  'u-dodgerBlue': 'styles__u-dodgerBlue___3WxGd',
  'u-scienceBlue': 'styles__u-scienceBlue___r-_P7',
  'u-puertoRico': 'styles__u-puertoRico___18goy',
  'u-emerald': 'styles__u-emerald___YN5zq',
  'u-malachite': 'styles__u-malachite___12cgS',
  'u-texasRose': 'styles__u-texasRose___LoyHj',
  'u-chablis': 'styles__u-chablis___3PKcS',
  'u-yourPink': 'styles__u-yourPink___2ELQw',
  'u-pomegranate': 'styles__u-pomegranate___3SiLy',
  'u-monza': 'styles__u-monza___2rKf-',
  'u-portage': 'styles__u-portage___2-NkP',
  'u-azure': 'styles__u-azure___2Oto9',
  'u-melon': 'styles__u-melon___19u7l',
  'u-blazeOrange': 'styles__u-blazeOrange___2nDmZ',
  'u-mango': 'styles__u-mango___7kxEe',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___HaWyw',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___1BSW2',
  'u-purpley': 'styles__u-purpley___hoC_K',
  'u-lightishPurple': 'styles__u-lightishPurple___1QLKt',
  'u-barney': 'styles__u-barney___1I3jW',
  'u-weirdGreen': 'styles__u-weirdGreen___5VmlE',
  'u-ellipsis': 'styles__u-ellipsis___ZCHX2',
  'u-midellipsis': 'styles__u-midellipsis___38xUq',
  'o-field': 'styles__o-field___3n5HM',
  'spin': 'styles__spin___2YilK'
};


var Field = function Field(props) {
  var className = props.className,
      label = props.label,
      id = props.id,
      type = props.type,
      value = props.value,
      placeholder = props.placeholder,
      error = props.error;


  var inputType = function inputType(type) {
    switch (type) {
      case 'textarea':
        return _react2.default.createElement(_Textarea2.default, {
          id: id,
          placeholder: placeholder,
          value: value,
          error: error
        });
      case 'text':
      case 'password':
      case 'email':
      case 'url':
        return _react2.default.createElement(_Input2.default, {
          id: id,
          type: type,
          placeholder: placeholder,
          value: value,
          error: error
        });
      default:
        throw new Error('type must be text, password, email, url or textarea, got ' + type);
    }
  };

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['o-field'], className) },
    _react2.default.createElement(
      _Label2.default,
      { forID: id },
      label
    ),
    inputType(type)
  );
};

Field.propTypes = {
  label: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['text', 'password', 'email', 'url', 'textarea']),
  value: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  error: _propTypes2.default.bool
};

Field.defaultProps = {
  label: '',
  id: '',
  type: 'text',
  value: '',
  placeholder: '',
  error: false
};

exports.default = Field;