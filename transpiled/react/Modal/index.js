'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalDescription = exports.ModalBrandedHeader = exports.ModalButtons = exports.ModalTitle = exports.AnimatedContentHeader = exports.ModalHeader = exports.ModalFooter = exports.ModalSection = exports.ModalContent = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Overlay = require('../Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Button = require('../Button');

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _migrateProps = require('../helpers/migrateProps');

var _migrateProps2 = _interopRequireDefault(_migrateProps);

var _palette = require('../palette');

var _palette2 = _interopRequireDefault(_palette);

var _Portal = require('../Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  'u-visuallyhidden': 'styles__u-visuallyhidden___35dyt',
  'u-hide': 'styles__u-hide___SMM_j',
  'u-hide--mob': 'styles__u-hide--mob___34LZy',
  'u-hide--tablet': 'styles__u-hide--tablet___1nXeQ',
  'u-hide--desk': 'styles__u-hide--desk___3RAy8',
  'u-error': 'styles__u-error___2wcEs',
  'u-error--warning': 'styles__u-error--warning___1TsQl',
  'u-valid': 'styles__u-valid___3A01f',
  'u-warn': 'styles__u-warn___3ry8j',
  'u-black': 'styles__u-black___3m5hh',
  'u-white': 'styles__u-white___3A8Xg',
  'u-paleGrey': 'styles__u-paleGrey___1U9BV',
  'u-silver': 'styles__u-silver___1tPdC',
  'u-coolGrey': 'styles__u-coolGrey___1widt',
  'u-slateGrey': 'styles__u-slateGrey___2an4l',
  'u-charcoalGrey': 'styles__u-charcoalGrey___1QGP5',
  'u-zircon': 'styles__u-zircon___3z1X6',
  'u-frenchPass': 'styles__u-frenchPass___1GNmU',
  'u-dodgerBlue': 'styles__u-dodgerBlue___2M_GZ',
  'u-scienceBlue': 'styles__u-scienceBlue___3trXq',
  'u-puertoRico': 'styles__u-puertoRico___EZKgN',
  'u-emerald': 'styles__u-emerald___1HDfC',
  'u-malachite': 'styles__u-malachite___2-Zt-',
  'u-texasRose': 'styles__u-texasRose___1xbEQ',
  'u-chablis': 'styles__u-chablis___1GPWo',
  'u-yourPink': 'styles__u-yourPink___2_E-f',
  'u-pomegranate': 'styles__u-pomegranate___3JlTP',
  'u-monza': 'styles__u-monza___3fjQW',
  'u-portage': 'styles__u-portage___GYupr',
  'u-azure': 'styles__u-azure___1uOUf',
  'u-melon': 'styles__u-melon___19aFt',
  'u-blazeOrange': 'styles__u-blazeOrange___2u2uC',
  'u-mango': 'styles__u-mango___3eAdD',
  'u-pumpkinOrange': 'styles__u-pumpkinOrange___V4M5G',
  'u-darkPeriwinkle': 'styles__u-darkPeriwinkle___XoQof',
  'u-purpley': 'styles__u-purpley___1V4R_',
  'u-lightishPurple': 'styles__u-lightishPurple___1s5IE',
  'u-barney': 'styles__u-barney___2vA73',
  'u-weirdGreen': 'styles__u-weirdGreen___3qfEp',
  'u-ellipsis': 'styles__u-ellipsis___222Ij',
  'u-midellipsis': 'styles__u-midellipsis___11R8X',
  'c-modal': 'styles__c-modal___33aV9',
  'c-modal-content': 'styles__c-modal-content___2av1P',
  'c-modal-header': 'styles__c-modal-header___hTCm5',
  'c-modal-header--branded': 'styles__c-modal-header--branded___1wwof',
  'c-modal-footer': 'styles__c-modal-footer___2Z4Tc',
  'c-modal-container': 'styles__c-modal-container___31zmi',
  'c-modal-wrapper': 'styles__c-modal-wrapper___8PyE9',
  'c-modal--small': 'styles__c-modal--small___XUfOM',
  'c-modal--medium': 'styles__c-modal--medium___1dS6h',
  'c-modal--large': 'styles__c-modal--large___3arEs',
  'c-modal--xlarge': 'styles__c-modal--xlarge___1XePQ',
  'c-modal--xxlarge': 'styles__c-modal--xxlarge___3Xp1K',
  'c-modal-wrapper--fullscreen': 'styles__c-modal-wrapper--fullscreen___3ygpX',
  'c-modal--fullscreen': 'styles__c-modal--fullscreen___8xZVw',
  'c-modal-illu-header': 'styles__c-modal-illu-header___3oi9k',
  'c-modal-illu-header--ghost': 'styles__c-modal-illu-header--ghost___3E9lu',
  'is-active': 'styles__is-active___1fLce',
  'c-modal--small-spacing': 'styles__c-modal--small-spacing___1foWa',
  'c-modal--large-spacing': 'styles__c-modal--large-spacing___n2gNs',
  'c-modal-app': 'styles__c-modal-app___1e4sV',
  'c-app-editor': 'styles__c-app-editor___JFuCk',
  'c-modal-app-icon': 'styles__c-modal-app-icon___3MjON',
  'c-modal-footer--button': 'styles__c-modal-footer--button___1sIa4',
  'c-modal-section': 'styles__c-modal-section___2QNq3',
  'c-modal-close': 'styles__c-modal-close___1v2bp',
  'c-modal--closable': 'styles__c-modal--closable___29CLQ',
  'c-modal-close--notitle': 'styles__c-modal-close--notitle___1rqne',
  'c-modal--overflowHidden': 'styles__c-modal--overflowHidden___3H87t',
  'spin': 'styles__spin___lXiub'
};

