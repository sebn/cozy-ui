'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Portal = void 0;
if (process.env.USE_REACT) {
  var ReactDOM = require('react-dom');
  Portal = function Portal(_ref) {
    var into = _ref.into,
        children = _ref.children;

    var targetElement = document.querySelector(into);
    return ReactDOM.createPortal(children, targetElement);
  };
} else {
  Portal = require('preact-portal');
}

exports.default = Portal;