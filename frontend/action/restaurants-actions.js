import axios from 'axios';

const restaurants = (data) => ({
	type: "RESTAURANTS",
	data
})

export const fetchRestaurants = () => {
	return (dispatch) => {
		axios.get('api/restaurant')
	  .then((response) => {
			dispatch(restaurants(response.data))
		})
		.catch((err) => {
			throw err
		})
}}