var AnimatedContentHeader = function (_Component) {
  (0, _inherits3.default)(AnimatedContentHeader, _Component);

  function AnimatedContentHeader() {
    (0, _classCallCheck3.default)(this, AnimatedContentHeader);
    return (0, _possibleConstructorReturn3.default)(this, (AnimatedContentHeader.__proto__ || Object.getPrototypeOf(AnimatedContentHeader)).apply(this, arguments));
  }

  (0, _createClass3.default)(AnimatedContentHeader, [{
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);
  return AnimatedContentHeader;
}(_react.Component);

function _getChildrenToRender(children) {
  return _react2.default.Children.map(children, function (child) {
    return child && child.nodeName !== AnimatedContentHeader ? child : null;
  });
}

function _getAnimatedHeader(children) {
  return _react2.default.Children.toArray(children).find(function (child) {
    return child && child.nodeName === AnimatedContentHeader;
  });
}

var ModalContent = function (_Component2) {
  (0, _inherits3.default)(ModalContent, _Component2);

  function ModalContent(props) {
    (0, _classCallCheck3.default)(this, ModalContent);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).call(this, props));

    _initialiseProps.call(_this2);

    var children = _this2.props.children;

    _this2.refreshComputedParts(children);
    _this2.state = {
      displayGhostHeader: false
    };
    return _this2;
  }

  // for preact
  // eslint-disable-next-line react/no-deprecated


  (0, _createClass3.default)(ModalContent, [{
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps, nextState) {
      this.UNSAFE_componentWillUpdate(nextProps, nextState);
    }
  }, {
    key: 'refreshComputedParts',
    value: function refreshComputedParts(children) {
      var animatedHeader = _getAnimatedHeader(children);
      this.animatedHeader = animatedHeader;
      this.childrenToRender = animatedHeader ? _getChildrenToRender(children) : children;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollingContent.addEventListener('scroll', this.handleScroll, {
        passive: true
      });
      document.body.classList.add('has-modal');
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.scrollingContent.removeEventListener('scroll', this.handleScroll);
      document.body.classList.remove('has-modal');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var className = this.props.className;
      var displayGhostHeader = this.state.displayGhostHeader;
      var animatedHeader = this.animatedHeader,
          childrenToRender = this.childrenToRender;

      return _react2.default.createElement(
        'div',
        {
          className: (0, _classnames2.default)(styles['c-modal-content'], className),
          ref: function ref(div) {
            _this3.scrollingContent = div;
          }
        },
        animatedHeader && _react2.default.createElement(
          'div',
          {
            className: animatedHeader.attributes.className,
            ref: function ref(div) {
              _this3.contentHeader = div;
            }
          },
          _react2.default.createElement(
            'h2',
            { className: styles['c-modal-illu-header'] },
            animatedHeader.children
          ),
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(styles['c-modal-illu-header--ghost'], animatedHeader.attributes.activeClassName, (0, _defineProperty3.default)({}, styles['is-active'], displayGhostHeader))
            },
            animatedHeader.children
          )
        ),
        childrenToRender
      );
    }
  }]);
  return ModalContent;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.UNSAFE_componentWillUpdate = function (nextProps) {
    var children = nextProps.children;

    _this5.refreshComputedParts(children);
  };

  this.handleScroll = function () {
    if (!_this5.contentHeader) return;
    var headerHeight = _this5.headerHeight;

    if (!headerHeight && _this5.contentHeader.clientHeight) {
      _this5.headerHeight = _this5.contentHeader.clientHeight;
      return;
    }
    if (!_this5.state.displayGhostHeader && _this5.scrollingContent.scrollTop > headerHeight - 20) {
      _this5.setState(function () {
        return { displayGhostHeader: true };
      });
    } else if (_this5.state.displayGhostHeader && _this5.scrollingContent.scrollTop < headerHeight - 20) {
      _this5.setState(function () {
        return { displayGhostHeader: false };
      });
    }
  };
};

