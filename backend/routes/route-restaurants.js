const router = require('express').Router();
const sequelize = require('../models/index.js');
const models = require('../models');

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


router.route('/restaurant')
	.post((req,res)=>{
		models.Restaurant.Create({
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
