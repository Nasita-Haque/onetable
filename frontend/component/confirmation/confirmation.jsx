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
	updateReservation(){
		// axios.post('/api/reservation/' + this.props.loginProp.id + '/' + this.props.params.opentable)
		//  .then(((response) =>{
		//     console.log(response);
		//  })
		//  .catch(((error) =>{
		//     console.log(error);
		//  });

		axios.put('/api/opentable/' + this.props.params.opentable)
		 .then((response) =>{
		    console.log(response);
		 })
		 .catch((error) =>{
		    console.log(error);
		 })
	},
	render(){
		console.log('CHECK:', this.props.loginProps)
		let id = this.props.loginProps 
		let info = this.props.openTableProps.openTableInfo[0]
		console.log('INFO:', info)
		return(
		<div>
			{
				info ?  
					<div className="confirmation-main-div">
						<h1 className='title-div'>You're almost done!</h1>
						<div className="opentable-div">
							<h3 className="info-title">Restaurant</h3>
							<div>{info.Restaurant.name}</div>
							<h3 className="info-title">Date</h3>	
							<div>{info.date}</div>	
							<h3 className="info-title">Time</h3>
							<div>{info.time}</div>
						</div>
						<br /> 
						<p className="p-tag">Please confirm below if this reservation is correct.</p>
						<button className="confirmation-button" onClick={this.updateReservation}>Confirm</button>
					</div> 
				: null 
			}
		</div>
		) 
	}
})


export default Confirmation
//this.props.params.opentable