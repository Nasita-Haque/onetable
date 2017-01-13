const _defaultState = {userData: false}

const logInReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_SESSION" :
			///new session

			return Object.assign({}, action.data, {userData:true})

		default: 
			return state;
	}
}


export default logInReducer;






