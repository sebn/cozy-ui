'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppIcon = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _iconCube = require('../../assets/icons/ui/icon-cube.svg');

var _iconCube2 = _interopRequireDefault(_iconCube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-loading-placeholder': 'styles__c-loading-placeholder___3L6Gz',
  'placeHolderShimmer': 'styles__placeHolderShimmer___3Rei_',
  'c-app-icon': 'styles__c-app-icon___2_O40',
  'c-app-icon-default': 'styles__c-app-icon-default___3CEmt'
};

var AppIcon = exports.AppIcon = function (_Component) {
  (0, _inherits3.default)(AppIcon, _Component);

  function AppIcon(props, context) {
    (0, _classCallCheck3.default)(this, AppIcon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AppIcon.__proto__ || Object.getPrototypeOf(AppIcon)).call(this, props, context));

    _this.state = {
      status: 'idle'
    };
    return _this;
  }

  (0, _createClass3.default)(AppIcon, [{
    key: 'componentDidMount',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.fetchIcon();

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _ref.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: 'fetchIcon',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _props, app, fetchIcon, icon;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props = this.props, app = _props.app, fetchIcon = _props.fetchIcon;

                if (!(typeof fetchIcon !== 'function')) {
                  _context2.next = 3;
                  break;
                }

                throw new Error('fetchIcon prop is required');

              case 3:

                this.setState({ status: 'fetching' });

                _context2.prev = 4;
                _context2.next = 7;
                return fetchIcon(app.links.icon);

              case 7:
                icon = _context2.sent;

                this.setState({ icon: icon, status: 'done' });
                _context2.next = 15;
                break;

              case 11:
                _context2.prev = 11;
                _context2.t0 = _context2['catch'](4);

                console.error(_context2.t0.message);
                this.setState({ error: _context2.t0, status: 'failed' });

              case 15:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 11]]);
      }));

      function fetchIcon() {
        return _ref2.apply(this, arguments);
      }

      return fetchIcon;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          alt = _props2.alt,
          className = _props2.className;
      var _state = this.state,
          icon = _state.icon,
          status = _state.status;

      switch (status) {
        case 'idle':
        case 'fetching':
          return _react2.default.createElement('div', {
            className: (0, _classnames2.default)(styles['c-loading-placeholder'], styles['c-app-icon'], className)
          });
        case 'done':
          return _react2.default.createElement('img', {
            alt: alt,
            className: (0, _classnames2.default)(styles['c-app-icon'], className),
            src: icon
          });
        case 'failed':
        default:
          return _react2.default.createElement(_Icon2.default, {
            className: (0, _classnames2.default)(styles['c-app-icon'], styles['c-app-icon-default'], className),
            height: '100%',
            icon: _iconCube2.default,
            width: '100%'
          });
      }
    }
  }]);
  return AppIcon;
}(_react.Component);

AppIcon.propTypes = {
  alt: _propTypes2.default.string,
  className: _propTypes2.default.string,
  fetchIcon: _propTypes2.default.func.isRequired
};

exports.default = AppIcon;