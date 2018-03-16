var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');

var expect = chai.expect;

chai.use(chaiHttp);

describe('App', function() {
  describe('/get', function() {
    it('responds with status 200 and returns key value', function(done) {
      chai.request(app)
        .post('/set?somekey=somevalue')
        .then(function() {
          chai.request(app)
            .get('/get?key=somekey')
            .end(function(err, res) {
              expect(res).to.have.status(200);
              expect(res.text).to.equal('somevalue');
              done();
            });
        });
    });
  });
});



 