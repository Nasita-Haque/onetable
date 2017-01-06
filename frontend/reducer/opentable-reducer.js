const _defaultState = {
	date:null,
	time:null
}

const reducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_DATE" :
			var output = Object.assign({}, state)
			output.date = action.date
			return output
		default: 
			return state;
	}
}

export default reducer;