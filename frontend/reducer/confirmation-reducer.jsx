import '../action/confirmation-action.js'

const _defaultState = {
	opentableInfo: []
}

const confirmationReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "FETCH_DATA" :
			return ({
				openTableInfo: [
					...state.opentableInfo, 
					action.opentableInfo
				]
			})
		default:
			return state;
	}
}

export default confirmationReducer;
