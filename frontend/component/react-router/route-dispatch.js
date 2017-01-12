import {fetchOpentable} from '../../action/confirmation-action.js'
import store from '../../store/store.js'


//can access params by passing props through store. 
const dispatchOpentableInfo = (nextState) => {
	store.getState()
	console.log(nextState.params.opentable)
	store.dispatch(fetchOpentable(nextState.params.opentable))
}

export default dispatchOpentableInfo;