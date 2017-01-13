import {addReservation} from "../../action/opentable-action.js"
import React from 'react'
import store from '../../store/store.js'
import axios from 'axios'
import moment from 'moment'
import DisplayRestaurant from '../../container/displayRestaurant-container.js';
import {fetchRestaurant} from "../../action/display-action"

const Opentable = React.createClass({
	componentDidMount(){
			axios.get(`/api/opentable/${this.props.params.RestaurantId}`)
				.then(data => {
					// console.log(data)
 					let currentData = {};
 					for (var i = 0; i < data.data.length; i++) {
 						currentData[i] = {
 							date:data.data[i].date,
 							time:data.data[i].time,
 							id:data.data[i].id
 						}			
 					}
 					return currentData
				})
				.then(data=> {
					// console.log(data)
					store.dispatch(addReservation(data))
					})
				 .catch(error => console.log(error))
				 //get to populate restaurant info 
				 store.dispatch(fetchRestaurant(this.props.params.RestaurantId))

		},
		createButton(){
			let reservation = this.props.reservation
			let button= [];
				for(var key in reservation){
					button.push(
						<button key={key} 
						onClick={this.handleClick} 
						id={reservation[key].id}>{reservation[key].time}
						</button>
						)
				}								
				return button;
		},
		handleClick(e){
			this.props.goto(`/confirmation/${e.target.id}`)
		},
	render(){
		return(
			<div>	
				<DisplayRestaurant />
				{this.createButton()}
			</div>
		)
	}
})
export default Opentable