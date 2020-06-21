/* eslint no-shadow: 0 */
/* eslint no-underscore-dangle: 0 */
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = require('chai');
const Location = require('../src/models/Location');
const index = require('../src/index');

chai.use(require('chai-fuzzy'));

chai.use(chaiHttp);
chai.should();

describe('Locations', () => {
  describe('/locations', () => {
    it('It should return all locations', (done) => {
      chai.request(index)
        .get('/locations')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.forEach((location) => {
            expect(location).to.have.property('_id');
            expect(location).to.have.property('area');
            expect(location).to.have.property('room');
          });
        });
      done();
    });
  });
  describe('/locations/:objectId', () => {
    it('It should return 1 location', (done) => {
      const location = new Location({ area: 'Location area test', room: 'Location room test' });
      location.save((err, location) => {
        chai.request(index)
          .get(`/locations/${location._id}`)
          .end((err, res) => {
            res.should.have.status(200);
            location.should.be.an('object');
            expect(location).to.have.property('_id');
            expect(location).to.have.property('area').equals('Location area test');
            expect(location).to.have.property('room').equals('Location room test');
          });
        done();
      });
    });
  });
});
