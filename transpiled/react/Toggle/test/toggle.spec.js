'use strict';
/* eslint-env jest */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Toggle component', function () {
  it('handles correctly onToggle function', function () {
    var handleOnToggle = jest.fn();
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_2.default, { id: 'mock-toggle-id', onToggle: handleOnToggle }));
    component.find('#mock-toggle-id').simulate('change', { target: { checked: true } });
    expect(handleOnToggle.mock.calls.length).toBe(1);
    expect(handleOnToggle.mock.calls[0][0]).toBe(true);
    component.find('#mock-toggle-id').simulate('change', { target: { checked: false } });
    expect(handleOnToggle.mock.calls.length).toBe(2);
    expect(handleOnToggle.mock.calls[1][0]).toBe(false);
  });
});