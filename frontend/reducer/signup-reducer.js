const _defaultState = {
	name:"null",
	last:"null"
}

const reducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_USER" :
			var output = Object.assign({}, state)
			output.user = action.user
			return output
		default: 
			return state;
	}
}

export default reducer;