import $ from 'jquery'

export const addUser = (data) => ({
	type: "ADD_USER",
	data
})

const createUser = (data) => (dispatch) => {
	console.log(data);
	$.ajax({
		url: '/api/user', 
		method:'POST',
		data: data})
	  .then(function (response) {
	    console.log("response",response);
	    dispatch(addUser(response))
	  })
	  .catch(function (error) {
	    console.log(error);	
	  });
	 return Promise.resolve()
}



module.exports = {
	createUser
 }



 

