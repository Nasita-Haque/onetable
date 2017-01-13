
const openTableReducer = (state = {reservation:null,id:null}, action) => {
	switch(action.type){
		case "ADD_AVAILABLE" :
			return Object.assign({}, state, {reservation:action.reservation})
		case "ADD_ID" :
		console.log('log ADD_ID')
			return Object.assign({}, state, {id:action.id})
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
