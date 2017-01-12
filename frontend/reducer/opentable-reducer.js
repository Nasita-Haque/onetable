
const openTableReducer = (state = {}, action) => {
	switch(action.type){
		case "ADD_AVAILABLE" :
			return action.reservation
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
