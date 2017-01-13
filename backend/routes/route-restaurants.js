const router = require('express').Router();
const models = require('../models');

//To enter a post, write i

//find by id
router.route('/restaurant/:RestaurantId')
	.get((req,res)=> {
		models.Restaurant.findOne({
			where:{
				id: req.params.RestaurantId
			}
		})
			.then(data => res.send(data))
			.catch(error => console.log(error))
	})

router.route('/restaurant')
	.get((req,res)=>{
		models.Restaurant.findAll()
	.then((restaurantInfo)=>{
		res.send(restaurantInfo)
	})
	.catch((err)=>{
		res.status(500).send('Error. Check api routes.')
		console.log('Error=>', err)
	})
	})

//POST
	//EXAMPLE:
	    // name: 
	    // address: 
	    // state: 
	    // lat: 
	    // lng: 
	    // city: 
	    // zipcode: 
	    // price: 
	    // phone_number: 
	    // cuisine: 
	    // img_url: 
	    // website_url: 
router.route('/restaurant')
	.post((req,res)=>{
		models.Restaurant.create({
			name: req.body.name,
		    address: req.body.address,
		    state: req.body.state,
		    lat: req.body.lat,
		    lng: req.body.lng,
		    city: req.body.city,
		    zipcode: req.body.zipcode,
		    price: req.body.price,
		    phone_number: req.body.phone_number,
		    cuisine: req.body.cuisine,
		    img_url: req.body.img_url,
		    website_url: req.body.website_url
		})
	.then((restaurantInfo)=>{
		res.send(restaurantInfo)
	})
	.catch((err)=>{
		res.status(500).send('Error. Check api routes.')
		console.log('Error=>', err)
	})
	})

module.exports = router;