var ModalDescription = ModalContent;

var ModalSection = function ModalSection(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(styles['c-modal-content'], styles['c-modal-section'], className)
    },
    children
  );
};

var ModalBrandedHeader = function ModalBrandedHeader(_ref2) {
  var logo = _ref2.logo,
      bg = _ref2.bg,
      className = _ref2.className,
      _ref2$style = _ref2.style,
      style = _ref2$style === undefined ? {} : _ref2$style;
  return _react2.default.createElement(
    'h2',
    {
      className: (0, _classnames2.default)(styles['c-modal-header--branded'], className),
      style: Object.assign({ background: bg }, style)
    },
    _react2.default.createElement('img', { src: logo, alt: '' })
  );
};

var ModalHeader = function ModalHeader(_ref3) {
  var title = _ref3.title,
      children = _ref3.children,
      className = _ref3.className,
      appIcon = _ref3.appIcon,
      appName = _ref3.appName,
      appEditor = _ref3.appEditor,
      style = _ref3.style,
      id = _ref3.id;

  var isTitle = typeof children === 'string';
  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(styles['c-modal-header'], className),
      style: style,
      id: id,
      tabIndex: '-1'
    },
    title && _react2.default.createElement(
      'h2',
      null,
      title
    ),
    isTitle ? _react2.default.createElement(
      'h2',
      null,
      children
    ) : children,
    appName && _react2.default.createElement(
      'h2',
      { className: styles['c-modal-app'] },
      appIcon && _react2.default.createElement('img', { className: styles['c-modal-app-icon'], src: appIcon }),
      appEditor && _react2.default.createElement(
        'span',
        { className: styles['c-app-editor'] },
        appEditor,
        '\xA0'
      ),
      appName
    )
  );
};

var ModalTitle = function ModalTitle(props) {
  console.log('ModalTitle is a deprecated component, use ModalHeader instead');
  return _react2.default.createElement(ModalHeader, props);
};

var ModalCross = function ModalCross(_ref4) {
  var onClick = _ref4.onClick,
      color = _ref4.color,
      className = _ref4.className;
  return _react2.default.createElement(
    _Button.Button,
    {
      theme: 'close',
      className: (0, _classnames2.default)(styles['c-modal-close'], className),
      onClick: onClick,
      extension: 'narrow',
      type: 'button',
      label: 'Close',
      iconOnly: true
    },
    _react2.default.createElement(_Icon2.default, {
      icon: 'cross',
      width: '24',
      height: '24',
      color: color || _palette2.default['coolGrey']
    })
  );
};

var ModalFooter = function ModalFooter(_ref5) {
  var children = _ref5.children,
      className = _ref5.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['c-modal-footer'], className) },
    children
  );
};

var ModalButtons = function ModalButtons(_ref6) {
  var secondaryText = _ref6.secondaryText,
      secondaryAction = _ref6.secondaryAction,
      secondaryType = _ref6.secondaryType,
      primaryText = _ref6.primaryText,
      primaryAction = _ref6.primaryAction,
      primaryType = _ref6.primaryType,
      children = _ref6.children,
      className = _ref6.className;
  return _react2.default.createElement(
    'div',
    { className: (0, _classnames2.default)(styles['c-modal-footer--button'], className) },
    children,
    secondaryText && secondaryAction && _react2.default.createElement(_Button.Button, {
      theme: secondaryType,
      onClick: secondaryAction,
      label: secondaryText
    }),
    primaryText && primaryAction && _react2.default.createElement(_Button.Button, {
      theme: primaryType,
      onClick: primaryAction,
      label: primaryText
    })
  );
};

