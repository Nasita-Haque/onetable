'use strict'

var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../server')
var User = require('../backend/models').User



describe('User demo test', () => {
  it(`/user will create a newuser`, (done) => {
    supertest(server)
    .post('/users')
    .send({firstname: 'testname1', lastname: 'testlast1', email: 'test1@gail.com', password: 'pass1'})
    .end((err, res) => {
      expect(res.body).exist
      done()
    })
  })
  var users = [
    {firstname: 'testname1', lastname: 'testlast1', email: 'test1@gail.com', password: 'pass1'},
    {firstname: 'testname2', lastname: 'testlast2', email: 'test2@gail.com', password: 'pass2'},
    {firstname: 'testname3', lastname: 'testlast3', email: 'test2@gail.com', password: 'pass3'}
  ];
  before(() => {
    return User.sync({force: true})
    .then(() => User.bulkCreate(users))
    .catch((err) => console.log('DB Err!', err));
  });



  //example of how to do a test to get all users route
  it(`'/api/users' should respond with all users`, (done) => {
    supertest(server)
      .get('/api/users')
      .end((err, res) => {
        expect(res.body.length).eql(3);
        expect(res.body[0].firstname).equal(users[0].firstname);
        expect(res.body[1].firstname).equal(users[1].firstname);
        expect(res.body[2].firstname).equal(users[2].firstname);
        done();
      })
  })

})
