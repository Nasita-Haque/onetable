var axios = require('axios');
const Restaurant = require('../models').Restaurant;

// curl -X GET --header "Accept: application/json" --header "user-key: 658841aac4d30aa7a55edff9500832d7" "https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=50"


axios.request({
  url: 'https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city&count=50',
  headers: {
    'user-key': '658841aac4d30aa7a55edff9500832d7'
  }
})
.then((response) => (
     response.data.restaurants.map((restaurant) => (
       {
        name: restaurant.restaurant.name,
        address: restaurant.restaurant.location.address,
        lat: restaurant.restaurant.location.latitude,
        lng: restaurant.restaurant.location.longitude,
        city: restaurant.restaurant.location.city,
        zipcode: restaurant.restaurant.location.zipcode,
        price: restaurant.restaurant.price_range,
        cuisine: restaurant.restaurant.cuisines,
        img_url: restaurant.restaurant.featured_image,
        website_url: restaurant.restaurant.url
      }
    ))
  ))
  .then((restaurants) => {
    Restaurant.bulkCreate(restaurants)
  })
  .catch((err) => {
    if(err) console.error('Seed error!', err);
  });
