import axios from 'axios'

export const fetchRestaurant = (restaurantId) => (dispatch) => {
	axios.get(`/api/restaurant/${restaurantId}`)
		.then(data => dispatch({
			type: "ADD_INFO",
			restaurantInfo: data	
		}))
		.catch(error => console.log(error))
}

