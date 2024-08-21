const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy for console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message and be called once for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 120');
    sinon.assert.calledOnce(consoleLogSpy);
  });

  it('should log the correct message and be called once for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 20');
    sinon.assert.calledOnce(consoleLogSpy);
  });
});
