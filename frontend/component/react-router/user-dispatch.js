import {userAuth} from '../../action/user-action.js'
import store from '../../store/store.js'

const currentUser = () => {
	return (dispatch) => {
		dispatch(userAuth())
	}
}

export default currentUser