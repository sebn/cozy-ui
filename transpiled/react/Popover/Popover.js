'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dom = require('../utils/dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popover = function (_Component) {
  (0, _inherits3.default)(Popover, _Component);

  function Popover(props) {
    (0, _classCallCheck3.default)(this, Popover);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));

    _this.defaultStyle = {
      display: 'block',
      visibility: 'hidden',
      position: 'fixed'
    };
    return _this;
  }

  (0, _createClass3.default)(Popover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // When the component is ready, then let's do some maths
      requestAnimationFrame(this.computeCoordinates.bind(this));
    }
  }, {
    key: 'computeCoordinates',
    value: function computeCoordinates() {
      // Find me & give me my coordinates
      // eslint-disable-next-line react/no-find-dom-node
      var domItem = _reactDom2.default.findDOMNode(this);
      var domItemCoordinates = domItem.getBoundingClientRect();
      var menuElement = domItem.parentNode;
      var scrollTop = (0, _dom.getScrollParent)(menuElement);
      var coordinates = menuElement.getBoundingClientRect();

      // If we have don't have enough space => maths
      var hasNotEnoughSpace = domItemCoordinates.bottom - scrollTop > window.innerHeight;
      this.setState({
        style: {
          top: hasNotEnoughSpace ? coordinates.top - domItemCoordinates.height : coordinates.top + coordinates.height,
          left: coordinates.left + coordinates.width - domItemCoordinates.width,
          visibility: 'visible'
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          style: Object.assign({}, this.props.style, this.defaultStyle, this.state.style),
          className: this.props.className
        },
        this.props.children
      );
    }
  }]);
  return Popover;
}(_react.Component);

exports.default = Popover;


Popover.defaultProps = {
  style: {},
  className: {}
};

Popover.propTypes = {
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};