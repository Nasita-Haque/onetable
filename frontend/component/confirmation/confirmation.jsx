import React from 'react'; //Import React
import store from '../../store/store.js'; //Import State
import axios from 'axios';

const Confirmation = React.createClass({
	componentDidMount(){
		let timeOut = () => (
			alert('Sorry! The 5 minute time limit is up. Please refresh to try again.')
		)
		setTimeout(timeOut, 300);
	},
	postReservation(){
		
	},
	render(){
		console.log(this.props.loginProps)
		let info = this.props.openTableProps.openTableInfo[0]
		console.log('INFO:', info)
		return(
		<div>
			{
				info ?  
					<div>
						<h1>Confirmation</h1>
						<h3>Restaurant:</h3>
						<div>{info.Restaurant.name}</div>
						<h3>Date:</h3>	
						<div>{info.date}</div>	
						<h3>Time:</h3>
						<div>{info.time}</div>	
						<br /> 
						<p>Please click the confirm below if this reservation is correct.</p>
						<button value="Confirm!" onClick={postReservation}>Confirm!</button>
					</div> 
				: null 
			}
		</div>
		) 
	}
})


export default Confirmation
//this.props.params.opentable