let expect = require('chai').expect;
let supertest = require('supertest');
let server = require('../server');
let Restaurant = require('../backend/models').Restaurant;

describe('Restaurant tests', () => {
  var restaurant = [
    {name: 'Restaurant1' , address: 'address1', state: 'state1', lat: '1122334', lng: '1122334', city: 'city1', zipcode: '1234', price: 'price1', phone_number: '123', cuisine: 'cuisine1', img_url: 'imgURl1', website_url:'websiteURl1'},
    {name: 'Restaurant2' , address: 'address2', state: 'state2', lat: '1122334', lng: '1122334', city: 'city2', zipcode: '123', price: 'price2', phone_number: '123', cuisine: 'cuisine2', img_url: 'imgURl2', website_url:'websiteURl2'},
    {name: 'Restaurant3' , address: 'address3', state: 'state3', lat: '1122334', lng: '1122334', city: 'city3', zipcode: '123', price: 'price3', phone_number: '123', cuisine: 'cuisine3', img_url: 'imgURl3', website_url:'websiteURl3'}
  ];
// you can use 'before' to seed your database with data before your tests
// you only need one 'before' statement
// theres also a 'beforeEach' method if you want a function to run before each of your tests, individually
  before(() => {
    return Restaurant.sync({force: true})
    .then(() => Restaurant.bulkCreate(restaurant))
    .catch((err) => console.log('DB Err!', err));
  });
it(`'/api/restaurant' should respond with restaurant info!`, (done) => {
	supertest(server)
		.get('/api/restaurant')
		.end((err, res) => {
			// res.should.have.status(200);
            // res.body.should.be.a('array');
	        expect(res.body[0].name).to.eql('Restaurant1');
	        // expect(res.body[1].name).to.eql('Restaurant2');
	        // expect(res.body[2].name).to.eql('Restaurant3');
	        done();
      	})
  });



it(`'/api/restaurant' posts a new user`, (done)=>{
	supertest(server)
	  .post('/api/restaurant')
	  .type('form')
	  .send({name: 'Restaurant14' , address: 'address14', state: 'state14', lat: '1234', lng: '1234', city: 'city14', zipcode: '1234', price: 'price14', phone_number: '1234', cuisine: 'cuisine14', img_url: 'imgURl14', website_url:'websiteURl14'})
	  .end((err, res)=>{ 
	  	// expect(res).have.status(200);
        expect(res.body).be.a('object');
        expect(res.body.errors).have.property('state');
	    expect(res.body).exist
	    done();
	  })
	})
});

