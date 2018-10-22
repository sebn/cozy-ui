'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _once = require('lodash/once');

var _once2 = _interopRequireDefault(_once);

var _IntentIframe = require('../IntentIframe');

var _IntentIframe2 = _interopRequireDefault(_IntentIframe);

var _Modal = require('../Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'intentModal': 'styles__intentModal___1aYIb',
  'intentModal__cross': 'styles__intentModal__cross___1Hfuz'
};

/**
 * Render a modal for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 */
var IntentModal = function (_Component) {
  (0, _inherits3.default)(IntentModal, _Component);

  function IntentModal() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IntentModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IntentModal.__proto__ || Object.getPrototypeOf(IntentModal)).call.apply(_ref, [this].concat(args))), _this), _this.dismiss = (0, _once2.default)(function () {
      var dismissAction = _this.props.dismissAction;

      dismissAction && dismissAction();
    }), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  // As dismissAction is passed twice to the modal, both for closing and for
  // intent cancellation, we need to ensure that it is only actually
  // called once.
  // FIXME: this should be fixed by diferenciating dismissAction (for closing
  // modal) and onCancel (for intent cancellation), but it implies deprecating
  // dismissAction first, ensure legacy, prevent regressions, etc.


  (0, _createClass3.default)(IntentModal, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          action = _props.action,
          doctype = _props.doctype,
          options = _props.options,
          onComplete = _props.onComplete,
          onError = _props.onError,
          create = _props.create;

      var modalProps = Object.keys(_Modal2.default.propTypes).reduce(function (props, key) {
        return Object.assign({}, props, (0, _defineProperty3.default)({}, key, _this2.props[key]));
      }, {});
      return _react2.default.createElement(
        _Modal2.default,
        (0, _extends3.default)({}, modalProps, {
          key: 'modal',
          className: styles.intentModal,
          closeBtnClassName: styles.intentModal__cross,
          dismissAction: this.dismiss,
          overflowHidden: true
        }),
        _react2.default.createElement(_IntentIframe2.default, {
          action: action,
          create: create,
          data: options,
          onCancel: this.dismiss,
          onError: onError,
          onTerminate: onComplete,
          type: doctype
        })
      );
    }
  }]);
  return IntentModal;
}(_react.Component);

IntentModal.propTypes = Object.assign({}, _Modal2.default.propTypes, {
  /** What should happen when the intent has completed */
  onComplete: _propTypes2.default.func.isRequired,
  /** What should happen if an intent error occurs */
  onError: _propTypes2.default.func,
  /** Action you want to execute */
  action: _propTypes2.default.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: _propTypes2.default.string.isRequired
});

IntentModal.defaultProps = Object.assign({}, _Modal2.default.defaultProps);

exports.default = IntentModal;