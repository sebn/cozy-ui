'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('lodash/omit');

var _omit2 = _interopRequireDefault(_omit);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bodyScrollLock = require('body-scroll-lock');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-overlay': 'styles__c-overlay___31iWd'
};


var ESC_KEYCODE = 27;

var nonDOMProps = ['onEscape', 'children', 'className'];

var bodyTallerThanWindow = function bodyTallerThanWindow() {
  return document.body.getBoundingClientRect().height > window.innerHeight;
};

/**
 * Display a black overlay on the screen. Stops
 * scrolling on the html/body while displayed.
 *
 * Can react to Escape key
 */

var Overlay = function (_Component) {
  (0, _inherits3.default)(Overlay, _Component);

  function Overlay() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Overlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call.apply(_ref, [this].concat(args))), _this), _this.handleKeydown = function (e) {
      if (e.keyCode === ESC_KEYCODE) {
        _this.props.onEscape();
      }
    }, _this.handleClick = function (e) {
      if (_this.props.onClick && e.target === e.currentTarget) {
        _this.props.onClick();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (bodyTallerThanWindow()) {
        (0, _bodyScrollLock.disableBodyScroll)(document.body);
        (0, _bodyScrollLock.disableBodyScroll)(document.body.parentNode);
      }
      if (this.props.onEscape) {
        document.addEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      // restauration function can be undefined if there was
      // an error during mounting/rendering
      (0, _bodyScrollLock.clearAllBodyScrollLocks)();
      if (this.props.onEscape) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;

      var domProps = (0, _omit2.default)(this.props, nonDOMProps);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({
          onClick: this.handleClick,
          className: (0, _classnames2.default)(styles['c-overlay'], className)
        }, domProps),
        children
      );
    }
  }]);
  return Overlay;
}(_react.Component);

Overlay.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.node.isRequired,
  onEscape: _propTypes2.default.func
};

exports.default = Overlay;