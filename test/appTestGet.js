var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

var expect = chai.expect;

chai.use(chaiHttp);
//describe() allows logical grouping of tests
//'App' here can be considered a parent group of tests for app.js 
describe('App', function() {
  //before() allows to define a block of actions that can be run before executing one or more tests
  //Can be used to do initial setup that could be used across the entire group of tests - e.g, when using mock-test libraries etc
  //after(), beforeEach(), afterEach() are also supported - these are referred to as 'hooks' in general
  before(function(){ 
    console.log('This is from the before() call');
  });
  //This describe() is specific to one end-point from app.js
  describe('/get', function() {

    //it() allows defining the actual test-case 
    it('responds with status 200 and returns key value', function(done) {
      chai.request(app)
        .post('/set?somekey=somevalue')
        .then(function() {
          chai.request(app)
            .get('/get?key=somekey')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res.text).to.equal('somevalue');
              //From Mocha Documentation -
              //By adding a callback (usually named done) to it(), Mocha will know that it should wait for this function to be called to complete the test. 
              //This callback accepts both an Error instance (or subclass thereof) or a falsy value; anything else will cause a failed test.
              done();
              //VV - using chai-as-promised (or functions that return promises) is widely recommended instead of directly calling done
            });
        });
    });
  });
});



 