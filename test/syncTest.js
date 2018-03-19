var chai = require('chai');
var expect = chai.expect;
var testArray = [1,2,3];
describe('Array', function() {
    describe('#indexOf()', function() {
      //no callback (done call) when testing a synchronous function  
      it('should return -1 when the value is not present', function() {
        expect(testArray.indexOf(5)).to.equal(-1);   
      });
    });
});
  