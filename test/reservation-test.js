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
			expect(res.body[0]).to.have.property('state');
			expect(res.body[0].name).to.eql('Restaurant14');
			done();
      	})
  });

xit(`'/api/reservation' should post a new user`, (done)=>{
	supertest(server)
		.post('/api/reservation')
		.type('form')
		.send({name: 'Restaurant16' , address: 'address14', state: 'state14', lat: '1234', lng: '1234', city: 'city14', zipcode: '1234', price: 'price14', phone_number: '1234', cuisine: 'cuisine14', img_url: 'imgURl14', website_url:'websiteURl14'})
		.end((err, res)=>{
			expect(res.body).exist
			expect(res.body).to.be.a('object');
			expect(res).to.have.status(200);
			expect(res.body).to.have.property('state');
			done();
		})
	})
});