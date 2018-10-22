'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _I18n = require('../I18n');

var _index = require('../index');

var _withBreakpoints = require('../helpers/withBreakpoints');

var _withBreakpoints2 = _interopRequireDefault(_withBreakpoints);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___bVKZR',
  'u-hide': 'styles__u-hide___1C6AS',
  'u-hide--mob': 'styles__u-hide--mob___sBh8J',
  'u-hide--tablet': 'styles__u-hide--tablet___3jpEK',
  'u-hide--desk': 'styles__u-hide--desk___2GsMX',
  'u-error': 'styles__u-error___1G5UP',
  'u-error--warning': 'styles__u-error--warning___1lXyK',
  'u-valid': 'styles__u-valid___JbO4U',
  'u-warn': 'styles__u-warn___3p5uH',
  'u-black': 'styles__u-black___OHJoN',
  'u-white': 'styles__u-white___2XrjR',
  'u-paleGrey': 'styles__u-paleGrey___33GDg',
  'u-silver': 'styles__u-silver___3GeBc',
  'u-coolGrey': 'styles__u-coolGrey___17tow',
  'u-slateGrey': 'styles__u-slateGrey___2IXQV',
  'u-charcoalGrey': 'styles__u-charcoalGrey___ZNrIH',
  'u-zircon': 'styles__u-zircon___3Rgwr',
  'u-frenchPass': 'styles__u-frenchPass___JZFgp',
  'u-dodgerBlue': 'styles__u-dodgerBlue___64XXy',
  'u-scienceBlue': 'styles__u-scienceBlue___3fAmk',
  'u-puertoRico': 'styles__u-puertoRico___3Z7rY',
  'u-emerald': 'styles__u-emerald___2R2Sy',
  'u-malachite': 'styles__u-malachite___doesP',
  'u-texasRose': 'styles__u-texasRose___2J3Y4',
  'u-chablis': 'styles__u-chablis___3ew4Y',
  'u-yourPink': 'styles__u-yourPink___2VQBf',
  'u-pomegranate': 'styles__u-pomegranate___1oEHB',
  'u-monza': 'styles__u-monza___CuJfE',
  'u-portage': 'styles__u-portage___1DNq4',
  'u-azure': 'styles__u-azure___3l03B',
  'u-melon': 'styles__u-melon___2-xhw',
  'u-blazeOrange': 'styles__u-blazeOrange___2kkYA',
  'u-mango': 'styles__u-mango___22oXh',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___1RA_0',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___13ONQ',
  'u-purpley': 'styles__u-purpley___2SdQv',
  'u-lightishPurple': 'styles__u-lightishPurple___PYVvu',
  'u-barney': 'styles__u-barney___1UvM3',
  'u-weirdGreen': 'styles__u-weirdGreen___JkMif',
  'u-ellipsis': 'styles__u-ellipsis___ryeEm',
  'u-midellipsis': 'styles__u-midellipsis___26Fmp',
  'coz-selectionbar': 'styles__coz-selectionbar___2FBfW',
  'coz-selectionbar-separator': 'styles__coz-selectionbar-separator___1q3R0',
  'coz-action-extra': 'styles__coz-action-extra___LXY-G',
  'coz-action-close': 'styles__coz-action-close___F8fAV',
  'coz-selectionbar-count': 'styles__coz-selectionbar-count___1ZRp9',
  'coz-action-moveto': 'styles__coz-action-moveto___XyZdv',
  'spin': 'styles__spin___1MUwn'
};

/*

If you want use SelectionBar component, you must have `actions` parameter, like :

actions = {
  trash: {
    action: selections => dispatch(trashFiles(selections)))
  },
  rename: {
    action: selections => dispatch(startRenamingAsync(selected[0])),
    displayCondition: selections => selections.length === 1
  }
}

*/

var SelectionBar = function SelectionBar(_ref) {
  var t = _ref.t,
      actions = _ref.actions,
      selected = _ref.selected,
      hideSelectionBar = _ref.hideSelectionBar,
      _ref$breakpoints = _ref.breakpoints,
      isMobile = _ref$breakpoints.isMobile,
      isTablet = _ref$breakpoints.isTablet;

  var selectedCount = selected.length;
  var actionNames = Object.keys(actions).filter(function (actionName) {
    var action = actions[actionName];
    return action.displayCondition === undefined || action.displayCondition(selected);
  });
  return _react2.default.createElement(
    'div',
    { className: styles['coz-selectionbar'], role: 'toolbar' },
    _react2.default.createElement(
      'span',
      { className: styles['coz-selectionbar-count'] },
      selectedCount,
      _react2.default.createElement(
        'span',
        null,
        ' ',
        t('SelectionBar.selected_count', { smart_count: selectedCount })
      )
    ),
    _react2.default.createElement('span', { className: styles['coz-selectionbar-separator'] }),
    actionNames.map(function (actionName, index) {
      return _react2.default.createElement(_index.Button, {
        type: 'button',
        key: index,
        disabled: selectedCount < 1,
        onClick: function onClick() {
          return actions[actionName].action(selected);
        },
        icon: actionName.toLowerCase(),
        label: t('SelectionBar.' + actionName),
        iconOnly: isMobile || isTablet ? true : false,
        subtle: true
      });
    }),
    _react2.default.createElement(
      _index.Button,
      {
        type: 'button',
        theme: 'close',
        className: styles['coz-action-close'],
        onClick: hideSelectionBar,
        extension: 'narrow'
      },
      _react2.default.createElement(_index.Icon, { icon: 'cross' })
    )
  );
};

SelectionBar.propTypes = {
  t: _propTypes2.default.func.isRequired, // translate action name.
  actions: _propTypes2.default.object.isRequired, // An object with actions
  selected: _propTypes2.default.array.isRequired, // selected items id.
  hideSelectionBar: _propTypes2.default.func.isRequired // function to close SelectionBar.
};

exports.default = (0, _withBreakpoints2.default)()((0, _I18n.translate)()(SelectionBar));