import React from 'react'; //Import React
import store from '../../store/store.js'; //Import State
import {addDate} from "../../action/confirmation-action.js"; //Import Action

const Confirmation = React.createClass({
	componentDidMount(){
		let timeOut = () => (
			alert('Sorry! The 5 minute time limit is up. Please refresh to try again.')
		)
		setTimeout(timeOut, 300);
	},
	render(){
		console.log(this.props.openTableInfo)
		return(
			<div>
				<h1>Confirmation</h1>
			</div>
		)
	}
})


export default Confirmation
//this.props.params.opentable