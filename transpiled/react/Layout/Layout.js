'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Content = exports.Main = exports.Layout = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___2uWzR',
  'u-hide': 'styles__u-hide___39bra',
  'u-hide--mob': 'styles__u-hide--mob___3qH1c',
  'u-hide--tablet': 'styles__u-hide--tablet___3EzzW',
  'u-hide--desk': 'styles__u-hide--desk___2UgWO',
  'u-error': 'styles__u-error____MuWS',
  'u-error--warning': 'styles__u-error--warning___sQ3Qp',
  'u-valid': 'styles__u-valid___AunlE',
  'u-warn': 'styles__u-warn___38nOC',
  'u-black': 'styles__u-black___7Drgz',
  'u-white': 'styles__u-white___3iy4G',
  'u-paleGrey': 'styles__u-paleGrey___2Y9be',
  'u-silver': 'styles__u-silver___3dKGd',
  'u-coolGrey': 'styles__u-coolGrey___1ea-B',
  'u-slateGrey': 'styles__u-slateGrey___3uSgk',
  'u-charcoalGrey': 'styles__u-charcoalGrey___3nlWa',
  'u-zircon': 'styles__u-zircon___3Lr3r',
  'u-frenchPass': 'styles__u-frenchPass___1YMMN',
  'u-dodgerBlue': 'styles__u-dodgerBlue___1eued',
  'u-scienceBlue': 'styles__u-scienceBlue___3vA_W',
  'u-puertoRico': 'styles__u-puertoRico___1kDy9',
  'u-emerald': 'styles__u-emerald___2oFOR',
  'u-malachite': 'styles__u-malachite___1azlz',
  'u-texasRose': 'styles__u-texasRose___1w_1c',
  'u-chablis': 'styles__u-chablis___3Pcxz',
  'u-yourPink': 'styles__u-yourPink___2CV1V',
  'u-pomegranate': 'styles__u-pomegranate___31XCo',
  'u-monza': 'styles__u-monza___19sbO',
  'u-portage': 'styles__u-portage___1lrSl',
  'u-azure': 'styles__u-azure___2kWI4',
  'u-melon': 'styles__u-melon___1-S8j',
  'u-blazeOrange': 'styles__u-blazeOrange___2hHYk',
  'u-mango': 'styles__u-mango___3bqR4',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___kA15Q',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___2yN6i',
  'u-purpley': 'styles__u-purpley___25xhl',
  'u-lightishPurple': 'styles__u-lightishPurple___XyNIJ',
  'u-barney': 'styles__u-barney___3cpYX',
  'u-weirdGreen': 'styles__u-weirdGreen___1ETfJ',
  'u-ellipsis': 'styles__u-ellipsis___2xNZ6',
  'u-midellipsis': 'styles__u-midellipsis___1dO2n',
  'o-layout': 'styles__o-layout___3TSz9',
  'o-layout-2panes': 'styles__o-layout-2panes___1CDQw',
  'spin': 'styles__spin___2qpxt'
};
var Layout = function Layout(_ref) {
  var children = _ref.children,
      className = _ref.className,
      monoColumn = _ref.monoColumn,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['children', 'className', 'monoColumn']);

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(monoColumn ? styles['o-layout'] : styles['o-layout-2panes'], className)
    }, rest),
    children
  );
};

exports.Layout = Layout;
var Main = function Main(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      rest = (0, _objectWithoutProperties3.default)(_ref2, ['children', 'className']);

  return _react2.default.createElement(
    'main',
    (0, _extends3.default)({ className: className }, rest),
    children
  );
};

exports.Main = Main;

var Content = exports.Content = function (_Component) {
  (0, _inherits3.default)(Content, _Component);

  function Content() {
    (0, _classCallCheck3.default)(this, Content);
    return (0, _possibleConstructorReturn3.default)(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  (0, _createClass3.default)(Content, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          rest = (0, _objectWithoutProperties3.default)(_props, ['children', 'className']);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ role: 'main', className: className }, rest),
        children
      );
    }
  }]);
  return Content;
}(_react.Component);

Layout.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  monoColumn: _propTypes2.default.bool
};

Layout.defaultProps = {
  monoColumn: false
};