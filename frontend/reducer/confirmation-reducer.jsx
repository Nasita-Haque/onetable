const _defaultState = {
	user:null,
	date:null,
	restaurant:null,
	time:null
}

const reducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_DATE" :
			let output = Object.assign({}, state)
			output.date = action.date
			return output
		case "ADD_DATE" :
			let output = Object.assign({}, state)
			output.date = action.date
			return output
		default: 
			return state;
	}
}

export default reducer;