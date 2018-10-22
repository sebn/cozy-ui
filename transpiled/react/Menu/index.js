'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuButton = exports.MenuItem = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Media = require('../Media');

var _Popover = require('../Popover');

var _Popover2 = _interopRequireDefault(_Popover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-menu__inner': 'styles__c-menu__inner___2g_mC',
  'c-menu': 'styles__c-menu___2YTiU',
  'c-menu--left': 'styles__c-menu--left___3wamY',
  'c-menu--right': 'styles__c-menu--right___3wxbb',
  'c-menu__inner--opened': 'styles__c-menu__inner--opened___sJHKG',
  'c-menu__btn': 'styles__c-menu__btn___18qF8',
  'c-menu__item': 'styles__c-menu__item___1sXjs',
  'c-menu__item-icon': 'styles__c-menu__item-icon___kzdkW',
  'c-menu__item--disabled': 'styles__c-menu__item--disabled___OHDks'
};

var MenuItem = function (_Component) {
  (0, _inherits3.default)(MenuItem, _Component);

  function MenuItem() {
    (0, _classCallCheck3.default)(this, MenuItem);
    return (0, _possibleConstructorReturn3.default)(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
  }

  (0, _createClass3.default)(MenuItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          disabled = _props.disabled,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          props = (0, _objectWithoutProperties3.default)(_props, ['disabled', 'className', 'children', 'icon']);

      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({}, props, {
          className: (0, _classnames2.default)(styles['c-menu__item'], (0, _defineProperty3.default)({}, styles['c-menu__item--disabled'], disabled), className)
        }),
        !icon ? children : _react2.default.createElement(
          _Media.Media,
          null,
          _react2.default.createElement(
            _Media.Img,
            { className: styles['c-menu__item-icon'] },
            icon
          ),
          _react2.default.createElement(
            _Media.Bd,
            null,
            children
          )
        )
      );
    }
  }]);
  return MenuItem;
}(_react.Component);

var Menu = function (_Component2) {
  (0, _inherits3.default)(Menu, _Component2);

  function Menu() {
    var _ref;

    var _temp, _this2, _ret;

    (0, _classCallCheck3.default)(this, Menu);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = { opened: false }, _this2.toggle = function () {
      return _this2.state.opened ? _this2.close() : _this2.open();
    }, _this2.handleClickOutside = function (e) {
      if (!_this2.container.contains(e.target)) {
        e.stopPropagation();
        _this2.close();
      }
    }, _this2.handleClick = function (item) {
      var isDisabled = item.props.disabled;
      var itemHandler = isDisabled ? null : item.props.onSelect;
      var handler = itemHandler || _this2.props[!isDisabled ? 'onSelect' : 'onSelectDisabled'];
      if (handler) {
        var res = handler(item.props.data);
        if (res !== false) {
          _this2.close();
        }
      } else if (!isDisabled) {
        _this2.close();
      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
  }

  (0, _createClass3.default)(Menu, [{
    key: 'open',
    value: function open() {
      this.setState({
        opened: true
      });
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ opened: false });
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this3 = this;

      return _react2.default.Children.map(this.props.children, function (item) {
        if (!item) return item;
        // ideally here, we should rely on React's type property and verify that
        // type === Item, but for some reason, preact vnodes don't have this property
        if (item.nodeName !== 'hr') {
          return _react2.default.cloneElement(item, {
            onClick: _this3.handleClick.bind(_this3, item)
          });
        }
        return item;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx2,
          _this4 = this;

      var _props2 = this.props,
          text = _props2.text,
          disabled = _props2.disabled,
          className = _props2.className,
          buttonClassName = _props2.buttonClassName,
          position = _props2.position,
          component = _props2.component,
          itemsStyle = _props2.itemsStyle,
          popover = _props2.popover;
      var opened = this.state.opened;

      var Tag = popover === true ? _Popover2.default : 'div';

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(styles['c-menu'], className, (_cx2 = {}, (0, _defineProperty3.default)(_cx2, styles['c-menu--left'], position === 'left'), (0, _defineProperty3.default)(_cx2, styles['c-menu--right'], position === 'right'), _cx2)),
          ref: function ref(_ref2) {
            _this4.container = _ref2;
          }
        },
        !component ? _react2.default.createElement(_Button2.default, {
          disabled: disabled,
          onClick: this.toggle,
          text: text,
          buttonClassName: buttonClassName
        }) : _react2.default.cloneElement(component, { disabled: disabled, onClick: this.toggle }),
        opened && _react2.default.createElement(
          Tag,
          {
            className: (0, _classnames2.default)(styles['c-menu__inner'], styles['c-menu__inner--opened']),
            style: Object.assign({}, itemsStyle)
          },
          this.renderItems()
        )
      );
    }
  }]);
  return Menu;
}(_react.Component);

Menu.defaultProps = {
  position: 'left',
  disabled: false,
  component: null,
  onSelect: null,
  onSelectDisabled: null,
  itemsStyle: {},
  popover: false
};

Menu.propTypes = {
  /** Use position='right' to display the menu to the right. Use left to display it to the left.
   */
  position: _propTypes2.default.string,
  /** Disables the menu */
  disabled: _propTypes2.default.bool,
  /** Specifies a custom component for the opener */
  component: _propTypes2.default.element,
  /** `onClick` handler for non disabled items */
  onSelect: _propTypes2.default.func,
  /** `onClick` handler for disabled items */
  onSelectDisabled: _propTypes2.default.func,
  /** Global Styles for MenuItems */
  itemsStyle: _propTypes2.default.object,
  /** if you need fixed menu */
  popover: _propTypes2.default.bool
};

Menu.MenuItem = MenuItem;
Menu.MenuButton = _Button2.default;
exports.default = Menu;
exports.MenuItem = MenuItem;
exports.MenuButton = _Button2.default;