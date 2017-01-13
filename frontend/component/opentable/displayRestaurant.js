import React from 'react';
import store from '../../store/store';
import axios from 'axios'


const DisplayRestaurant = React.createClass({
	render(){

		return(
				<div id='siteContainer-displayRes'>
					<div id="secondContainer">

					<div id='restaurantContainer-name'>
						<div id="restaurant-name"><h1>{this.props.displayState.data ? this.props.displayState.data.name : 'loading...'}</h1></div> 
					</div>

						<br/>

					<div id="restaurantContainer-location">
						<div className="bold">Restaurant</div>
						<div id='restaurant-address'>{this.props.displayState.data ? this.props.displayState.data.address : 'loading...'}</div> 
						<br/>
						<div className="bold">Address</div>
						<div id='restaurant-city'>{this.props.displayState.data ? this.props.displayState.data.city : 'loading...'}</div> 
						<div id='restaurant-zipcode'>{this.props.displayState.data ? this.props.displayState.data.zipcode : 'loading...'}</div> 
					</div>	

						<br/>

					<div id='restaurantContainer-info'>
						<div className="bold">Type</div>
						<div id='restaurant-cuisine'>{this.props.displayState.data ? this.props.displayState.data.cuisine : 'loading...'}</div> 
						<br/>
						<div className="bold">Price</div>
						<div id='restaurant-price'>{this.props.displayState.data ? this.props.displayState.data.price : 'loading...'}</div> 
						
 					</div>

 					</div>
				</div>
			)
	}
})

export default DisplayRestaurant;