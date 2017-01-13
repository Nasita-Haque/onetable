import $ from 'jquery';


export const user = (data) => ({
  	type: "USER",
	data
})

export const userAuth = (user) => dispatch => {
	$.ajax({
		url: '/api/validate/userid',
		method: 'GET',
		data: 'data' 
	}).then(
	function(response) {
		dispatch(user(response))
	})
}

