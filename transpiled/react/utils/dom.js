"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getScrollParent = exports.getScrollParent = function getScrollParent(element) {
  var el = element;
  var scrollTop = 0;

  while (el && el.parentNode !== document) {
    scrollTop += el.scrollTop;
    el = el.parentNode;
  }
  return scrollTop;
};