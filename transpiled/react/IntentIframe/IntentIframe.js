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

var _Spinner = require('../Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'intentContainer': 'styles__intentContainer___gZbMl',
  'intentPlaceHolder': 'styles__intentPlaceHolder___EWSR1',
  'intentContainer__error': 'styles__intentContainer__error___yQ7K8'
}; /* global cozy */

var DEFAULT_DATA = {
  // TODO remove `closeable` since it is only there for backward compatibility
  // https://mattermost.cozycloud.cc/test-team/pl/t1iagfhqp3n8mqf3nchp6bxsur
  closeable: false,
  exposeIntentFrameRemoval: true
};

var IntentIframe = function (_React$Component) {
  (0, _inherits3.default)(IntentIframe, _React$Component);

  function IntentIframe() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, IntentIframe);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IntentIframe.__proto__ || Object.getPrototypeOf(IntentIframe)).call.apply(_ref, [this].concat(args))), _this), _this.state = { loading: false }, _this.onFrameLoaded = function () {
      _this.setState({ loading: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(IntentIframe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var _props = this.props,
          action = _props.action,
          data = _props.data,
          type = _props.type,
          onCancel = _props.onCancel,
          onError = _props.onError,
          onTerminate = _props.onTerminate;


      var create = this.props.create || cozy.client.intents.create;

      this.setState({ loading: true });
      create(action, type, Object.assign({}, DEFAULT_DATA, data)).start(this.intentViewer, this.onFrameLoaded).then(function (result) {
        result ? onTerminate && onTerminate(result) : onCancel();
      }).catch(function (error) {
        ;onError && onError(error) || _this2.setState({ error: error, loading: false });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          error = _state.error,
          loading = _state.loading;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(intentViewer) {
            return _this3.intentViewer = intentViewer;
          },
          className: styles.intentContainer,
          'aria-busy': loading
        },
        loading && _react2.default.createElement(_Spinner2.default, { size: 'xxlarge' }),
        error && _react2.default.createElement(
          'div',
          { className: styles.intentContainer__error },
          error.message
        )
      );
    }
  }]);
  return IntentIframe;
}(_react2.default.Component);

IntentIframe.propTypes = {
  action: _propTypes2.default.string.isRequired,
  create: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object,
  onCancel: _propTypes2.default.func,
  onError: _propTypes2.default.func,
  onTerminate: _propTypes2.default.func.isRequired
};

IntentIframe.defaultProps = {
  data: {}
};

exports.default = IntentIframe;