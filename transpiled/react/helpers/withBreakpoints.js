'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onlyDesktop = exports.onlyTablet = exports.onlyMobile = exports.renderOnlyIf = undefined;

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

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pick = require('lodash/pick');

var _pick2 = _interopRequireDefault(_pick);

var _flowRight = require('lodash/flowRight');

var _flowRight2 = _interopRequireDefault(_flowRight);

var _mapValues = require('lodash/mapValues');

var _mapValues2 = _interopRequireDefault(_mapValues);

var _throttle = require('lodash/throttle');

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var large = 1200;
var medium = 1023;
var small = 768;
var tiny = 543;

var breakpoints = {
  isExtraLarge: [large + 1],
  isLarge: [medium + 1, large],
  isMedium: [small + 1, medium],
  isSmall: [tiny + 1, small],
  isTiny: [0, tiny],
  isDesktop: [medium + 1],
  isTablet: [small + 1, medium],
  isMobile: [0, small]
};

var getBreakpointsStatus = function getBreakpointsStatus(breakpoints) {
  var width = window.innerWidth;
  return (0, _mapValues2.default)(breakpoints, function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        min = _ref2[0],
        max = _ref2[1];

    return width >= min && (max === undefined || width <= max);
  });
};

/**
 * HOC providing the `breakpoints` property to its children to help
 * with responsive web design.
 *
 * `breakpoints` values will reflect if the window.innerWidth is under
 * those breakpoints.
 *
 * @Example
 * ````
 * // here we define `mobile` as a screen under 1000px
 * const B = withBreakpoints({ mobile: 1000 })(A)
 * ````
 *
 * `A` will receive `{ breakpoints: { mobile: true }}` if the screen
 * width is under 1000px.
 *
 * `A` will receive `{ breakpoints: { mobile: false }}` if the screen
 * width is over 1000px;
 *
 *
 */
var withBreakpoints = function withBreakpoints() {
  var bp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : breakpoints;
  return function (Wrapped) {
    return function (_Component) {
      (0, _inherits3.default)(Aware, _Component);

      function Aware(props) {
        (0, _classCallCheck3.default)(this, Aware);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Aware.__proto__ || Object.getPrototypeOf(Aware)).call(this, props));

        _this.state = {
          breakpoints: getBreakpointsStatus(bp)
        };
        _this.checkBreakpoints = (0, _throttle2.default)(function () {
          _this.setState({ breakpoints: getBreakpointsStatus(bp) });
        }, 100, { trailing: true });
        return _this;
      }

      (0, _createClass3.default)(Aware, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          window.addEventListener('resize', this.checkBreakpoints);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          window.removeEventListener('resize', this.checkBreakpoints);
        }
      }, {
        key: 'render',
        value: function render() {
          var props = this.props;
          var breakpoints = this.state.breakpoints;

          return _react2.default.createElement(Wrapped, (0, _extends3.default)({}, props, { breakpoints: breakpoints }));
        }
      }]);
      return Aware;
    }(_react.Component);
  };
};

/**
 * HOC that tries a predicate on props + state and
 * renders a component only if the predicate returns true
 */
var renderOnlyIf = exports.renderOnlyIf = function renderOnlyIf(predicate) {
  return function (Wrapped) {
    return function (_Component2) {
      (0, _inherits3.default)(_class, _Component2);

      function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
          var props = this.props;
          var state = this.state;
          if (predicate(props, state)) {
            return _react2.default.createElement(Wrapped, props);
          }
        }
      }]);
      return _class;
    }(_react.Component);
  };
};

/**
 * Use this HOC if you only want your component to be
 * rendered on mobile
 */
var onlyMobile = exports.onlyMobile = (0, _flowRight2.default)(withBreakpoints((0, _pick2.default)(breakpoints, 'isMobile')), renderOnlyIf(function (props) {
  return props.breakpoints.isMobile;
}));

/**
 * Use this HOC if you only want your component to be
 * rendered on tablet
 */
var onlyTablet = exports.onlyTablet = (0, _flowRight2.default)(withBreakpoints((0, _pick2.default)(breakpoints, 'isTablet')), renderOnlyIf(function (props) {
  return props.breakpoints.isTablet;
}));

/**
 * Use this HOC if you only want your component to be
 * rendered on desktop
 */
var onlyDesktop = exports.onlyDesktop = (0, _flowRight2.default)(withBreakpoints((0, _pick2.default)(breakpoints, 'isDesktop')), renderOnlyIf(function (props) {
  return props.breakpoints.isDesktop;
}));

exports.default = withBreakpoints;