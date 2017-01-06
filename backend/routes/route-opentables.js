const router = require('express').Router();
const OpenTable = require('../models').OpenTable;
const moment = require("moment")

///////////////////////
///ROUTES//& FUNCTION//
///////////////////////
router.route('/opentable')
	.get((req,res) => {
		OpenTable.findAll()
			.then(data => res.send(data))
			.catch(error =>  res.status(500).send('Something broke when getting!'))
	})
	.post((req,res) => {
			let newDate 
			let newTime;
			let date = req.body.date
			let time = req.body.time
			let momentDate = (date) => {
				newDate = moment(date).format("YYYY M D")
				console.log(newDate)
				return newDate
			}
			momentDate(newDate);
		OpenTable.create({
			date: newDate ,
			time: req.body.time
		})
		.then(data => res.send(data))
		.catch(error => {
		 res.status(500).send('Something broke when creating!')
		 console.log(error)
		})	
	})
	.put((req, res) => {
		OpenTable.update({
			date: req.body.date,
			time:req.body.time
		})
		.then(data => res.send(data))
		.catch(error =>  res.status(500).send('Something broke when updating!'))
	})

//////////////
//EXPORTS/////
//////////////
module.exports = router;