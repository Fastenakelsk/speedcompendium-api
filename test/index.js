const chai = require('chai');
const chaiHttp = require('chai-http');

const index = require('../src/index');

chai.use(require('chai-fuzzy'));

chai.use(chaiHttp);
chai.should();

describe('APP', () => {
  describe('/GET API version', () => {
    it('It should return the API version', (done) => {
      chai.request(index)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.be.a('String');
        });
      done();
    });
  });
});
