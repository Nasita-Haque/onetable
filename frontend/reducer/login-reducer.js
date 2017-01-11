const _defaultState = {
	email: 'null',
	psw: null
}

const logInReducer = (state = _defaultState, action) => {
	switch(action.type){
		case "ADD_SESSION" :
			///new session
			return 
		default: 
			return state;
	}
}


export default logInReducer;





// export const addSession = user => ({
//   type: ADD_SESSION,
//   session
// })

// const fetchPosts = reddit => dispatch => {
//   dispatch(requestPosts(reddit))
//   return fetch(`https://www.reddit.com/r/${reddit}.json`)
//     .then(response => response.json())
//     .then(json => dispatch(receivePosts(reddit, json)))
// }
