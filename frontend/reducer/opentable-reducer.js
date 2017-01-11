const _defaultState = {
	date:null,
	time:null
}

const openTableReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_DATE" :
			var output = Object.assign({}, state)
			output.date = action.date
			return output
		default:
			return state;
	}
}

export default openTableReducer;


//TRACK
//logged in
//save user in state--log save state,
//track search, input or store in redux state,
//track of search results
//clicked restaurant track that (date time)
