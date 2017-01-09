const OpenTable = require('../models').OpenTable

OpenTable.sync({force:true})
//add the following three reservation to the database:
// loop through and push the bulk object into each restaurant
.then(() => {
	for(var i = 1 ; i < 5; i++){
	OpenTable.bulkCreate([ 
  {date:"2016, 1, 9", time:"15:00:00", restaurantId:i},
  {date:"2016, 1, 9", time:"16:00:00",  restaurantId:i},
  {date:'2016, 1, 9', time:"17:00:00",  restaurantId:i},
	])
	}
})


