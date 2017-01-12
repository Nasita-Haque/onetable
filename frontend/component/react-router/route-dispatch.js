import {getOpentableAsync} from '../../action/confirmation-action.js'
import store from '../../store/store.js'


//can access params by passing props through store. 
const dispatchOpentableInfo = (nextState) => {
	console.log(nextState.params.opentable)
	store.dispatch(getOpentableAsync(nextState.params.opentable))
}

export default dispatchOpentableInfo;
