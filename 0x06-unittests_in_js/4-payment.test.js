const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with type SUM and return 10', () => {
    // Stub the Utils.calculateNumber function to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    
    // Create a spy for console.log
    const consoleLogSpy = sinon.spy(console, 'log');
    
    // Call the function
    sendPaymentRequestToApi(100, 20);
    
    // Verify the stub and spy
    sinon.assert.calledWith(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleLogSpy, 'The total is: 10');
    
    // Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