var Modal = function (_Component3) {
  (0, _inherits3.default)(Modal, _Component3);

  function Modal(props) {
    (0, _classCallCheck3.default)(this, Modal);

    var _this4 = (0, _possibleConstructorReturn3.default)(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this4.handleOutsideClick = function (e) {
      if (e.target === e.currentTarget) _this4.props.dismissAction();
    };

    _this4.titleID = (0, _uniqueId2.default)('modal_');
    return _this4;
  }

  (0, _createClass3.default)(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.title) {
        console.warn('If your modal has not label you should add an invisible one with `aria-label` props for a11y purposes.');
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _cx3;

      var _props = this.props,
          children = _props.children,
          description = _props.description,
          title = _props.title,
          closable = _props.closable,
          dismissAction = _props.dismissAction,
          overflowHidden = _props.overflowHidden,
          className = _props.className,
          closeBtnClassName = _props.closeBtnClassName,
          closeBtnColor = _props.closeBtnColor,
          into = _props.into,
          size = _props.size,
          height = _props.height,
          width = _props.width,
          spacing = _props.spacing,
          mobileFullscreen = _props.mobileFullscreen,
          overlayClassName = _props.overlayClassName,
          wrapperClassName = _props.wrapperClassName,
          primaryText = _props.primaryText,
          primaryAction = _props.primaryAction,
          primaryType = _props.primaryType,
          secondaryText = _props.secondaryText,
          secondaryAction = _props.secondaryAction,
          secondaryType = _props.secondaryType,
          restProps = (0, _objectWithoutProperties3.default)(_props, ['children', 'description', 'title', 'closable', 'dismissAction', 'overflowHidden', 'className', 'closeBtnClassName', 'closeBtnColor', 'into', 'size', 'height', 'width', 'spacing', 'mobileFullscreen', 'overlayClassName', 'wrapperClassName', 'primaryText', 'primaryAction', 'primaryType', 'secondaryText', 'secondaryAction', 'secondaryType']);
      var titleID = this.titleID;

      var style = Object.assign({}, height && { height: height }, width && { width: width });
      var maybeWrapInPortal = function maybeWrapInPortal(children) {
        return into ? _react2.default.createElement(
          _Portal2.default,
          { into: into },
          children
        ) : children;
      };
      return maybeWrapInPortal(_react2.default.createElement(
        'div',
        { className: styles['c-modal-container'] },
        _react2.default.createElement(
          _Overlay2.default,
          {
            onEscape: closable && dismissAction,
            className: overlayClassName
          },
          _react2.default.createElement(
            'div',
            {
              className: (0, _classnames2.default)(styles['c-modal-wrapper'], (0, _defineProperty3.default)({}, styles['c-modal-wrapper--fullscreen'], mobileFullscreen), wrapperClassName),
              style: style,
              onClick: closable && this.handleOutsideClick
            },
            _react2.default.createElement(
              'div',
              (0, _extends3.default)({
                className: (0, _classnames2.default)(styles['c-modal'], styles['c-modal--' + size], className, (_cx3 = {}, (0, _defineProperty3.default)(_cx3, styles['c-modal--overflowHidden'], overflowHidden), (0, _defineProperty3.default)(_cx3, styles['c-modal--' + spacing + '-spacing'], spacing), (0, _defineProperty3.default)(_cx3, styles['c-modal--fullscreen'], mobileFullscreen), (0, _defineProperty3.default)(_cx3, styles['c-modal--closable'], closable), _cx3)),
                role: 'dialog',
                'aria-modal': 'true',
                'aria-labelledby': title ? titleID : null
              }, restProps),
              closable && _react2.default.createElement(ModalCross, {
                className: (0, _classnames2.default)(closeBtnClassName, (0, _defineProperty3.default)({}, styles['c-modal-close--notitle'], !title)),
                onClick: dismissAction,
                color: closeBtnColor
              }),
              title && _react2.default.createElement(ModalHeader, { title: title, id: titleID }),
              description && _react2.default.createElement(
                ModalDescription,
                null,
                description
              ),
              children,
              primaryText && primaryAction || secondaryText && secondaryAction ? _react2.default.createElement(
                ModalFooter,
                null,
                _react2.default.createElement(ModalButtons, {
                  primaryText: primaryText,
                  primaryAction: primaryAction,
                  primaryType: primaryType,
                  secondaryText: secondaryText,
                  secondaryAction: secondaryAction,
                  secondaryType: secondaryType
                })
              ) : null
            )
          )
        )
      ));
    }
  }]);
  return Modal;
}(_react.Component);

