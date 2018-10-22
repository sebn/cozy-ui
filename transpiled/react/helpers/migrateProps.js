'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var migrate = function migrate(oldProps, options) {
  var newProps = void 0,
      msg = void 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var option = _step.value;

      if (option.src && option.dest) {
        // simple mode
        var src = option.src;
        var dest = option.dest;
        var oldProp = oldProps[src];
        if (oldProp === undefined) {
          continue;
        }
        newProps = newProps || Object.assign({}, oldProps); // copy props only if we change them
        newProps[dest] = oldProps[src];
        delete newProps[src];
        msg = '`' + src + '` is deprecated and has been migrated automatically, you should use `' + dest + '` now';
      } else if (option.fn) {
        // advanced mode
        var res = option.fn(newProps || oldProps);
        if (res.length !== 2) {
          throw new Error('migrateOption `fn` should return [newProps, msg].');
        }
        ;
        var _res = (0, _slicedToArray3.default)(res, 2);

        newProps = _res[0];
        msg = _res[1];
      } else {
        console.warn('migrateProps option is not valid, valid properties are `src`, `dest`, `fn`. You passed', option);
      }
      if ((process.env.NODE_ENV != 'production' || window.SHOW_DEPRECATION_WARNINGS) && msg) {
        console.warn('Deprecation: ' + msg);
        msg = null;
      }
    }
    // It is possible that no migration has been made, in this case newProps is undefined and we simply
    // return the oldProps
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return newProps || oldProps;
};

/**
 * HOC to migrate old props for deprecation purpose.
 *
 * @example
 * Let's say we deprecated the property `withCross` of Modal and replaced
 * it with `closable`. To preserve backward compatibility we use the `migrate`
 * HOC, and provide an array of migrations to perform on the old props.
 *
 * ```
 * const migrateOptions = [{ src: 'withCross', dest: 'closable'}]
 * const Modal = migrate(migrateOptions)(_Modal)
 * ```
 *
 * Here we only have one migration, to rename `withCross` (source) to `closable` (destination).
 * For more complex migration, it is possible to use the `fn` property of a migration. In this
 * case you are responsible for providing a warning message as part of the return value of `fn`.
 *
 * ```
 * const migrateClosableAndReverse = oldProps => {
 *   let newProps
 *   if (oldProps.withoutCross) {
 *     newProps = {...oldProps}
 *     newProps.closable = !oldProps.withoutCross
 *     return [newProps, '`withoutCross` is deprecated. Use `closable` now. Be careful closable = !withoutCross']
 *   } else {
 *     return [oldProps, null]
 *   }
 *   return newProps || oldProps
 * }
 *
 * const migrateOptions = [{ fn: migrateClosableAndReverse }]
 * const Modal = migrate(migrateOptions)(_Modal)
 * ```
 *
 * @param  {Array} migrateOptions - Prop migrations that will be done on the old props
 * @return {[type]}         [description]
 */

exports.default = function (migrateOptions) {
  return function (Wrapped) {
    return function (oldProps) {
      var newProps = migrate(oldProps, migrateOptions, Wrapped);
      return _react2.default.createElement(Wrapped, newProps);
    };
  };
};