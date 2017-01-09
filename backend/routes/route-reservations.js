const router = require('express').Router();
const models = require('../models');

//GET ALL RESERVATION
router.route('/reservation')
	.get((req,res)=>{
		models.Reservation.findAll()
	.then((restaurantInfo)=>{
		res.send(restaurantInfo);
	})
	.catch((err)=>{
		res.status(500).send('Error. Check api routes.');
		console.log('Error=>', err);
	})
	});

//GET ONE RESERVATION
router.route('/reservation/:userID/:opentableID')
	.get((req,res)=>{
		models.Reservation.findAll({
			include: [{
				model: models.User,
				where: {id: req.params.userID}
			}],
			include: [{
				model: models.OpenTable,
				where: {id: req.params.opentableID}
			}]
		})
	.then((restaurantInfo)=>{
		res.send(restaurantInfo);
	})
	.catch((err)=>{
		res.status(500).send('Error. Check api routes.');
		console.log('Error=>', err);
	})
	});

//POST RESERVATIONS
router.route('/reservation/:userID/:opentableID')
	.post((req,res)=>{
		models.Reservation.create({
			OpenTableId: req.params.opentableID,
			UserId: req.params.userID
		})
	.then((restaurantInfo)=>{
		res.send(restaurantInfo);
	})
	.catch((err)=>{
		res.status(500).send('Error. Check api routes.');
		console.log('Error=>', err);
	})
	});

module.exports = router;