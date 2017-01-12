const _defaultState = []

const restaurantReducer = (state = _defaultState, action) => {
	switch(action.type) {
		case "RESTAURANTS":
			return ([...action.data])

		default:
			return state;
	}
}

export default restaurantReducer;
