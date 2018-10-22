'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.TabPanels = exports.TabPanel = exports.TabList = exports.Tab = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'coz-tabs': 'styles__coz-tabs___24QL5',
  'coz-tab-list': 'styles__coz-tab-list___3qac8',
  'coz-tab': 'styles__coz-tab___2mOye',
  'coz-tab--active': 'styles__coz-tab--active___1wmwM',
  'coz-tab-panel': 'styles__coz-tab-panel___35538'
};

var Tab = exports.Tab = function (_Component) {
  (0, _inherits3.default)(Tab, _Component);

  function Tab(props) {
    (0, _classCallCheck3.default)(this, Tab);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, props));

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          active = _props.active,
          activeClass = _props.activeClass;

      var activeStyle = (0, _defineProperty3.default)({}, styles['coz-tab--active'], active);
      if (activeClass) {
        activeStyle[activeClass] = active;
      }
      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(styles['coz-tab'], className, activeStyle),
          onClick: this.onClick
        },
        children
      );
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var _props2 = this.props,
          changeTab = _props2.changeTab,
          name = _props2.name,
          onClick = _props2.onClick;

      changeTab(name);
      if (onClick) {
        onClick();
      }
    }
  }]);
  return Tab;
}(_react.Component);

var TabList = exports.TabList = function TabList(_ref) {
  var children = _ref.children,
      activeTab = _ref.activeTab,
      changeTab = _ref.changeTab,
      className = _ref.className;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['coz-tab-list'], className) },
    _react2.default.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, {
        active: child.props.name === activeTab,
        changeTab: changeTab
      });
    })
  );
};

var TabPanel = exports.TabPanel = function TabPanel(_ref2) {
  var children = _ref2.children,
      active = _ref2.active,
      className = _ref2.className;

  return active ? _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['coz-tab-panel'], className) },
    children
  ) : null;
};

var TabPanels = exports.TabPanels = function TabPanels(_ref3) {
  var children = _ref3.children,
      activeTab = _ref3.activeTab,
      changeTab = _ref3.changeTab,
      className = _ref3.className;

  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['coz-tab-panels'], className) },
    _react2.default.Children.map(children, function (child) {
      return _react2.default.cloneElement(child, {
        active: child.props.active || activeTab === child.props.name,
        changeTab: changeTab
      });
    })
  );
};

var Tabs = exports.Tabs = function (_Component2) {
  (0, _inherits3.default)(Tabs, _Component2);

  function Tabs(props) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this2.changeTab = _this2.changeTab.bind(_this2);
    _this2.state = { activeTab: props.initialActiveTab };
    return _this2;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'changeTab',
    value: function changeTab(tabName) {
      this.setState({ activeTab: tabName });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          children = _props3.children,
          className = _props3.className;
      var activeTab = this.state.activeTab;

      var changeTab = this.changeTab;
      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles['coz-tabs'], className) },
        _react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { activeTab: activeTab, changeTab: changeTab });
        })
      );
    }
  }]);
  return Tabs;
}(_react.Component);