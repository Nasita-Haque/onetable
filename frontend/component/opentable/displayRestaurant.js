import React from 'react';
import store from '../../store/store';
import axios from 'axios'


const DisplayRestaurant = React.createClass({
	render(){
		return(
				<div>
					{this.props.displayState.data ? this.props.displayState.data.name : 'loading...'} 
				</div>
			)
	}
})

export default DisplayRestaurant;