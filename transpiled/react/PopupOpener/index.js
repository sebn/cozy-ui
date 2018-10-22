'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openCenteredPopup = openCenteredPopup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// customized function to center a popup window
// source https://stackoverflow.com/a/16861050
function openCenteredPopup(url, title, w, h) {
  /* global screen */
  var width = window.innerWidth || document.documentElement.clientWidth || screen.width;
  var height = window.innerHeight || document.documentElement.clientHeight || screen.height;

  var left = width / 2 - w / 2 + window.screenX;
  var top = height / 2 - h / 2 + window.screenY;
  var newWindow = window.open('', title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
  newWindow.location.href = url;

  // Puts focus on the newWindow
  if (window.focus) {
    newWindow.focus();
  }
  return newWindow;
}

var PopupOpener = function PopupOpener(props) {
  var url = props.url,
      className = props.className,
      children = props.children,
      frameTitle = props.frameTitle,
      height = props.height,
      width = props.width;

  return _react2.default.createElement(
    'a',
    {
      onClick: function onClick() {
        return openCenteredPopup(url, frameTitle, width, height);
      },
      className: className
    },
    children
  );
};

PopupOpener.propTypes = {
  children: _propTypes2.default.node.isRequired,
  url: _propTypes2.default.string.isRequired,
  className: _propTypes2.default.string,
  frameTitle: _propTypes2.default.string,
  height: _propTypes2.default.number.isRequired,
  width: _propTypes2.default.number.isRequired
};

PopupOpener.defaultProps = {
  height: 500,
  width: 500
};

exports.default = PopupOpener;