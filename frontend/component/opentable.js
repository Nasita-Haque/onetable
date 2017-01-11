import {addReservation} from "../action/opentable-action.js"
import React from 'react'
import store from '../store/store.js'
import axios from 'axios'
import moment from 'moment'
// import {withRouter} from 'react-router'
// import {connect} from 'react-redux'
// import Confirmation from './confirmation/confirmation.jsx'

const Opentable = React.createClass({
	componentDidMount(){
			axios.get(`/api/opentable/${this.props.params.RestaurantId}`)
				.then(data => {
					console.log(data)
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
					console.log(data)
					store.dispatch(addReservation(data))
					})
				 .catch(error => console.log(error))
		},
	render(){
		this.props.reservation.reservation ? console.log("props",this.props.reservation) : null
		
		return(
			<div>
			</div>
		)
	}
})
export default Opentable