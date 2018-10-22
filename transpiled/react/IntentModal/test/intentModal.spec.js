'use strict';
/* eslint-env jest */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _IntentModal = require('../IntentModal');

var _IntentModal2 = _interopRequireDefault(_IntentModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('IntentModal component', function () {
  beforeEach(function () {
    jest.resetModules();
  });

  it('renders as expected', function () {
    var component = shallow(_react2.default.createElement(_IntentModal2.default, {
      action: 'ANY',
      closable: true,
      create: jest.fn().mockName('createMock'),
      doctype: 'io.cozy.whatever',
      dismissAction: jest.fn().mockName('onDismissMock'),
      onComplete: jest.fn().mockName('onCompleteMock'),
      onDismiss: jest.fn().mockName('dismissActionMock'),
      onError: jest.fn().mockName('onErrorMock'),
      options: { key: 'value' },
      overflowHidden: true
    })).getElement();

    expect(component).toMatchSnapshot();
  });
});