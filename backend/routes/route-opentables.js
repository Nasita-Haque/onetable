'use strict'

const router = require('express').Router();
const OpenTable = require('../models').OpenTable;
const User = require('../models').User;
const Reservations = require('../models').Reservations;
const Restaurant = require('../models').Restaurant;
const moment = require("moment")

///////////////////////
///ROUTES//& FUNCTION//
///////////////////////
router.route('/opentable')
	///GET///
	.get((req,res) => {
		OpenTable.findAll()
			.then(data => res.send(data))
			.catch(error =>  res.status(500).send('Something broke when getting!'))
	})

// router.route('/opentable/:opentable')
// 	.get((req, res)=>{
// 		OpenTable.findOne({
// 			where: {id: req.params.opentable},
// 			include: [{
// 				model: Restaurant
// 			}]
// 		})
// 	.then((data)=>{
// 		res.send(data);
// 	})
// 	.catch((err)=>{
// 		res.status(500).send('Error. Check api routes.');
// 		console.log('Error=>', err);
// 	})
// 	});

router.route('/opentable/:restaurantID')
	///POST///
	//Example:
		//date: 2017 5 17
		//time: 11:00:00
	.post((req,res) => {
			let newDate
			let momentDate = () => {
				newDate = moment(req.body.date).format("YYYY M D")
				return newDate
			}
			momentDate(newDate);
		OpenTable.create({
			date: newDate ,
			time: req.body.time,
			RestaurantId: req.params.restaurantID
		})
		.then(data => res.send(data))
		.catch(error => {
		 res.status(500).send('Something broke when creating!')
		 console.log(error)
		})
	})

	///PUT///
router.route('/opentable/:id')
	.put((req, res) => {
		OpenTable.update({
			availability:false
		}, {
			where:{
				id:req.body.id
			}
		})
	.then(data => res.status(200))
	.catch(error =>  res.status(500).send('Something broke when updating!'))
})

//////////////
//EXPORTS/////
//////////////
module.exports = router;
