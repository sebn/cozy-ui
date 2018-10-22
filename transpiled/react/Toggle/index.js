'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'toggle': 'styles__toggle___3zVsE',
  'checkbox': 'styles__checkbox___3ko96',
  'label': 'styles__label___3jY1f'
};

var Toggle = function (_Component) {
  (0, _inherits3.default)(Toggle, _Component);

  function Toggle() {
    (0, _classCallCheck3.default)(this, Toggle);
    return (0, _possibleConstructorReturn3.default)(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
  }

  (0, _createClass3.default)(Toggle, [{
    key: 'onChange',
    value: function onChange(e) {
      if (this.props.onToggle) {
        this.props.onToggle(e.target.checked);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          id = _props.id,
          _props$checked = _props.checked,
          checked = _props$checked === undefined ? false : _props$checked,
          _props$disabled = _props.disabled,
          disabled = _props$disabled === undefined ? false : _props$disabled;

      return _react2.default.createElement(
        'span',
        { className: styles['toggle'] },
        _react2.default.createElement('input', {
          type: 'checkbox',
          id: id,
          className: styles['checkbox'],
          checked: checked,
          disabled: disabled,
          onChange: this.onChange.bind(this)
        }),
        _react2.default.createElement('label', { htmlFor: id, className: styles['label'] })
      );
    }
  }]);
  return Toggle;
}(_react.Component);

Toggle.propTypes = {
  id: _propTypes2.default.string.isRequired, // A unique id for the toggle, used internally.
  checked: _propTypes2.default.bool, // The state of the toggle
  disabled: _propTypes2.default.bool, // Guess what...
  onToggle: _propTypes2.default.func // A callback when the state of the toggle changes. Called with the new state as argument.
};

exports.default = Toggle;