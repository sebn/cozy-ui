'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___3XZIT',
  'u-hide': 'styles__u-hide___2AFsq',
  'u-hide--mob': 'styles__u-hide--mob___bw7pq',
  'u-hide--tablet': 'styles__u-hide--tablet___1jcqM',
  'u-hide--desk': 'styles__u-hide--desk___mSpoE',
  'u-error': 'styles__u-error____apOV',
  'u-error--warning': 'styles__u-error--warning___1qoaG',
  'u-valid': 'styles__u-valid___3MreU',
  'u-warn': 'styles__u-warn___-K0Cu',
  'u-black': 'styles__u-black___WK9Mx',
  'u-white': 'styles__u-white___2_2N4',
  'u-paleGrey': 'styles__u-paleGrey___3jp1e',
  'u-silver': 'styles__u-silver___20u7u',
  'u-coolGrey': 'styles__u-coolGrey___2TIx6',
  'u-slateGrey': 'styles__u-slateGrey___pndCr',
  'u-charcoalGrey': 'styles__u-charcoalGrey___32yAg',
  'u-zircon': 'styles__u-zircon___2MLT8',
  'u-frenchPass': 'styles__u-frenchPass___1Jez3',
  'u-dodgerBlue': 'styles__u-dodgerBlue___2EF_N',
  'u-scienceBlue': 'styles__u-scienceBlue___1nnvM',
  'u-puertoRico': 'styles__u-puertoRico___1GNOw',
  'u-emerald': 'styles__u-emerald___2QV18',
  'u-malachite': 'styles__u-malachite___1a9vo',
  'u-texasRose': 'styles__u-texasRose___JA4R-',
  'u-chablis': 'styles__u-chablis___3sFrO',
  'u-yourPink': 'styles__u-yourPink___3M2lK',
  'u-pomegranate': 'styles__u-pomegranate___3OzQX',
  'u-monza': 'styles__u-monza___3GVTJ',
  'u-portage': 'styles__u-portage___1l0Cx',
  'u-azure': 'styles__u-azure___24gtH',
  'u-melon': 'styles__u-melon___1bIPC',
  'u-blazeOrange': 'styles__u-blazeOrange___3dhDM',
  'u-mango': 'styles__u-mango___3nNmX',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___KdqeI',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___2ez92',
  'u-purpley': 'styles__u-purpley___3JbMW',
  'u-lightishPurple': 'styles__u-lightishPurple___31GAm',
  'u-barney': 'styles__u-barney___15NCK',
  'u-weirdGreen': 'styles__u-weirdGreen___30BaJ',
  'u-ellipsis': 'styles__u-ellipsis___2q15i',
  'u-midellipsis': 'styles__u-midellipsis___11GET',
  'c-btn--alert-error': 'styles__c-btn--alert-error___12LBy',
  'c-btn--alert-info': 'styles__c-btn--alert-info___1BO12',
  'c-btn--alert-success': 'styles__c-btn--alert-success___3Z6sE',
  'c-alert': 'styles__c-alert___f9mWB',
  'c-alert-wrapper': 'styles__c-alert-wrapper___3fLCt',
  'c-alert--hidden': 'styles__c-alert--hidden___22Mz1',
  'c-alert-title': 'styles__c-alert-title___2O1D_',
  'c-alert--error': 'styles__c-alert--error___oA-NC',
  'c-alert--success': 'styles__c-alert--success___1Cs5b',
  'c-alert--info': 'styles__c-alert--info___3mqAh',
  'spin': 'styles__spin___1LlbU'
};


var MINIMUM_ALERT_DURATION = 2000;

var createStore = function createStore() {
  var notifications = [];
  var listeners = [];

  var dispatch = function dispatch(notification) {
    notification.id = notifications.length;
    notifications.push(notification);
    listeners.forEach(function (listener) {
      return listener(notification);
    });
  };

  var subscribe = function subscribe(listener) {
    listeners.push(listener);
  };

  return { dispatch: dispatch, subscribe: subscribe };
};

var store = createStore();

