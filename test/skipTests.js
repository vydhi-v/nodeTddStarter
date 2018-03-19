var chai = require('chai');
var expect = chai.expect;
var testArray = [1,2,3];
describe('Array', function() {
    describe('#indexOf()', function() {     
      it.skip('should return -1 when the value is not present', function() {
        expect(testArray.indexOf(5)).to.equal(-1);   
      });
      it('should return index when the value is present', function() {
        expect(testArray.indexOf(2)).to.not.equal(-1);   
      });
    });
});
  