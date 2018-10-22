'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sprite = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _Sprite = require('./Sprite');

Object.defineProperty(exports, 'Sprite', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sprite).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'icon--spin': 'styles__icon--spin___ybfC1',
  'spin': 'styles__spin___2Vvw3',
  'icon': 'styles__icon___23x3R',
  'icon--preserveColor': 'styles__icon--preserveColor___3gBz6'
};


var DEFAULT_SIZE = '16';

function Icon(props) {
  var icon = props.icon,
      width = props.width,
      height = props.height,
      color = props.color,
      className = props.className,
      preserveColor = props.preserveColor,
      rotate = props.rotate,
      size = props.size,
      spin = props.spin,
      restProps = (0, _objectWithoutProperties3.default)(props, ['icon', 'width', 'height', 'color', 'className', 'preserveColor', 'rotate', 'size', 'spin']);

  var style = props.style;
  var anchor = void 0;
  if (icon.id) {
    anchor = '#' + icon.id;
  } else if (icon[0] === '#') {
    anchor = icon;
  } else {
    anchor = '#' + icon;
  }

  if (!anchor) {
    console.warn('Icon not found ' + icon + '.');
    return null;
  }

  style = Object.assign({}, style);
  if (color) {
    style['fill'] = color;
  }
  if (rotate) {
    style['transform'] = 'rotate(' + rotate + 'deg)';
  }

  var iconClassName = preserveColor ? 'icon--preserveColor' : 'icon';
  var iconClass = (0, _classnames2.default)(className, styles[iconClassName], (0, _defineProperty3.default)({}, styles['icon--spin'], spin));

  return _react2.default.createElement(
    'svg',
    (0, _extends3.default)({
      className: iconClass,
      style: style,
      width: width || size || DEFAULT_SIZE,
      height: height || size || DEFAULT_SIZE
    }, restProps),
    _react2.default.createElement('use', { xlinkHref: anchor })
  );
}

Icon.isProperIcon = function (icon) {
  var isSvgSymbol = icon && !!icon.id;
  var isIconIdentifier = typeof icon === 'string';
  return isSvgSymbol || isIconIdentifier;
};

Icon.propTypes = {
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]).isRequired,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  color: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  className: _propTypes2.default.string,
  preserveColor: _propTypes2.default.bool,
  /** Shorthand for both width and height */
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  spin: _propTypes2.default.bool
};

Icon.defaultProps = {
  spin: false
};

exports.default = Icon;