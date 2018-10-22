'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___1prYX',
  'u-hide': 'styles__u-hide___q_L0z',
  'u-hide--mob': 'styles__u-hide--mob___o5SY1',
  'u-hide--tablet': 'styles__u-hide--tablet___1EdnI',
  'u-hide--desk': 'styles__u-hide--desk___182Om',
  'u-error': 'styles__u-error___H7rX6',
  'u-error--warning': 'styles__u-error--warning___lGLCr',
  'u-valid': 'styles__u-valid___1XwVq',
  'u-warn': 'styles__u-warn___2y4h5',
  'u-black': 'styles__u-black___l-nWs',
  'u-white': 'styles__u-white___1iNlU',
  'u-paleGrey': 'styles__u-paleGrey___1kfCU',
  'u-silver': 'styles__u-silver___15a1E',
  'u-coolGrey': 'styles__u-coolGrey___JmxzD',
  'u-slateGrey': 'styles__u-slateGrey___UggAx',
  'u-charcoalGrey': 'styles__u-charcoalGrey___3oitT',
  'u-zircon': 'styles__u-zircon___3Fagl',
  'u-frenchPass': 'styles__u-frenchPass___aetUO',
  'u-dodgerBlue': 'styles__u-dodgerBlue___1-CIT',
  'u-scienceBlue': 'styles__u-scienceBlue___1zkOf',
  'u-puertoRico': 'styles__u-puertoRico___1Hzle',
  'u-emerald': 'styles__u-emerald___17xai',
  'u-malachite': 'styles__u-malachite___3nMRC',
  'u-texasRose': 'styles__u-texasRose___S9xiM',
  'u-chablis': 'styles__u-chablis___3xqQ8',
  'u-yourPink': 'styles__u-yourPink___20w0y',
  'u-pomegranate': 'styles__u-pomegranate___UqAO4',
  'u-monza': 'styles__u-monza___1LdKC',
  'u-portage': 'styles__u-portage___Mkg9B',
  'u-azure': 'styles__u-azure___2GiMJ',
  'u-melon': 'styles__u-melon___hqA_S',
  'u-blazeOrange': 'styles__u-blazeOrange___1oOVN',
  'u-mango': 'styles__u-mango___2P2v6',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___3xxXU',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___1Bqls',
  'u-purpley': 'styles__u-purpley___2_PlF',
  'u-lightishPurple': 'styles__u-lightishPurple___3dMzq',
  'u-barney': 'styles__u-barney___15pAx',
  'u-weirdGreen': 'styles__u-weirdGreen___14TSi',
  'u-ellipsis': 'styles__u-ellipsis___wQ3dO',
  'u-midellipsis': 'styles__u-midellipsis___yhxUx',
  'c-label': 'styles__c-label___o4ozG',
  'is-error': 'styles__is-error___2Dwem',
  'spin': 'styles__spin___1c3eg'
};


var Label = function Label(props) {
  var htmlFor = props.htmlFor,
      className = props.className,
      children = props.children,
      error = props.error;

  return _react2.default.createElement(
    'label',
    {
      htmlFor: htmlFor,
      className: (0, _classnames2.default)(styles['c-label'], (0, _defineProperty3.default)({}, styles['is-error'], error), className)
    },
    children
  );
};

Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  htmlFor: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  error: _propTypes2.default.bool
};

Label.defaultProps = {
  className: '',
  error: false
};

exports.default = Label;