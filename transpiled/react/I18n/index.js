/**
 * preact plugin that provides an I18n helper using a Higher Order Component.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = exports.initTranslation = exports.translate = exports.I18n = exports.DEFAULT_LANG = undefined;

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

var _translation = require('./translation');

Object.defineProperty(exports, 'initTranslation', {
  enumerable: true,
  get: function get() {
    return _translation.initTranslation;
  }
});
Object.defineProperty(exports, 'extend', {
  enumerable: true,
  get: function get() {
    return _translation.extend;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _format = require('./format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_LANG = exports.DEFAULT_LANG = 'en';

// Provider root component

var I18n = exports.I18n = function (_Component) {
  (0, _inherits3.default)(I18n, _Component);

  function I18n(props) {
    (0, _classCallCheck3.default)(this, I18n);

    var _this = (0, _possibleConstructorReturn3.default)(this, (I18n.__proto__ || Object.getPrototypeOf(I18n)).call(this, props));

    _this.UNSAFE_componentWillReceiveProps = function (nextProps) {
      if (nextProps.lang !== _this.props.lang) {
        _this.init(nextProps);
      }
    };

    _this.init(_this.props);
    return _this;
  }

  (0, _createClass3.default)(I18n, [{
    key: 'init',
    value: function init(props) {
      var polyglot = props.polyglot,
          lang = props.lang,
          dictRequire = props.dictRequire,
          context = props.context,
          defaultLang = props.defaultLang;


      this.translation = polyglot || (0, _translation.initTranslation)(lang, dictRequire, context, defaultLang);
      this.format = (0, _format.initFormat)(lang, defaultLang);
    }
  }, {
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        t: this.translation.t.bind(this.translation),
        f: this.format,
        lang: this.props.lang
      };
    }

    // for preact
    // eslint-disable-next-line react/no-deprecated

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.UNSAFE_componentWillReceiveProps(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);
  return I18n;
}(_react.Component);

I18n.propTypes = {
  lang: _propTypes2.default.string.isRequired, // current language.
  polyglot: _propTypes2.default.object, // A polyglot instance.
  dictRequire: _propTypes2.default.func, // A callback to load locales.
  context: _propTypes2.default.string, // current context.
  defaultLang: _propTypes2.default.string // default language. By default is 'en'
};

I18n.defaultProps = {
  defaultLang: DEFAULT_LANG
};

var i18nContextTypes = {
  t: _propTypes2.default.func,
  f: _propTypes2.default.func,
  lang: _propTypes2.default.string
};

I18n.childContextTypes = i18nContextTypes;

// higher order decorator for components that need `t` and/or `f`
var translate = exports.translate = function translate() {
  return function (WrappedComponent) {
    var Wrapper = function Wrapper(props, context) {
      return _react2.default.createElement(WrappedComponent, (0, _extends3.default)({}, props, {
        t: context.t,
        f: context.f,
        lang: context.lang
      }));
    };
    Wrapper.contextTypes = i18nContextTypes;
    return Wrapper;
  };
};

exports.default = I18n;