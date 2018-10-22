'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntentWrapper = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Modal = require('../Modal');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___2CCas',
  'u-hide': 'styles__u-hide___Fklql',
  'u-hide--mob': 'styles__u-hide--mob___3v3zU',
  'u-hide--tablet': 'styles__u-hide--tablet___1shiW',
  'u-hide--desk': 'styles__u-hide--desk___SlLrt',
  'u-error': 'styles__u-error___3J7Ms',
  'u-error--warning': 'styles__u-error--warning___9L9cl',
  'u-valid': 'styles__u-valid___2AA1B',
  'u-warn': 'styles__u-warn___2BFE6',
  'u-black': 'styles__u-black___1hPCd',
  'u-white': 'styles__u-white___31cKc',
  'u-paleGrey': 'styles__u-paleGrey___3rpSK',
  'u-silver': 'styles__u-silver___2Sl_g',
  'u-coolGrey': 'styles__u-coolGrey___1l09Y',
  'u-slateGrey': 'styles__u-slateGrey___23f9u',
  'u-charcoalGrey': 'styles__u-charcoalGrey___3L7qj',
  'u-zircon': 'styles__u-zircon___XgDtN',
  'u-frenchPass': 'styles__u-frenchPass___37N2m',
  'u-dodgerBlue': 'styles__u-dodgerBlue___3Y5gb',
  'u-scienceBlue': 'styles__u-scienceBlue___Ul3Me',
  'u-puertoRico': 'styles__u-puertoRico___3yVRx',
  'u-emerald': 'styles__u-emerald___19xci',
  'u-malachite': 'styles__u-malachite___2e2KR',
  'u-texasRose': 'styles__u-texasRose___2hKUe',
  'u-chablis': 'styles__u-chablis___3olvf',
  'u-yourPink': 'styles__u-yourPink___3yJAl',
  'u-pomegranate': 'styles__u-pomegranate___2LZwW',
  'u-monza': 'styles__u-monza___2l8e9',
  'u-portage': 'styles__u-portage___2oqWT',
  'u-azure': 'styles__u-azure___2tsHg',
  'u-melon': 'styles__u-melon___1sDFe',
  'u-blazeOrange': 'styles__u-blazeOrange___3LLz_',
  'u-mango': 'styles__u-mango___2bKXz',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___3hTzs',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___3gYdh',
  'u-purpley': 'styles__u-purpley___3X9ti',
  'u-lightishPurple': 'styles__u-lightishPurple___3i47v',
  'u-barney': 'styles__u-barney___1kGvM',
  'u-weirdGreen': 'styles__u-weirdGreen___2k8qm',
  'u-ellipsis': 'styles__u-ellipsis___2wH2N',
  'u-midellipsis': 'styles__u-midellipsis___1ZVer',
  'intentWrapper': 'styles__intentWrapper___1ZMvW',
  'intentHeader': 'styles__intentHeader___3TDUp',
  'intentContent': 'styles__intentContent___1ilx7',
  'spin': 'styles__spin___29uW_'
};
var IntentWrapper = exports.IntentWrapper = function IntentWrapper(_ref) {
  var children = _ref.children,
      appName = _ref.appName,
      appEditor = _ref.appEditor,
      appIcon = _ref.appIcon,
      iconSrc = _ref.iconSrc,
      iconDest = _ref.iconDest,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['intentWrapper'], className) },
    _react2.default.createElement(_Modal.ModalHeader, {
      appIcon: appIcon,
      appName: appName,
      appEditor: appEditor,
      className: styles['intentHeader']
    }),
    _react2.default.createElement(
      _Modal.ModalContent,
      {
        className: styles['intentContent'],
        iconSrc: iconSrc,
        iconDest: iconDest
      },
      children
    )
  );
};

IntentWrapper.propTypes = {
  appIcon: _propTypes2.default.string,
  appEditor: _propTypes2.default.string,
  appName: _propTypes2.default.string,
  iconSrc: _propTypes2.default.node,
  iconDest: _propTypes2.default.node
};

exports.default = IntentWrapper;