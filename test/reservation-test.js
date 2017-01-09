'use strict'

let expect = require('chai').expect;
let supertest = require('supertest');
let server = require('../server');
let Reservation = require('../backend/models').Reservation;
let chai = require('chai');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Reservation tests', () => {

xit(`'/api/reservation' should respond with reservation info!`, (done) => {
	supertest(server)
		.get('/api/reservation')
		.end((err, res) => {
			expect(res).to.have.status(200);
			expect(res.body).to.be.a('array');
			expect(res.body[0]).to.have.property('UserId');
			expect(res.body[0].OpenTableId).to.eql(1);
			done();
      	})
  });

xit(`'/api/reservation' should post a new user`, (done)=>{
	supertest(server)
		.post('/api/reservation/1/1')
		.end((err, res)=>{
			expect(res.body).exist
			expect(res.body).to.be.a('object');
			expect(res).to.have.status(200);
			expect(res.body).to.have.property('OpenTableId');
			done();
		})
	})
});