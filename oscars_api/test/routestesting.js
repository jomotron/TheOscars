var assert = require('assert');
let server = require("../app");
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
//mocha testing
/*describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});*/
//chai test of
describe('Oscar API Testing', () => {
  describe('Testing ceramony GET route', () => {
    it('Should return a list of distinct categories', (done) => {
      chai.request(server)
        .get("/search/categories")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.not.be.eq(0);
          done();
        });
    });
  });
  describe('Testing ActorName GET route', () => {
    it('Should return John Wayne', (done) => {
      chai.request(server)
        .get("/name/actor/John Wayne")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.not.be.eq(0);
          var compare = JSON.parse(response.text);
          compare[0].name.should.equal("John Wayne");
          done();
        });
    });
  });
  describe('Testing FilmYear GET route', () => {
    it('Should return 2012 film year', (done) => {
      chai.request(server)
        .get("/year/film/2012")
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.not.be.eq(0);
          var compare = JSON.parse(response.text);
          compare[0].year_film.should.equal("2012");
          done();
        });
    });
  });
}); 

