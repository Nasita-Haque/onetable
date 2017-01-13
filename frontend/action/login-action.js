import $ from 'jquery';
 
const addSession = (data) => ({
	type: "ADD_SESSION",
	data	
})

const getUser = (data) => (dispatch) =>{
	console.log(data);
	$.ajax({
		url: '/api/validate', 
		method:'GET',
		data: data})
	  .then(function (response) {
	    console.log("response",response);
	    dispatch(addSession(response))
	  })
	  .catch(function (error) {
	    console.log(error);	
	  });
	 return Promise.resolve()
}


module.exports = {
	getUser
}