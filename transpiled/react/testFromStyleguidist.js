'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Preview = require('react-styleguidist/lib/rsg-components/Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _chunkify = require('react-styleguidist/loaders/utils/chunkify');

var _chunkify2 = _interopRequireDefault(_chunkify);

var _pretty = require('pretty');

var _pretty2 = _interopRequireDefault(_pretty);

var _ActionMenu = require('./ActionMenu');

var _ActionMenu2 = _interopRequireDefault(_ActionMenu);

var _Alerter = require('./Alerter');

var _Alerter2 = _interopRequireDefault(_Alerter);

var _Avatar = require('./Avatar');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Badge = require('./Badge');

var _Badge2 = _interopRequireDefault(_Badge);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _ButtonAction = require('./ButtonAction');

var _ButtonAction2 = _interopRequireDefault(_ButtonAction);

var _Checkbox = require('./Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _Hero = require('./Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _I18n = require('./I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _IntentHeader = require('./IntentHeader');

var _IntentHeader2 = _interopRequireDefault(_IntentHeader);

var _IntentIframe = require('./IntentIframe');

var _IntentIframe2 = _interopRequireDefault(_IntentIframe);

var _IntentModal = require('./IntentModal');

var _IntentModal2 = _interopRequireDefault(_IntentModal);

var _IntentOpener = require('./IntentOpener');

var _IntentOpener2 = _interopRequireDefault(_IntentOpener);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _ListItemText = require('./ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Media = require('./Media');

var _Media2 = _interopRequireDefault(_Media);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _MidEllipsis = require('./MidEllipsis');

var _MidEllipsis2 = _interopRequireDefault(_MidEllipsis);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _SelectBox = require('./SelectBox');

var _SelectBox2 = _interopRequireDefault(_SelectBox);

var _SelectionBar = require('./SelectionBar');

var _SelectionBar2 = _interopRequireDefault(_SelectionBar);

var _Sidebar = require('./Sidebar');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Tabs = require('./Tabs');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _Text = require('./Text');

var _Text2 = _interopRequireDefault(_Text);

var _Textarea = require('./Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _Toggle = require('./Toggle');

var _Toggle2 = _interopRequireDefault(_Toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mock error otherwise there are errors with the createStylesheet function


/*
  Styleguidist does some black magic with AST to automatically provide
  components to the code in the README ([examples-loader]).

  We manually do that below by importing each components and binding
  them to the function that executes the README code.

  examples-loader: https://github.com/styleguidist/react-styleguidist/blob/master/loaders/examples-loader.js
 */
jest.mock('react-styleguidist/lib/rsg-components/PlaygroundError', function () {
  return function (props) {
    return _react2.default.createElement(
      'div',
      null,
      props.message
    );
  };
});

var testFromStyleguidist = function testFromStyleguidist(name, markdown, require) {
  var evalInContext = function evalInContext(a) {
    return (
      // eslint-disable-next-line no-new-func
      new Function('require', 'ActionMenu', 'Alerter', 'Avatar', 'Badge', 'Button', 'ButtonAction', 'Checkbox', 'Field', 'Hero', 'I18n', 'Icon', 'Input', 'IntentHeader', 'IntentIframe', 'IntentModal', 'IntentOpener', 'Label', 'ListItemText', 'Media', 'Menu', 'MidEllipsis', 'Modal', 'Nav', 'Overlay', 'Panel', 'Radio', 'SelectBox', 'SelectionBar', 'Sidebar', 'Spinner', 'Tabs', 'Text', 'Textarea', 'Toggle', 'isTesting', 'state', 'setState', 'const React = require("react");\n      ' + a).bind(null, require, _ActionMenu2.default, _Alerter2.default, _Avatar2.default, _Badge2.default, _Button2.default, _ButtonAction2.default, _Checkbox2.default, _Field2.default, _Hero2.default, _I18n2.default, _Icon2.default, _Input2.default, _IntentHeader2.default, _IntentIframe2.default, _IntentModal2.default, _IntentOpener2.default, _Label2.default, _ListItemText2.default, _Media2.default, _Menu2.default, _MidEllipsis2.default, _Modal2.default, _Nav2.default, _Overlay2.default, _Panel2.default, _Radio2.default, _SelectBox2.default, _SelectionBar2.default, _Sidebar2.default, _Spinner2.default, _Tabs2.default, _Text2.default, _Textarea2.default, _Toggle2.default, true)
    );
  };

  var options = {
    context: {
      config: {
        compilerConfig: {
          objectAssign: 'Object.assign'
        }
      }
    }
  };

  describe(name, function () {
    it('should render examples', function (done) {
      var doneCounter = 0;
      var Readme = _fs2.default.readFileSync(markdown);
      var chunks = (0, _chunkify2.default)(Readme);
      var codes = chunks.filter(function (x) {
        return x.type === 'code';
      });
      var rendered = [];
      var finish = function finish() {
        rendered.forEach(function (rendered) {
          expect(rendered).toMatchSnapshot(name);
        });
        done();
      };
      codes.forEach(function (code) {
        var root = mount(_react2.default.createElement(_Preview2.default, { code: code.content, evalInContext: evalInContext }), options);
        requestAnimationFrame(function () {
          root.update();
          rendered.push((0, _pretty2.default)(root.html()));
          doneCounter++;
          if (doneCounter === codes.length) {
            finish();
          }
        });
      });
    });
  });
};

exports.default = testFromStyleguidist;