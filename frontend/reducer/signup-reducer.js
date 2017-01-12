const _defaultState = {
	name: null,
	last: null,
	email: null,
	password: null
}

const signUpReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_USER" :
			//add case
			return action.data
		default:
			return state;
	}
}

export default signUpReducer;
