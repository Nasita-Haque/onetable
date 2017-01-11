import axios from 'axios';

const fetchRestaurants = () => (
	axios.get('api/restaurant')
	  .then((restaurants) => ({
		type: 'restaurants',
		restaurants
	})
));

export default fetchRestaurants;
