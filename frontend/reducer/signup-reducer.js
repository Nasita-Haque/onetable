const _defaultState = {
	name:"null",
	last:"null",
	email: 'null',
	psw: 'null'
}

const signUpReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_USER" :
			//add case
			return 
		default:
			return state;
	}
}

export default signUpReducer;
