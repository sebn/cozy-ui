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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _hammerjs = require('hammerjs');

var _hammerjs2 = _interopRequireDefault(_hammerjs);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _once = require('lodash/once');

var _once2 = _interopRequireDefault(_once);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'ActionMenu': 'styles__ActionMenu___2U8Zt',
  'c-actionmenu': 'styles__c-actionmenu___22Fp1',
  'with-transition': 'styles__with-transition___1xeFH'
};


var TRANSITION_DURATION = 100; // need to be kept in sync with css

/**
 * Use an ActionMenu to show the user possible actions to the user
 * at the bottom of the screen in a modal way.
 *
 * - Animates in/out
 * - Possible to use Escape to close (thanks to `<Overlay />`)
 * - Possible to click outside to close (thanks to `<Overlay />`)
 * - Reacts to gestures with HammerJS
 */

var ActionMenu = function (_Component) {
  (0, _inherits3.default)(ActionMenu, _Component);

  function ActionMenu(props) {
    (0, _classCallCheck3.default)(this, ActionMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ActionMenu.__proto__ || Object.getPrototypeOf(ActionMenu)).call(this, props));

    _this.animateClose = function () {
      _this.setState({ closing: true });

      // we need to transition the menu to the bottom before dismissing it
      var close = (0, _once2.default)(function () {
        _this.menuNode.removeEventListener('transitionend', close);
        _this.close();
      });

      _this.menuNode.addEventListener('transitionend', close, false);
      // in case transitionend is not called, for example if the element is removed
      setTimeout(close, TRANSITION_DURATION);

      _this.applyTransformation(1.1);
    };

    _this.close = function () {
      _this.setState({ closing: true });
      _this.props.onClose();
    };

    _this.handleMenuRef = function (menu) {
      _this.menuNode = menu;
    };

    _this.handleWrapperRef = function (wrapper) {
      _this.wrapperNode = wrapper;
    };

    _this.state = { closing: false };
    return _this;
  }

  (0, _createClass3.default)(ActionMenu, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.initialAppear();
      this.attachEvents();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.gesturesHandler.destroy();
      this.menuNode.style = ''; // Drops the node style in case it gets recycled, see https://github.com/cozy/cozy-ui/pull/602
    }
  }, {
    key: 'initialAppear',
    value: function initialAppear() {
      var _this2 = this;

      this.turnTransitionsOff();
      this.applyTransformation(1);
      requestAnimationFrame(function () {
        _this2.turnTransitionsOn();
        _this2.applyTransformation(0);
      });
    }
  }, {
    key: 'turnTransitionsOn',
    value: function turnTransitionsOn() {
      this.menuNode.classList.add(styles['with-transition']);
    }
  }, {
    key: 'turnTransitionsOff',
    value: function turnTransitionsOff() {
      this.menuNode.classList.remove(styles['with-transition']);
    }
  }, {
    key: 'attachEvents',
    value: function attachEvents() {
      var _this3 = this;

      this.gesturesHandler = new _hammerjs2.default.Manager(this.wrapperNode, {
        recognizers: [[_hammerjs2.default.Pan, { direction: _hammerjs2.default.DIRECTION_VERTICAL }]]
      });

      // to be completely accurate, `maximumGestureDelta` should be the difference between the top of the menu and the
      // bottom of the page; but using the height is much easier to compute and accurate enough.
      var maximumGestureDistance = this.menuNode.getBoundingClientRect().height;
      // between 0 and 1, how far down the gesture must be to be considered complete upon release
      var minimumCloseDistance = 0.6;
      // a gesture faster than this will dismiss the menu, regardless of distance traveled
      var minimumCloseVelocity = 0.6;

      var currentGestureProgress = null;

      this.gesturesHandler.on('panstart', function () {
        _this3.turnTransitionsOff();
        currentGestureProgress = 0;
      });

      this.gesturesHandler.on('pan', function (e) {
        currentGestureProgress = e.deltaY / maximumGestureDistance;
        _this3.applyTransformation(currentGestureProgress);
      });

      this.gesturesHandler.on('panend', function (e) {
        // Dismiss the menu if the swipe pan was bigger than the treshold,
        // or if it was a fast, downward gesture
        var shouldDismiss = e.deltaY / maximumGestureDistance >= minimumCloseDistance || e.deltaY > 0 && e.velocity >= minimumCloseVelocity;

        if (shouldDismiss) {
          if (currentGestureProgress >= 1) {
            // Menu is already hidden, close it right away
            _this3.close();
          } else {
            _this3.turnTransitionsOn();
            _this3.animateClose();
          }
        } else {
          _this3.turnTransitionsOn();
          _this3.applyTransformation(0);
        }
      });
    }

    /**
     * Applies a css trasnform to the element, based on the progress of the gesture
     * @param  {Float} progress - Amount of progress between 0 and 1
     */

  }, {
    key: 'applyTransformation',
    value: function applyTransformation(progress) {
      // constrain between 0 and 1.1 (go a bit further than 1 to be hidden completely)
      progress = Math.min(1.1, Math.max(0, progress));
      this.menuNode.style.transform = 'translateY(' + progress * 100 + '%)';
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className;
      var closing = this.state.closing;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(styles.ActionMenu, className),
          ref: this.handleWrapperRef
        },
        _react2.default.createElement(
          _Overlay2.default,
          {
            style: { opacity: closing ? 0 : 1 },
            onClick: this.animateClose,
            onEscape: this.animateClose
          },
          _react2.default.createElement(
            'div',
            { className: styles['c-actionmenu'], ref: this.handleMenuRef },
            children
          )
        )
      );
    }
  }]);
  return ActionMenu;
}(_react.Component);

ActionMenu.propTypes = {
  /** Extra class */
  className: _propTypes2.default.string,
  /** What to do on close */
  onClose: _propTypes2.default.func
};

exports.default = ActionMenu;