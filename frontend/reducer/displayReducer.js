
const displayReducer = (state = {}, action) => {
	switch(action.type){
		case "ADD_INFO" :
			return action.restaurantInfo
		default:
			return state;
	}
}


export default displayReducer;
