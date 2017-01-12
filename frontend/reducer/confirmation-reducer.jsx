// import FETCH_DATA from '../action/confirmation-action.js'

const _defaultState = {
	openTableInfo: []
}

const confirmationReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "FETCH_DATA" :
			return ({
				openTableInfo: [
					...state.openTableInfo, 
					action.data
				]
			})
		default:
			return state;
	}
}

export default confirmationReducer;
