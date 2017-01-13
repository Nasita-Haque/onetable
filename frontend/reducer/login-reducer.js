const _defaultState = {userData: false}

const logInReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_SESSION" :
			///new session

			return action.data

		default: 
			return state;
	}
}


export default logInReducer;






