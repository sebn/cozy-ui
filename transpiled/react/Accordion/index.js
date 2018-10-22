'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionItem = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'c-accordion': 'styles__c-accordion___1VRom',
  'c-accordion-item': 'styles__c-accordion-item___1gCyn',
  'c-accordion-title': 'styles__c-accordion-title___7jntH',
  'is-active': 'styles__is-active___1LQKA',
  'c-accordion-body': 'styles__c-accordion-body___2twhs'
};

var AccordionItem = function (_Component) {
  (0, _inherits3.default)(AccordionItem, _Component);

  function AccordionItem(props) {
    (0, _classCallCheck3.default)(this, AccordionItem);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AccordionItem.__proto__ || Object.getPrototypeOf(AccordionItem)).call(this, props));

    _this.toggleSelection = function () {
      _this.setState(function (previousState) {
        return { selected: !previousState.selected };
      });
    };

    _this.state = { selected: false };
    _this.headingID = (0, _uniqueId2.default)('accordion_header_');
    _this.contentID = (0, _uniqueId2.default)('accordion_content_');
    return _this;
  }

  (0, _createClass3.default)(AccordionItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          label = _props.label,
          className = _props.className;
      var headingID = this.headingID,
          contentID = this.contentID;
      var selected = this.state.selected;


      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles['c-accordion-item'], className) },
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(styles['c-accordion-title'], (0, _defineProperty3.default)({}, styles['is-active'], selected), className),
            role: 'heading',
            'aria-level': '3',
            onClick: function onClick() {
              return _this2.toggleSelection();
            }
          },
          _react2.default.createElement(
            'div',
            {
              id: headingID,
              role: 'button',
              'aria-expanded': selected,
              'aria-controls': contentID
            },
            _react2.default.createElement(_Icon2.default, { icon: 'forward' }),
            label
          )
        ),
        _react2.default.createElement(
          'div',
          {
            className: (0, _classnames2.default)(styles['c-accordion-body'], (0, _defineProperty3.default)({}, styles['is-active'], selected), className),
            id: contentID,
            role: 'region',
            'aria-labelledby': headingID,
            'aria-hidden': !selected
          },
          children
        )
      );
    }
  }]);
  return AccordionItem;
}(_react.Component);

var Accordion = function (_Component2) {
  (0, _inherits3.default)(Accordion, _Component2);

  function Accordion() {
    (0, _classCallCheck3.default)(this, Accordion);
    return (0, _possibleConstructorReturn3.default)(this, (Accordion.__proto__ || Object.getPrototypeOf(Accordion)).apply(this, arguments));
  }

  (0, _createClass3.default)(Accordion, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className;

      return _react2.default.createElement(
        'div',
        { className: (0, _classnames2.default)(styles['c-accordion'], className) },
        children
      );
    }
  }]);
  return Accordion;
}(_react.Component);

Accordion.propTypes = {
  className: _propTypes2.default.string
};

AccordionItem.propTypes = {
  label: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string
};

Object.assign(Accordion, { AccordionItem: AccordionItem });

exports.default = Accordion;
exports.AccordionItem = AccordionItem;