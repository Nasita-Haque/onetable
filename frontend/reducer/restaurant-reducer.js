const _defaultState = ['Daniel']

const restaurantReducer = (state = _defaultState, action) => {
	switch(action.type) {
		case "restaurants":
			return ([...state, action.restaurants])

		default:
			return state;
	}
}

export default restaurantReducer;
