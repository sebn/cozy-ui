'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _I18n = require('../I18n');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-spinner--blue': 'styles__c-spinner--blue___1BMPR',
  'c-spinner--grey': 'styles__c-spinner--grey___2aZMV',
  'c-spinner--white': 'styles__c-spinner--white___3mkJl',
  'c-spinner--red': 'styles__c-spinner--red___3s5VF',
  'c-spinner--tiny': 'styles__c-spinner--tiny___2bRnB',
  'c-spinner--small': 'styles__c-spinner--small___1uzev',
  'c-spinner--medium': 'styles__c-spinner--medium___1_GL8',
  'c-spinner--large': 'styles__c-spinner--large___T0FZi',
  'c-spinner--xlarge': 'styles__c-spinner--xlarge___3mSGc',
  'c-spinner--xxlarge': 'styles__c-spinner--xxlarge___23prK',
  'spin': 'styles__spin___3Lqkt',
  'c-spinner': 'styles__c-spinner___1snK7',
  'c-spinner--middle': 'styles__c-spinner--middle___RwyII',
  'c-spinner--nomargin': 'styles__c-spinner--nomargin___13JyW'
};
var Spinner = exports.Spinner = function Spinner(_ref) {
  var _classNames;

  var t = _ref.t,
      loadingType = _ref.loadingType,
      middle = _ref.middle,
      noMargin = _ref.noMargin,
      color = _ref.color,
      size = _ref.size,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(styles['c-spinner'], (_classNames = {}, (0, _defineProperty3.default)(_classNames, styles['c-spinner--middle'], middle), (0, _defineProperty3.default)(_classNames, styles['c-spinner--nomargin'], noMargin), (0, _defineProperty3.default)(_classNames, styles['c-spinner--' + color], color), (0, _defineProperty3.default)(_classNames, styles['c-spinner--' + size], size), _classNames), className)
    },
    loadingType && _react2.default.createElement(
      'p',
      null,
      t('loading.' + loadingType)
    )
  );
};

Spinner.propTypes = {
  loadingType: _propTypes2.default.string,
  middle: _propTypes2.default.bool,
  noMargin: _propTypes2.default.bool,
  color: _propTypes2.default.oneOf(['blue', 'grey', 'white', 'red']),
  size: _propTypes2.default.oneOf(['tiny', 'small', 'medium', 'large', 'xlarge', 'xxlarge']),
  className: _propTypes2.default.string
};

Spinner.defaultProps = {
  loadingType: '',
  middle: false,
  noMargin: false,
  color: 'blue',
  size: 'medium',
  className: ''
};

exports.default = (0, _I18n.translate)()(Spinner);