Modal.propTypes = {
  /** Modal title */
  title: _propTypes2.default.node,
  /** Content for simple modals */
  description: _propTypes2.default.node,
  /** Secondary button type */
  secondaryType: _propTypes2.default.string,
  /** Secondary button text */
  secondaryText: _propTypes2.default.string,
  /** Secondary button callback */
  secondaryAction: _propTypes2.default.func,
  /** Primary button type */
  primaryType: _propTypes2.default.string,
  /** Primary button text */
  primaryText: _propTypes2.default.string,
  /** Primary button callback */
  primaryAction: _propTypes2.default.func,
  /** Display the cross and enable click outside and escape key to close */
  closable: _propTypes2.default.bool,
  /** Use overflowHidden when your content may overflow of your modal */
  overflowHidden: _propTypes2.default.bool,
  /** `className` used on the modal, useful if you want to custom its CSS */
  className: _propTypes2.default.string,
  /** `className` used on the cross, useful if you want to custom its CSS */
  closeBtnClassName: _propTypes2.default.string,
  /** `closeBtnColor` to overwrite the default color of the cross button */
  closeBtnColor: _propTypes2.default.string,
  /** If has a value, the modal will be rendered inside a portal and its value will be passed to Portal
   to control the rendering destination of the Modal */
  into: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large', 'xlarge', 'xxlarge']),
  height: _propTypes2.default.string,
  width: _propTypes2.default.string,
  spacing: _propTypes2.default.oneOf(['small', 'large']),
  /** If you want your modal taking all the screen on mobile */
  mobileFullscreen: _propTypes2.default.bool,
  /** className to apply to Overlay component */
  overlayClassName: _propTypes2.default.string,
  /** className to apply to wrapper element */
  wrapperClassName: _propTypes2.default.string
};

Modal.defaultProps = {
  primaryType: 'regular',
  secondaryType: 'secondary',
  closable: true,
  overflowHidden: false,
  size: 'small',
  mobileFullscreen: false
};

ModalBrandedHeader.propTypes = {
  /** `bg` can be any type of color Hexa, RGB(A), HSL(A), gradient… anything that CSS allows for a color really */
  bg: _propTypes2.default.string.isRequired,
  /** `logo` should be a path to any type of image file supported by browsers */
  logo: _propTypes2.default.string.isRequired
};

ModalHeader.propTypes = {
  appIcon: _propTypes2.default.string,
  appEditor: _propTypes2.default.string,
  appName: _propTypes2.default.string
};

ModalContent.propTypes = {
  iconSrc: _propTypes2.default.node,
  iconDest: _propTypes2.default.node
};

var EnhancedModal = (0, _migrateProps2.default)([{ src: 'withCross', dest: 'closable' }, // withCross -> closable
{ src: 'crossClassName', dest: 'closeBtnClassName' }, // crossClassName -> closeBtnClassName
{ src: 'crossColor', dest: 'closeBtnColor' }, // crossColor -> closeBtnColor
{
  fn: function fn(props) {
    var msg = null;
    if (!props.into) {
      msg = 'In the future, `into` default value will be "body" : Modals will be rendered inside a <Portal />. Try to render your Modal with into=`body`';
    }
    return [props, msg];
  }
}, {
  fn: function fn(props) {
    var newProps = void 0;
    if (props.secondaryAction && !props.dismissAction) {
      newProps = Object.assign({}, props);
      newProps.dismissAction = props.secondaryAction;
      var msg = 'In the future, `secondaryAction` will not be bound to closing actions (clicking on cross, clicking outside), please use `dismissAction` for that';
      return [newProps, msg];
    } else {
      return [props, null];
    }
  }
}])(Modal);

EnhancedModal.propTypes = Modal.propTypes;
EnhancedModal.defaultProps = Modal.defaultProps;

// to be able to use them in Styleguidist
Object.assign(EnhancedModal, {
  ModalContent: ModalContent,
  ModalSection: ModalSection,
  ModalFooter: ModalFooter,
  ModalHeader: ModalHeader,
  AnimatedContentHeader: AnimatedContentHeader,
  ModalBrandedHeader: ModalBrandedHeader,
  ModalDescription: ModalDescription
});

exports.default = EnhancedModal;
exports.ModalContent = ModalContent;
exports.ModalSection = ModalSection;
exports.ModalFooter = ModalFooter;
exports.ModalHeader = ModalHeader;
exports.AnimatedContentHeader = AnimatedContentHeader;
exports.ModalTitle = ModalTitle;
exports.ModalButtons = ModalButtons;
exports.ModalBrandedHeader = ModalBrandedHeader;
exports.ModalDescription = ModalDescription;