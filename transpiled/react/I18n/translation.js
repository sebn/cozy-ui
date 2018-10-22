'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = exports.initTranslation = exports._polyglot = undefined;

var _nodePolyglot = require('node-polyglot');

var _nodePolyglot2 = _interopRequireDefault(_nodePolyglot);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _polyglot = exports._polyglot = void 0;

var initTranslation = exports.initTranslation = function initTranslation(lang, dictRequire, context) {
  var defaultLang = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _.DEFAULT_LANG;

  exports._polyglot = _polyglot = new _nodePolyglot2.default({
    phrases: dictRequire(defaultLang),
    locale: defaultLang
  });

  // Load global locales
  if (lang && lang !== defaultLang) {
    try {
      var dict = dictRequire(lang);
      _polyglot.extend(dict);
      _polyglot.locale(lang);
    } catch (e) {
      console.warn('The dict phrases for "' + lang + '" can\'t be loaded');
    }
  }

  // Load context locales
  if (context) {
    try {
      var _dict = dictRequire(lang, context);
      _polyglot.extend(_dict);
    } catch (e) {
      console.warn('The context ' + context + ' cannot be loaded for lang ' + lang);
    }
  }

  return _polyglot;
};

var extend = exports.extend = function extend(dict) {
  return _polyglot && _polyglot.extend(dict);
};