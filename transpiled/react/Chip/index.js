'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChipButton = exports.RoundChip = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-chip': 'styles__c-chip___2aPqg',
  'c-chip--round': 'styles__c-chip--round___JCd2e',
  'c-chip-separator': 'styles__c-chip-separator___i_2Yq',
  'c-chip-button': 'styles__c-chip-button___-WdLl',
  'c-chip-button--disabled': 'styles__c-chip-button--disabled___168tG'
};

var Chip = function (_React$PureComponent) {
  (0, _inherits3.default)(Chip, _React$PureComponent);

  function Chip() {
    (0, _classCallCheck3.default)(this, Chip);
    return (0, _possibleConstructorReturn3.default)(this, (Chip.__proto__ || Object.getPrototypeOf(Chip)).apply(this, arguments));
  }

  (0, _createClass3.default)(Chip, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          props = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          className: (0, _classnames2.default)(styles['c-chip'], className, this.constructor.className)
        }, props),
        children
      );
    }
  }]);
  return Chip;
}(_react2.default.PureComponent);

var RoundChip = exports.RoundChip = function (_Chip) {
  (0, _inherits3.default)(RoundChip, _Chip);

  function RoundChip() {
    (0, _classCallCheck3.default)(this, RoundChip);
    return (0, _possibleConstructorReturn3.default)(this, (RoundChip.__proto__ || Object.getPrototypeOf(RoundChip)).apply(this, arguments));
  }

  return RoundChip;
}(Chip);

RoundChip.className = styles['c-chip--round'];
exports.default = Chip;


var disabledChipButtonStyle = styles['c-chip-button--disabled'];

var ChipButton = exports.ChipButton = function (_React$PureComponent2) {
  (0, _inherits3.default)(ChipButton, _React$PureComponent2);

  function ChipButton() {
    (0, _classCallCheck3.default)(this, ChipButton);
    return (0, _possibleConstructorReturn3.default)(this, (ChipButton.__proto__ || Object.getPrototypeOf(ChipButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(ChipButton, [{
    key: 'render',
    value: function render(_ref) {
      var children = _ref.children,
          className = _ref.className,
          disabled = _ref.disabled,
          props = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'disabled']);

      return _react2.default.createElement(
        RoundChip,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(styles['c-chip-button'], className, (0, _defineProperty3.default)({}, disabledChipButtonStyle, disabled))
        }, props),
        children
      );
    }
  }]);
  return ChipButton;
}(_react2.default.PureComponent);

Chip.Button = ChipButton;
Chip.Round = RoundChip;
Chip.Separator = function (_ref2) {
  var className = _ref2.className;
  return _react2.default.createElement('span', { className: (0, _classnames2.default)(styles['c-chip-separator'], className) });
};