'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _reactSelect = require('react-select');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _groupBy2 = require('lodash/groupBy');

var _groupBy3 = _interopRequireDefault(_groupBy2);

var _SelectBox = require('./SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _palette = require('../palette');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var optionPadding = 0.25;

var fixedOptionsStyle = {
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius: '4px',
  paddingTop: optionPadding + 'rem',
  paddingBottom: optionPadding + 'rem',
  borderTop: '1px solid ' + _palette.silver,
  background: 'white',
  position: 'relative'
};

var FixedOptions = function FixedOptions(props) {
  return _react2.default.createElement(
    'div',
    { style: fixedOptionsStyle },
    props.children
  );
};

/*
  This is the hacky part, where fixed options vnodes are manually spliced
  from the options vnodes. Fixed options vnodes are returned along with
  the menuUi where fixed vnodes have been removed.

  We rely on react-select internal structure `menu > scroll captor > menu list > options`.
  This code should be updated if react-select's internal structure changes.

  https://github.com/cozy/cozy-ui/pull/501
*/
var extractFixed = function extractFixed(children) {
  var newChildren = _react2.default.cloneElement(children);
  var menuList = newChildren.children ? newChildren.children[0] : null;
  if (!menuList) {
    return { fixed: [], newChildren: newChildren };
  }
  var options = menuList.children;

  var _groupBy = (0, _groupBy3.default)(options, function (vnode) {
    return vnode.attributes.data.fixed === true ? 'fixed' : 'normal';
  }),
      fixed = _groupBy.fixed,
      normal = _groupBy.normal;

  newChildren.children[0].children = normal;
  return { fixed: fixed, newChildren: newChildren };
};

var MenuWithFixedOptions = function MenuWithFixedOptions(props) {
  var children = props.children;

  var _extractFixed = extractFixed(children),
      fixed = _extractFixed.fixed,
      menuUi = _extractFixed.newChildren;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _reactSelect.components.Menu,
      props,
      menuUi,
      _react2.default.createElement(
        FixedOptions,
        null,
        fixed
      )
    )
  );
};

var fixedMenuStyle = {
  zIndex: 10,
  overflow: 'hidden',
  // the space at the end is important otherwise the property gets autoprefixed (by what, I
  // don't know) and is no longer understood by the browser
  display: 'flex ',
  flexDirection: 'column'
};

var SelectBoxWithFixedOptions = function SelectBoxWithFixedOptions(props) {
  return _react2.default.createElement(_SelectBox2.default, (0, _extends3.default)({}, props, {
    styles: Object.assign({
      menu: function menu(base) {
        return Object.assign({}, base, fixedMenuStyle);
      }
    }, props.styles || {}),
    components: Object.assign({
      Menu: MenuWithFixedOptions
    }, props.components || {})
  }));
};

exports.default = SelectBoxWithFixedOptions;