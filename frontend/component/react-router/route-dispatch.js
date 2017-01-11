import {fetchOpentable} from '../../action/confirmation-action.js'
import store from '../../store/store.js'


//can access params by passing props through store. 
const dispatchOpentableInfo = (props) => {
	console.log("PROPS:", props.params.opentable)
	store.dispatch(fetchOpentable(props.params.opentable))
}

export default dispatchOpentableInfo;