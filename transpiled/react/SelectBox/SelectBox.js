'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.components = exports.reactSelectControl = exports.CheckboxOption = exports.Option = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactSelect = require('react-select');

var _reactSelect2 = _interopRequireDefault(_reactSelect);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _palette = require('../palette');

var _palette2 = _interopRequireDefault(_palette);

var _withBreakpoints = require('../helpers/withBreakpoints');

var _withBreakpoints2 = _interopRequireDefault(_withBreakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'select-control__input': 'styles__select-control__input___1xDlj',
  'select-option': 'styles__select-option___ov_IT',
  'select-option--disabled': 'styles__select-option--disabled___1du57',
  'select-option--focused': 'styles__select-option--focused___1Vpjv',
  'select-option--selected': 'styles__select-option--selected___R3_ES',
  'select-option__checkbox': 'styles__select-option__checkbox___15WVE',
  'select-option--checkmark': 'styles__select-option--checkmark___1kN8z',
  'select__overlay': 'styles__select__overlay___3H8Jy'
};


var customStyles = {
  container: function container(base) {
    return Object.assign({}, base, {
      maxWidth: '30rem'
    });
  },
  control: function control(base, state) {
    return Object.assign({}, base, {
      backgroundColor: 'white',
      border: state.isFocused ? '.0625rem solid ' + _palette2.default['dodgerBlue'] : '.0625rem solid ' + _palette2.default['silver'],
      ':hover': {
        borderColor: _palette2.default['coolGrey']
      },
      borderRadius: '.1875rem',
      boxShadow: 'unset',
      padding: '.503rem .5rem'
    });
  },
  dropdownIndicator: function dropdownIndicator(base, state) {
    return Object.assign({}, base, {
      backgroundImage: state.menuIsOpen ? 'url("../../assets/icons/ui/top-select.svg")' : 'url("../../assets/icons/ui/bottom-select.svg")',
      backgroundSize: '.875rem',
      height: '.875rem',
      marginRight: '.75rem',
      padding: 0,
      width: '.875rem'
    });
  },
  indicatorSeparator: function indicatorSeparator() {
    return {
      display: 'none'
    };
  },
  valueContainer: function valueContainer(base) {
    return Object.assign({}, base, {
      color: 'black'
    });
  },
  menu: function menu(base) {
    return Object.assign({}, base, {
      zIndex: 10
    });
  }
};

var reactSelectControl = function reactSelectControl(CustomControl) {
  return function (_ref) {
    var innerProps = _ref.innerProps,
        children = _ref.children;
    return _react2.default.createElement(
      'div',
      innerProps,
      CustomControl,
      _react2.default.createElement(
        'div',
        { className: styles['select-control__input'] },
        children
      )
    );
  };
};

var Option = function Option(_ref2) {
  var _classNames;

  var children = _ref2.children,
      isSelected = _ref2.isSelected,
      isFocused = _ref2.isFocused,
      isDisabled = _ref2.isDisabled,
      innerProps = _ref2.innerProps,
      withCheckbox = _ref2.withCheckbox;
  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({}, innerProps, {
      className: (0, _classnames2.default)(styles['select-option'], (_classNames = {}, (0, _defineProperty3.default)(_classNames, styles['select-option--selected'], isSelected && !withCheckbox), (0, _defineProperty3.default)(_classNames, styles['select-option--focused'], isFocused), (0, _defineProperty3.default)(_classNames, styles['select-option--disabled'], isDisabled), _classNames))
    }),
    withCheckbox && _react2.default.createElement('input', {
      type: 'checkbox',
      checked: isSelected,
      className: styles['select-option__checkbox']
    }),
    children,
    isSelected && !withCheckbox && _react2.default.createElement(_Icon2.default, {
      icon: 'check-circleless',
      color: _palette2.default['dodgerBlue'],
      className: styles['select-option--checkmark']
    })
  );
};

Option.propTypes = {
  withCheckbox: _propTypes2.default.bool
};

Option.defaultProps = {
  withCheckbox: false
};

var CheckboxOption = function CheckboxOption(_ref3) {
  var props = (0, _objectWithoutProperties3.default)(_ref3, []);
  return _react2.default.createElement(Option, (0, _extends3.default)({}, props, { withCheckbox: true }));
};

CheckboxOption.propTypes = {};

var SelectBox = function (_Component) {
  (0, _inherits3.default)(SelectBox, _Component);

  function SelectBox() {
    var _ref4;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SelectBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref4 = SelectBox.__proto__ || Object.getPrototypeOf(SelectBox)).call.apply(_ref4, [this].concat(args))), _this), _this.state = { isOpen: false }, _this.handleOpen = function () {
      _this.setState({ isOpen: true });
    }, _this.handleClose = function () {
      _this.setState({ isOpen: false });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(SelectBox, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          components = _props.components,
          reactSelectStyles = _props.styles,
          isMobile = _props.breakpoints.isMobile,
          classNamePrefix = _props.classNamePrefix,
          props = (0, _objectWithoutProperties3.default)(_props, ['className', 'components', 'styles', 'breakpoints', 'classNamePrefix']);

      var showOverlay = this.state.isOpen && isMobile;
      return _react2.default.createElement(_reactSelect2.default, (0, _extends3.default)({
        components: Object.assign({ Option: Option }, components),
        styles: Object.assign({}, customStyles, reactSelectStyles),
        onMenuOpen: this.handleOpen,
        onMenuClose: this.handleClose
      }, props, {
        className: (0, _classnames2.default)(className, showOverlay ? styles['select__overlay'] : null)
        // react-select temporarily adds className to its innerComponents
        // but this behavior will soon be removed. For the moment, we
        // cancel it by setting it to empty string
        , classNamePrefix: classNamePrefix || ''
      }));
    }
  }]);
  return SelectBox;
}(_react.Component);

SelectBox.propTypes = {
  components: _propTypes2.default.object,
  styles: _propTypes2.default.object
};

SelectBox.defaultProps = {
  components: {},
  styles: {}
};

var components = _reactSelect2.default.components;

exports.default = (0, _withBreakpoints2.default)()(SelectBox);
exports.Option = Option;
exports.CheckboxOption = CheckboxOption;
exports.reactSelectControl = reactSelectControl;
exports.components = components;