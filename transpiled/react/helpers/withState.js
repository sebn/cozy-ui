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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Higher Order Component that wraps functional components into stateful components.
 * Defining a stateful component becomes a matter of setting its initial state
 * and writing a handful of reducers on that state. The state and the reducers will
 * be passed as props to the wrapped functional component.
 * Example:
 * const ToggleButton = withState(initialState = {
 *   on: false
 * }, eventHandlers = setState => ({
 *   toggle: () => {
 *     setState(state => ({ on: !state.on })
 *   }
 * }))(
 *   ({ on, toggle }) => (
 *     <button class={on ? 'on' : 'off'} onClick={toggle}>Go!</button>
 *   )
 * )
 */
var withState = function withState(initialState, eventHandlers) {
  return function (WrappedComponent) {
    return function (_Component) {
      (0, _inherits3.default)(StatefulComponent, _Component);

      function StatefulComponent(props) {
        (0, _classCallCheck3.default)(this, StatefulComponent);

        var _this = (0, _possibleConstructorReturn3.default)(this, (StatefulComponent.__proto__ || Object.getPrototypeOf(StatefulComponent)).call(this, props));

        _this.state = initialState;
        _this.handlers = eventHandlers(_this.setState.bind(_this));
        return _this;
      }

      (0, _createClass3.default)(StatefulComponent, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, this.props, this.state, this.handlers));
        }
      }]);
      return StatefulComponent;
    }(_react.Component);
  };
};

exports.default = withState;