var axios = require('axios');
const Restaurant = require('../models').Restaurant;

console.log('Restaurant:', Restaurant)

axios.request({
  url: 'https://developers.zomato.com/api/v2.1/search',
  headers: {
    'user-key': '658841aac4d30aa7a55edff9500832d7'
  }
})
.then((response) => (
     response.data.restaurants.map((restaurant) => (
       {
        name: restaurant.restaurant.name,
        address: restaurant.restaurant.location.address,
        state: restaurant.restaurant.location.state,
        lat: restaurant.restaurant.location.latitude,
        lng: restaurant.restaurant.location.longitude,
        city: restaurant.restaurant.location.city,
        zipcode: restaurant.restaurant.location.zipcode,
        price: restaurant.restaurant.price_range,
        cuisine: restaurant.restaurant.cuisines,
        img_url: restaurant.restaurant.photos_url,
        website_url: restaurant.restaurant.url
      }
    ))
  ))
  .then((restaurants) => {
    // console.log(restaurants)
    Restaurant.bulkCreate(restaurants)
  })
  .catch((err) => {
    if(err) console.error('Seed error!', err);
  });
