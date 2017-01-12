import React from 'react';
import store from '../../store/store';
import axios from 'axios'

const DisplayRestaurant = React.createClass({
	componentDidMount(){
		axios.get('/api/restaurant/:RestaurantId')
			.then((data) => {
				
			})
	},
	render(){
		return(
				<div>
					Restaurants
				</div>
			)
	}
})

export default DisplayRestaurant;