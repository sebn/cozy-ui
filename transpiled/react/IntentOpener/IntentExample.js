'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IntentWrapper = require('../IntentWrapper');

var _IntentWrapper2 = _interopRequireDefault(_IntentWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IntentExample = function IntentExample(_ref) {
  var onComplete = _ref.onComplete,
      action = _ref.action,
      doctype = _ref.doctype,
      options = _ref.options;

  return _react2.default.createElement(
    _IntentWrapper2.default,
    {
      appIcon: 'http://lorempixel.com/90/90/cats',
      appName: 'IntentExample',
      appEditor: 'EditorExample'
    },
    _react2.default.createElement(
      'p',
      null,
      'Action: ',
      action,
      _react2.default.createElement('br', null),
      'Doctype: ',
      doctype,
      _react2.default.createElement('br', null),
      'Options: ',
      _react2.default.createElement(
        'pre',
        null,
        JSON.stringify(options, null, 2)
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'button',
        { onClick: onComplete },
        'Click to complete intent'
      )
    )
  );
};

exports.default = IntentExample;