var Alert = function (_Component) {
  (0, _inherits3.default)(Alert, _Component);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hidden: true
    }, _this.notifyClosed = function () {
      _this.props.onClose();
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Alert, [{
    key: 'computeDuration',
    value: function computeDuration() {
      var words = this.props.message.split(/\W/).filter(Boolean);
      return Math.max(MINIMUM_ALERT_DURATION, words.length / 3 * 1000);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.closeTimer = setTimeout(function () {
        _this2.beginClosing();
      }, this.props.duration === 'auto' ? this.computeDuration() : this.props.duration);
      // Delay to trigger CSS transition after the first render.
      // Totally open for a better way to achieve this.
      setTimeout(function () {
        _this2.setState({ hidden: false });
      }, 20);
    }
  }, {
    key: 'beginClosing',
    value: function beginClosing() {
      this.base.addEventListener('transitionend', this.notifyClosed, false);
      this.setState({ hidden: true });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.base.removeEventListener('transitionend', this.notifyClosed, false);
      this.setState({ hidden: false });
      if (this.closeTimer) {
        clearTimeout(this.closeTimer);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          message = _props.message,
          type = _props.type,
          buttonText = _props.buttonText,
          buttonAction = _props.buttonAction;
      var hidden = this.state.hidden;

      return _react2.default.createElement(
        'div',
        {
          ref: function ref(c) {
            return _this3.base = c;
          },
          className: (0, _classnames2.default)(styles['c-alert'], hidden ? styles['c-alert--hidden'] : ''),
          role: 'alert'
        },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(styles['c-alert-wrapper'], styles['c-alert--' + type])
          },
          _react2.default.createElement(
            'p',
            null,
            message
          ),
          buttonText && _react2.default.createElement(_Button2.default, {
            onClick: buttonAction,
            className: styles['c-btn--alert-' + type],
            label: buttonText,
            size: 'tiny'
          })
        )
      );
    }
  }]);
  return Alert;
}(_react.Component);

Alert.propTypes = {
  /** @type string - Controls the style of the error */
  type: _propTypes2.default.oneOf(['success', 'info', 'error']),
  /** @type {string} - Message to display */
  message: _propTypes2.default.string.isRequired,
  /** @type {function} - Callback when is dismissed */
  onClose: _propTypes2.default.func,
  /** @type {function} - Text of the button, if absent, no button is displayed */
  buttonText: _propTypes2.default.string,
  /** @type {function} - Callback when clicking on the button */
  buttonAction: _propTypes2.default.func
};

Alert.defaultProps = {
  type: 'info',
  onClose: function onClose() {},
  buttonText: undefined,
  buttonAction: function buttonAction() {},
  duration: 'auto'
};

var Alerter = function (_Component2) {
  (0, _inherits3.default)(Alerter, _Component2);

  function Alerter() {
    var _ref2;

    var _temp2, _this4, _ret2;

    (0, _classCallCheck3.default)(this, Alerter);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return _ret2 = (_temp2 = (_this4 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Alerter.__proto__ || Object.getPrototypeOf(Alerter)).call.apply(_ref2, [this].concat(args))), _this4), _this4.state = {
      notifications: []

      /**
       * @param {string} message
       * @param {object} options
       * @public
       * @static
       */
    }, _this4.notify = function (notification) {
      _this4.setState({
        notifications: [].concat((0, _toConsumableArray3.default)(_this4.state.notifications), [notification])
      });
    }, _this4.handleClose = function (id) {
      var idx = _this4.state.notifications.findIndex(function (n) {
        return n.id === id;
      });
      _this4.setState({
        notifications: [].concat((0, _toConsumableArray3.default)(_this4.state.notifications.slice(0, idx)), (0, _toConsumableArray3.default)(_this4.state.notifications.slice(idx + 1)))
      });
    }, _temp2), (0, _possibleConstructorReturn3.default)(_this4, _ret2);
  }

  (0, _createClass3.default)(Alerter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ mounted: true });
      store.subscribe(this.notify);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props2 = this.props,
          t = _props2.t,
          into = _props2.into;
      var notifications = this.state.notifications;

      return _react2.default.createElement(
        _Portal2.default,
        { into: into },
        notifications.map(function (notif) {
          return _react2.default.createElement(Alert, {
            type: notif.type,
            key: notif.id,
            message: t ? t(notif.msg, notif.options) : notif.msg,
            onClose: function onClose() {
              return _this5.handleClose(notif.id);
            },
            buttonText: notif.options && notif.options.buttonText,
            buttonAction: notif.options && notif.options.buttonAction,
            duration: notif.options && notif.options.duration
          });
        })
      );
    }
  }], [{
    key: 'info',
    value: function info(msg, options) {
      store.dispatch({ type: 'info', msg: msg, options: options });
    }

    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */

  }, {
    key: 'success',
    value: function success(msg, options) {
      store.dispatch({ type: 'success', msg: msg, options: options });
    }

    /**
     * @param {string} msg
     * @param {object} options
     * @public
     * @static
     */

  }, {
    key: 'error',
    value: function error(msg, options) {
      store.dispatch({ type: 'error', msg: msg, options: options });
    }
  }]);
  return Alerter;
}(_react.Component);

Alerter.propTypes = {
  /** A translation function. If ommited, messages are left intact */
  t: _propTypes2.default.func,
  /** A selector to target a DOM node where alerts will be rendered */
  into: _propTypes2.default.string
};

Alerter.defaultProps = {
  into: 'body'
};

exports.default = Alerter;