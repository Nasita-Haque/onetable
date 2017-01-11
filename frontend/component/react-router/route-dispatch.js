import {fetchOpentable} from '../../action/confirmation-action.js'
import store from '../../store/store.js'

const dispatchOpentableInfo = () => {
	store.dispatch(fetchOpentable())
}

export default dispatchOpentableInfo;