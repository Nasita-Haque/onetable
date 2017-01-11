const axios = require('axios')

const addSession = (data) => ({
	type: "ADD_SESSION",
	data	
})

const getUser = (data) => (dispatch) =>{
	axios.get('/api/validate', data)
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