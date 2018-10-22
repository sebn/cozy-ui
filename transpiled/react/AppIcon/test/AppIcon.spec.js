'use strict';
/* eslint-env jest */

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('AppIcon component', function () {
  var app = {
    links: {
      icon: 'apps/test/icon'
    }
  };

  var successFetchIcon = jest.fn().mockResolvedValue('data://test-url');

  it('renders default when fetch error occurs', function () {
    var failureFetchIcon = jest.fn().mockImplementation(function () {
      throw new Error('Mocked error');
    });
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { app: app, fetchIcon: failureFetchIcon })).getElement();
    expect(component).toMatchSnapshot();
  });

  it('renders as loading', function () {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { app: app, fetchIcon: successFetchIcon })).getElement();
    expect(component).toMatchSnapshot();
  });

  it('renders app icon after fetching', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var successFetchPromise, wrapper, component;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            successFetchPromise = successFetchIcon();
            wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { app: app, fetchIcon: function fetchIcon() {
                return successFetchPromise;
              } }));
            _context.next = 4;
            return successFetchPromise;

          case 4:
            wrapper.update();
            component = wrapper.getElement();

            expect(component).toMatchSnapshot();

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));
});