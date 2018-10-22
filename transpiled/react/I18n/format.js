'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initFormat = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initFormat = exports.initFormat = function initFormat(lang) {
  var defaultLang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _.DEFAULT_LANG;

  var locales = (0, _defineProperty3.default)({}, defaultLang, require('date-fns/locale/' + defaultLang + '/index'));
  if (lang && lang !== defaultLang) {
    try {
      locales[lang] = require('date-fns/locale/' + lang + '/index');
    } catch (e) {
      console.warn('The "' + lang + '" locale isn\'t supported by date-fns');
    }
  }
  return function (date, formatStr) {
    return (0, _format2.default)(date, formatStr, { locale: locales[lang] });
  };
};