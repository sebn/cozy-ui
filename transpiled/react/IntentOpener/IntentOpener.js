'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IntentModal = require('../IntentModal');

var _IntentModal2 = _interopRequireDefault(_IntentModal);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Wrapper that adds an `onClick` handler to its children that opens a modal
 * for the specified intent.
 *
 * The modal for an intent takes the majority of the viewport.
 */
var IntentOpener = function (_React$Component) {
  (0, _inherits3.default)(IntentOpener, _React$Component);

  function IntentOpener() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IntentOpener);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IntentOpener.__proto__ || Object.getPrototypeOf(IntentOpener)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      modalOpened: false
    }, _this.openModal = function () {
      _this.setState({
        modalOpened: true
      });
    }, _this.closeModal = function () {
      _this.setState({
        modalOpened: false
      });
    }, _this.handleComplete = function (result) {
      _this.closeModal();
      if (_this.props.onComplete) {
        _this.props.onComplete(result);
      }
    }, _this.handleDismiss = function () {
      _this.closeModal();
      if (_this.props.onDismiss) {
        _this.props.onDismiss();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IntentOpener, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          action = _props.action,
          doctype = _props.doctype,
          children = _props.children,
          closable = _props.closable,
          create = _props.create,
          tag = _props.tag,
          into = _props.into,
          modalProps = (0, _objectWithoutProperties3.default)(_props, ['options', 'action', 'doctype', 'children', 'closable', 'create', 'tag', 'into']);
      var modalOpened = this.state.modalOpened;


      var Tag = tag; // React needs uppercase element names

      var elements = [_react2.default.cloneElement(children, { key: 'opener', onClick: this.openModal })];

      if (modalOpened) {
        elements.push(_react2.default.createElement(_IntentModal2.default, (0, _extends3.default)({
          key: 'intent-modal',
          closable: closable,
          overflowHidden: true,
          dismissAction: this.handleDismiss,
          action: action,
          doctype: doctype,
          options: options,
          onComplete: this.handleComplete,
          create: create,
          into: into
        }, modalProps)));
      }

      return _react2.default.createElement(
        Tag,
        null,
        elements
      );
    }
  }]);
  return IntentOpener;
}(_react2.default.Component);

IntentOpener.propTypes = {
  /** Element on which the onClick handler will be added */
  children: _propTypes2.default.element.isRequired,
  /** What should happen when the intent has completed */
  onComplete: _propTypes2.default.func.isRequired,
  /** What should happen when the modal is dimissed */
  onDismiss: _propTypes2.default.func.isRequired,
  /** Action you want to execute */
  action: _propTypes2.default.string.isRequired,
  /** Doctype on which you want to execute the action */
  doctype: _propTypes2.default.string.isRequired,
  /** Where the modal should be rendered in the DOM */
  into: _propTypes2.default.string
};

IntentOpener.defaultProps = {
  tag: 'span',
  closable: true
};

exports.default = IntentOpener;