'use strict'
var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../server');
var OpenTable = require('../backend/models').OpenTable;
var chai = require('chai')
var chaiHttp = require('chai-http');

var moment = require("moment")
chai.use(chaiHttp);

describe('Opentable test', () => {
	xit('should GET reservations', (done) => {
		supertest(server)
		.get("/api/opentable")
		.end((error, response) => {
			// console.log(response.body.length)
			// console.log(response.body)
			expect(response.body).be.a('array')
			// expect(response.body.length).equal(25)
			done()
		})
	})
	xit('should POST reservations', (done) => {
		supertest(server)
		.post("/api/opentable")
		.send({date:"2011, 3, 23", time:"11:13:08"})
		.end((error, response) => {
			expect(response.body).exist
			done()
		})
	})
		xit('should PUT reservations', (done) => {
				let resultdate = moment("2011, 4, 23").format("YYYY M DD")
				chai.request(server)
				.get("/api/opentable")
				.end((error,response) => {
					chai.request(server)
						.put('/api/opentable/' + response.body[0].id)
						.send({date:"2011, 4, 23", time:"11:13:08"})
						.end((error,response) => {
						expect(response).have.status(200);
						expect(response.body).be.a('object')
	        	expect(moment(response.body.date).format("YYYY M DD")).equal(resultdate);
	        	done();
						})
					})
			})
})
