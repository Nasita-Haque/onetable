let expect = require('chai').expect;
let supertest = require('supertest');
let server = require('../server');
let Restaurant = require('../backend/models').Restaurant;

describe('Restaurant tests', () => {
  var users = [
    {name: 'Restaurant1' , address: 'address1', state: 'state1', lat: 'lat1', lng: 'lng1', city: 'city1', zipcode: 'zipcode1', price: 'price1', phone_number: 'phonenumber1', cuisine: 'cuisine1', img_url: 'imgURl1', website_url:'websiteURl1'},
    {name: 'Restaurant2' , address: 'address2', state: 'state2', lat: 'lat2', lng: 'lng2', city: 'city2', zipcode: 'zipcode2', price: 'price2', phone_number: 'phonenumber2', cuisine: 'cuisine2', img_url: 'imgURl2', website_url:'websiteURl2'},
    {name: 'Restaurant3' , address: 'address3', state: 'state3', lat: 'lat3', lng: 'lng3', city: 'city3', zipcode: 'zipcode3', price: 'price3', phone_number: 'phonenumber3', cuisine: 'cuisine3', img_url: 'imgURl3', website_url:'websiteURl3'}
  ];
// you can use 'before' to seed your database with data before your tests
// you only need one 'before' statement
// theres also a 'beforeEach' method if you want a function to run before each of your tests, individually
  before(() => {
    return User.sync({force: true})
    .then(() => User.bulkCreate(users))
    .catch((err) => console.log('DB Err!', err));
  });


it(`'/restaurant' should respond with restaurant info!`, (done) => {
	supertest(server)
		.get('/restaurant')
		.end((err, res) => {
	        expect(res.body[0].name).to.eql('Restaurant1');
	        expect(res.body[1].name).to.eql('Restaurant2');
	        expect(res.body[2].name).to.eql('Restaurant3');
	        done();
      	})
  });


it(`'/users' posts a new user`, (done)=>{
	supertest(server)
	  .post('/restaurant')
	  .type('form')
	  .send({name: 'Restaurant14' , address: 'address14', state: 'state14', lat: 'lat14', lng: 'lng14', city: 'city14', zipcode: 'zipcode14', price: 'price14', phone_number: 'phonenumber14', cuisine: 'cuisine14', img_url: 'imgURl14', website_url:'websiteURl14'})
	  .end((err, res)=>{
	    expect(res.body).exist
	    done();
	  })
	})
});

